package pims

import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import scala.util.Random

class AddVisitSimulation extends Simulation {
  val random = (list: Seq[String]) => {
    list(Random.nextInt(list.size))
  }

  val httpProtocol = http 
    .baseUrl(System.getProperty("server", "http://localhost:3000")) 
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") 
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")

  val scn = scenario("AddVisitSimulation")
    .exec(http("Navigate to owners page")
      .get("/owners/find"))
    .pause(1)
    .repeat(2) {
      exec(http("List owners by last name")
        .get("/owners?lastName=")
        .check(css("table[id='owners'] a", "href").findAll.transform(random).saveAs("ownerLink")))
      .pause(1)
      .exec(http("Get a random owner")
				.get("${ownerLink}")
        .check(css("a[href$='/visits/new']", "href").findAll.transform(random).saveAs("visitLink")))
      .pause(1)
      .exec(http("Navigate to the new visit form")
        .get("/owners/${visitLink}"))
      .pause(1)
      .exec(http("Add a new visit")
        .post("/owners/${visitLink}")
        .formParam("date", "2020-03-21")
        .formParam("description", "Visit my pet")
        .formParam("petId", "${visitLink}".split("/").last))
    }

  setUp(scn.inject(rampUsers(Integer.getInteger("userCount", 5)) during (Integer.getInteger("testDuration", 5) seconds)))
    .protocols(httpProtocol)
}
