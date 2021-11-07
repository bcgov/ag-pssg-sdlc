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
    /// Parameters required for ordering a Document or Plan
    /// </summary>
    [DataContract]
    public partial class DocumentOrPlanOrderParameters
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DocumentOrPlanOrderParameters" /> class.
        /// </summary>
        /// <param name="docOrPlanNumber">Document or plan number # Note: All plan numbers must include the plan’s prefix and/or suffix  (required).</param>
        /// <param name="orderRemarks">Optional remarks that describe the order.</param>
        /// <param name="includePlanCertificationPage">Indicate whether to include the Plan Certification page for an electronic plan.  This parameter will be ignored if the ordered product is not an electronic plan. (default to false).</param>
        /// <param name="documentDistrictCode">documentDistrictCode.</param>
        public DocumentOrPlanOrderParameters(string docOrPlanNumber = default, string orderRemarks = default, bool? includePlanCertificationPage = false, LandTitleDistrictCode documentDistrictCode = default)
        {
            // to ensure "docOrPlanNumber" is required (not null)
            if (docOrPlanNumber == null)
            {
                throw new InvalidDataException("docOrPlanNumber is a required property for DocumentOrPlanOrderParameters and cannot be null");
            }
            else
            {
                this.DocOrPlanNumber = docOrPlanNumber;
            }
            this.OrderRemarks = orderRemarks;
            // use default value if no "includePlanCertificationPage" provided
            if (includePlanCertificationPage == null)
            {
                this.IncludePlanCertificationPage = false;
            }
            else
            {
                this.IncludePlanCertificationPage = includePlanCertificationPage;
            }
            this.DocumentDistrictCode = documentDistrictCode;
        }

        /// <summary>
        /// Document or plan number # Note: All plan numbers must include the plan’s prefix and/or suffix 
        /// </summary>
        /// <value>Document or plan number # Note: All plan numbers must include the plan’s prefix and/or suffix </value>
        [DataMember(Name = "docOrPlanNumber", EmitDefaultValue = false)]
        public string DocOrPlanNumber { get; set; }

        /// <summary>
        /// Optional remarks that describe the order
        /// </summary>
        /// <value>Optional remarks that describe the order</value>
        [DataMember(Name = "orderRemarks", EmitDefaultValue = false)]
        public string OrderRemarks { get; set; }

        /// <summary>
        /// Indicate whether to include the Plan Certification page for an electronic plan.  This parameter will be ignored if the ordered product is not an electronic plan.
        /// </summary>
        /// <value>Indicate whether to include the Plan Certification page for an electronic plan.  This parameter will be ignored if the ordered product is not an electronic plan.</value>
        [DataMember(Name = "includePlanCertificationPage", EmitDefaultValue = false)]
        public bool? IncludePlanCertificationPage { get; set; }

        /// <summary>
        /// Gets or Sets DocumentDistrictCode
        /// </summary>
        [DataMember(Name = "documentDistrictCode", EmitDefaultValue = false)]
        public LandTitleDistrictCode DocumentDistrictCode { get; set; }
    }
}
