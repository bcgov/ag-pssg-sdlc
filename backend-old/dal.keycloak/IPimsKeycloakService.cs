using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Entity = Pims.Dal.Entities;

namespace Pims.Dal.Keycloak
{
    public interface IPimsKeycloakService
    {
        #region Roles
        Task<IEnumerable<Entity.Role>> SyncRolesAsync();
        Task<IEnumerable<Entity.Role>> GetRolesAsync(int page = 1, int quantity = 10, string search = null);
        Task<Entity.Role> GetRoleAsync(Guid key);
        Task<Entity.Role> UpdateRoleAsync(Entity.Role role);
        #endregion

        #region Users
        Task<Entity.User> SyncUserAsync(Guid key);
        Task<IEnumerable<Entity.User>> GetUsersAsync(int page = 1, int quantity = 10, string search = null);
        Task<Entity.User> GetUserAsync(Guid key);
        Task<Entity.User> UpdateUserAsync(Entity.User user);
        Task<Entity.AccessRequest> UpdateAccessRequestAsync(Entity.AccessRequest update);
        #endregion
    }
}
