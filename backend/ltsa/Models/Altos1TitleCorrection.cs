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
    /// Altos1TitleCorrection
    /// </summary>
    [DataContract]
    public partial class Altos1TitleCorrection
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Altos1TitleCorrection" /> class.
        /// </summary>
        /// <param name="number">System generated correction number (required).</param>
        /// <param name="referenceDescription">Free text (required).</param>
        /// <param name="enteredDate">Entered date and time.</param>
        /// <param name="correctionDate">Correction date and time.</param>
        /// <param name="previousCorrectionNumber">Previous correction number.</param>
        /// <param name="correctionText">Text of title correction.</param>
        public Altos1TitleCorrection(string number = default, string referenceDescription = default, DateTime? enteredDate = default, DateTime? correctionDate = default, string previousCorrectionNumber = default, string correctionText = default)
        {
            // to ensure "number" is required (not null)
            if (number == null)
            {
                throw new InvalidDataException("number is a required property for Altos1TitleCorrection and cannot be null");
            }
            else
            {
                this.Number = number;
            }
            // to ensure "referenceDescription" is required (not null)
            if (referenceDescription == null)
            {
                throw new InvalidDataException("referenceDescription is a required property for Altos1TitleCorrection and cannot be null");
            }
            else
            {
                this.ReferenceDescription = referenceDescription;
            }
            this.EnteredDate = enteredDate;
            this.CorrectionDate = correctionDate;
            this.PreviousCorrectionNumber = previousCorrectionNumber;
            this.CorrectionText = correctionText;
        }

        /// <summary>
        /// System generated correction number
        /// </summary>
        /// <value>System generated correction number</value>
        [DataMember(Name = "number", EmitDefaultValue = false)]
        public string Number { get; set; }

        /// <summary>
        /// Free text
        /// </summary>
        /// <value>Free text</value>
        [DataMember(Name = "referenceDescription", EmitDefaultValue = false)]
        public string ReferenceDescription { get; set; }

        /// <summary>
        /// Entered date and time
        /// </summary>
        /// <value>Entered date and time</value>
        [DataMember(Name = "enteredDate", EmitDefaultValue = false)]
        public DateTime? EnteredDate { get; set; }

        /// <summary>
        /// Correction date and time
        /// </summary>
        /// <value>Correction date and time</value>
        [DataMember(Name = "correctionDate", EmitDefaultValue = false)]
        public DateTime? CorrectionDate { get; set; }

        /// <summary>
        /// Previous correction number
        /// </summary>
        /// <value>Previous correction number</value>
        [DataMember(Name = "previousCorrectionNumber", EmitDefaultValue = false)]
        public string PreviousCorrectionNumber { get; set; }

        /// <summary>
        /// Text of title correction
        /// </summary>
        /// <value>Text of title correction</value>
        [DataMember(Name = "correctionText", EmitDefaultValue = false)]
        public string CorrectionText { get; set; }
    }
}
