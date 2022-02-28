using FluentAssertions;
using Pims.Core.Comparers;
using Pims.Core.Test;
using System.Diagnostics.CodeAnalysis;
using Xunit;
using Entity = Pims.Dal.Entities;

namespace Pims.Api.Test.Helpers
{
    [Trait("category", "unit")]
    [Trait("category", "core")]
    [Trait("category", "function")]
    [ExcludeFromCodeCoverage]
    public class DeepPropertyCompareTest
    {
        #region Tests
        #region Equals
        [Fact]
        public void Equal_Identical()
        {
            // Arrange
            var parcel1 = EntityHelper.CreateProperty(1);

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(parcel1, parcel1);

            // Assert
            Assert.True(result);
        }

        [Fact]
        public void Equal()
        {
            // Arrange
            var o1 = new { Id = 1, Name = "test", Items = new[] { new { Id = 2 } } };
            var o2 = new { Id = 1, Name = "test", Items = new[] { new { Id = 2 } } };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.True(result);
        }

        [Fact]
        public void Not_Equal()
        {
            // Arrange
            var parcel1 = EntityHelper.CreateProperty(1);
            var parcel2 = EntityHelper.CreateProperty(1);

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(parcel1, parcel2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_DifferentObjects()
        {
            // Arrange
            var o1 = EntityHelper.CreatePropertyClassificationType("test");
            var o2 = new { Id = 1, Name = "test", IsDisabled = false, DisplayOrder = 0, o1.ConcurrencyControlNumber };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_Null1()
        {
            // Arrange
            Entity.PimsProperty parcel1 = null;
            var parcel2 = EntityHelper.CreateProperty(1);

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(parcel1, parcel2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_Null2()
        {
            // Arrange
            var parcel1 = EntityHelper.CreateProperty(1);
            Entity.PimsProperty parcel2 = null;

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(parcel1, parcel2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_Collection()
        {
            // Arrange
            var o1 = new { Id = 1, Name = "test", Items = new[] { new { Id = 2 }, new { Id = 3 } } };
            var o2 = new { Id = 1, Name = "test", Items = new[] { new { Id = 2 } } };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_XPropertyNull()
        {
            // Arrange
            var o1 = new { Id = (int?)null };
            var o2 = new { Id = 1 };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_YPropertyNull()
        {
            // Arrange
            var o1 = new { Id = 1 };
            var o2 = new { Id = (int?)null };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_PropertyObject()
        {
            // Arrange
            var o1 = new { Test = new { Id = 1 } };
            var o2 = new { Test = new { Id = 2 } };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_Enumerable_XPropertyNull()
        {
            // Arrange
            var o1 = new { Rows = new[] { new { Id = (int?)null } } };
            var o2 = new { Rows = new[] { new { Id = 1 } } };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Not_Equal_Enumerable_YPropertyNull()
        {
            // Arrange
            var o1 = new { Rows = new[] { new { Id = 1 } } };
            var o2 = new { Rows = new[] { new { Id = (int?)null } } };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Equal_Enumerable_PropertyNull()
        {
            // Arrange
            var o1 = new { Rows = new[] { new { Id = (int?)null } } };
            var o2 = new { Rows = new[] { new { Id = (int?)null } } };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.True(result);
        }

        [Fact]
        public void Not_Equal_Enumerable_Children()
        {
            // Arrange
            var o1 = new { Rows = new[] { new { Item = new { Id = 1 } } } };
            var o2 = new { Rows = new[] { new { Item = new { Id = 2 } } } };

            var comparer = new DeepPropertyCompare();

            // Act
            var result = comparer.Equals(o1, o2);

            // Assert
            Assert.False(result);
        }
        #endregion

        #region GetHashCode
        [Fact]
        public void GetHashCode_Success()
        {
            // Arrange
            var o1 = new { Id = 1, Name = "test", Items = new[] { new { Id = 2 }, new { Id = 3 } } };
            var o2 = new { Id = 1, Name = "test", Items = new[] { new { Id = 2 }, new { Id = 3 } } };

            var comparer = new DeepPropertyCompare();

            // Act
            var result1 = comparer.GetHashCode(o1);
            var result2 = comparer.GetHashCode(o2);

            // Assert
            result1.Should().Be(result2);
        }
        #endregion
        #endregion
    }
}
