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
using System.Text.Json.Serialization;

namespace Pims.Ltsa.Models
{
    /// <summary>
    /// ParcelInfoOrder
    /// </summary>
    [DataContract]
    public partial class ParcelInfoOrder : OrderParent<ParcelInfo>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ParcelInfoOrder" /> class.
        /// </summary>
        /// <param name="productOrderParameters">productOrderParameters.</param>
        /// <param name="orderedProduct">orderedProduct.</param>
        [JsonConstructor]
        public ParcelInfoOrder(ParcelInfoOrderParameters productOrderParameters = default, OrderedProduct<ParcelInfo> orderedProduct = default, ProductTypeEnum productType = default, string fileReference = default, string orderId = default, StatusEnum? status = default, BillingInfo billingInfo = default) : base(productType, fileReference, orderId, status, billingInfo)
        {
            this.ProductOrderParameters = productOrderParameters;
            this.OrderedProduct = orderedProduct;
            this.ProductType = ProductTypeEnum.parcelInfo;
            this.FileReference = "folio";
        }

        /// <summary>
        /// Gets or Sets ProductOrderParameters
        /// </summary>
        [DataMember(Name = "productOrderParameters", EmitDefaultValue = false)]
        public ParcelInfoOrderParameters ProductOrderParameters { get; set; }

        /// <summary>
        /// Gets or Sets OrderedProduct
        /// </summary>
        [DataMember(Name = "orderedProduct", EmitDefaultValue = false)]
        public override OrderedProduct<ParcelInfo> OrderedProduct { get; set; }
    }
}
