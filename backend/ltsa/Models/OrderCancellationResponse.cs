/* 
 * Title Direct Search Services
 *
 * Title Direct Search Services
 *
 * OpenAPI spec version: 4.0.1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System.Runtime.Serialization;


namespace Pims.Ltsa.Models
{
    /// <summary>
    /// Order cancellation record
    /// </summary>
    [DataContract]
    public partial class OrderCancellationResponse
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OrderCancellationResponse" /> class.
        /// </summary>
        /// <param name="orderId">orderId.</param>
        /// <param name="orderCancellationID">orderCancellationID.</param>
        /// <param name="status">status.</param>
        public OrderCancellationResponse(string orderId = default, string orderCancellationID = default, string status = default)
        {
            this.OrderId = orderId;
            this.OrderCancellationID = orderCancellationID;
            this.Status = status;
        }

        /// <summary>
        /// Gets or Sets OrderId
        /// </summary>
        [DataMember(Name = "orderId", EmitDefaultValue = false)]
        public string OrderId { get; set; }

        /// <summary>
        /// Gets or Sets OrderCancellationID
        /// </summary>
        [DataMember(Name = "orderCancellationID", EmitDefaultValue = false)]
        public string OrderCancellationID { get; set; }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public string Status { get; set; }
    }
}
