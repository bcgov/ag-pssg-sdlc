/* 
 * Title Direct Search Services
 *
 * Title Direct Search Services
 *
 * OpenAPI spec version: 4.0.1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System.IO;
using System.Runtime.Serialization;


namespace Pims.Ltsa.Models
{
    /// <summary>
    /// Order Id for cancellation
    /// </summary>
    [DataContract]
    public partial class OrderCancellation
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OrderCancellation" /> class.
        /// </summary>
        /// <param name="orderId">orderId (required).</param>
        public OrderCancellation(string orderId = default)
        {
            // to ensure "orderId" is required (not null)
            if (orderId == null)
            {
                throw new InvalidDataException("orderId is a required property for OrderCancellation and cannot be null");
            }
            else
            {
                this.OrderId = orderId;
            }
        }

        /// <summary>
        /// Gets or Sets OrderId
        /// </summary>
        [DataMember(Name = "orderId", EmitDefaultValue = false)]
        public string OrderId { get; set; }
    }
}
