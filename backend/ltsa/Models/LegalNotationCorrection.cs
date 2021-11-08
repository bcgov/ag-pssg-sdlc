/* 
 * Title Direct Search Services
 *
 * Title Direct Search Services
 *
 * OpenAPI spec version: 4.0.1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System;
using System.IO;
using System.Runtime.Serialization;


namespace Pims.Ltsa.Models
{
    /// <summary>
    /// LegalNotationCorrection
    /// </summary>
    [DataContract]
    public partial class LegalNotationCorrection
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LegalNotationCorrection" /> class.
        /// </summary>
        /// <param name="reason">Legal Notation correction reason.</param>
        /// <param name="originatingCorrectionApplication">The Application that initiated the Title correction (required).</param>
        /// <param name="enteredDate">Date and Time when the correction was applied to Legal Notation.</param>
        public LegalNotationCorrection(string reason = default, string originatingCorrectionApplication = default, DateTime? enteredDate = default)
        {
            // to ensure "originatingCorrectionApplication" is required (not null)
            if (originatingCorrectionApplication == null)
            {
                throw new InvalidDataException("originatingCorrectionApplication is a required property for LegalNotationCorrection and cannot be null");
            }
            else
            {
                this.OriginatingCorrectionApplication = originatingCorrectionApplication;
            }
            this.Reason = reason;
            this.EnteredDate = enteredDate;
        }

        /// <summary>
        /// Legal Notation correction reason
        /// </summary>
        /// <value>Legal Notation correction reason</value>
        [DataMember(Name = "reason", EmitDefaultValue = false)]
        public string Reason { get; set; }

        /// <summary>
        /// The Application that initiated the Title correction
        /// </summary>
        /// <value>The Application that initiated the Title correction</value>
        [DataMember(Name = "originatingCorrectionApplication", EmitDefaultValue = false)]
        public string OriginatingCorrectionApplication { get; set; }

        /// <summary>
        /// Date and Time when the correction was applied to Legal Notation
        /// </summary>
        /// <value>Date and Time when the correction was applied to Legal Notation</value>
        [DataMember(Name = "enteredDate", EmitDefaultValue = false)]
        public DateTime? EnteredDate { get; set; }
    }
}
