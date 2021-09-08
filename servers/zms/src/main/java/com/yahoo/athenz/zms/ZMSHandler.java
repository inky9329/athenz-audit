//
// This file generated by rdl 1.5.2. Do not modify!
//
package com.yahoo.athenz.zms;

import com.yahoo.rdl.*;
import javax.ws.rs.core.Response;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//
// ZMSHandler is the interface that the service implementation must implement
//
public interface ZMSHandler { 
    Domain getDomain(ResourceContext context, String domain);
    DomainList getDomainList(ResourceContext context, Integer limit, String skip, String prefix, Integer depth, String account, Integer productId, String roleMember, String roleName, String subscription, String tagKey, String tagValue, String businessService, String modifiedSince);
    Domain postTopLevelDomain(ResourceContext context, String auditRef, TopLevelDomain detail);
    Domain postSubDomain(ResourceContext context, String parent, String auditRef, SubDomain detail);
    Domain postUserDomain(ResourceContext context, String name, String auditRef, UserDomain detail);
    void deleteTopLevelDomain(ResourceContext context, String name, String auditRef);
    void deleteSubDomain(ResourceContext context, String parent, String name, String auditRef);
    void deleteUserDomain(ResourceContext context, String name, String auditRef);
    void putDomainMeta(ResourceContext context, String name, String auditRef, DomainMeta detail);
    void putDomainSystemMeta(ResourceContext context, String name, String attribute, String auditRef, DomainMeta detail);
    void putDomainTemplate(ResourceContext context, String name, String auditRef, DomainTemplate domainTemplate);
    void putDomainTemplateExt(ResourceContext context, String name, String template, String auditRef, DomainTemplate domainTemplate);
    DomainTemplateList getDomainTemplateList(ResourceContext context, String name);
    void deleteDomainTemplate(ResourceContext context, String name, String template, String auditRef);
    DomainMetaStoreValidValuesList getDomainMetaStoreValidValuesList(ResourceContext context, String attributeName, String userName);
    DomainDataCheck getDomainDataCheck(ResourceContext context, String domainName);
    void putEntity(ResourceContext context, String domainName, String entityName, String auditRef, Entity entity);
    Entity getEntity(ResourceContext context, String domainName, String entityName);
    void deleteEntity(ResourceContext context, String domainName, String entityName, String auditRef);
    EntityList getEntityList(ResourceContext context, String domainName);
    RoleList getRoleList(ResourceContext context, String domainName, Integer limit, String skip);
    Roles getRoles(ResourceContext context, String domainName, Boolean members, String tagKey, String tagValue);
    Role getRole(ResourceContext context, String domainName, String roleName, Boolean auditLog, Boolean expand, Boolean pending);
    void putRole(ResourceContext context, String domainName, String roleName, String auditRef, Role role);
    void deleteRole(ResourceContext context, String domainName, String roleName, String auditRef);
    Membership getMembership(ResourceContext context, String domainName, String roleName, String memberName, String expiration);
    DomainRoleMembers getOverdueReview(ResourceContext context, String domainName);
    DomainRoleMembers getDomainRoleMembers(ResourceContext context, String domainName);
    DomainRoleMember getPrincipalRoles(ResourceContext context, String principal, String domainName);
    void putMembership(ResourceContext context, String domainName, String roleName, String memberName, String auditRef, Membership membership);
    void deleteMembership(ResourceContext context, String domainName, String roleName, String memberName, String auditRef);
    void deletePendingMembership(ResourceContext context, String domainName, String roleName, String memberName, String auditRef);
    void putDefaultAdmins(ResourceContext context, String domainName, String auditRef, DefaultAdmins defaultAdmins);
    void putRoleSystemMeta(ResourceContext context, String domainName, String roleName, String attribute, String auditRef, RoleSystemMeta detail);
    void putRoleMeta(ResourceContext context, String domainName, String roleName, String auditRef, RoleMeta detail);
    void putMembershipDecision(ResourceContext context, String domainName, String roleName, String memberName, String auditRef, Membership membership);
    void putRoleReview(ResourceContext context, String domainName, String roleName, String auditRef, Role role);
    Groups getGroups(ResourceContext context, String domainName, Boolean members);
    Group getGroup(ResourceContext context, String domainName, String groupName, Boolean auditLog, Boolean pending);
    void putGroup(ResourceContext context, String domainName, String groupName, String auditRef, Group group);
    void deleteGroup(ResourceContext context, String domainName, String groupName, String auditRef);
    GroupMembership getGroupMembership(ResourceContext context, String domainName, String groupName, String memberName, String expiration);
    DomainGroupMember getPrincipalGroups(ResourceContext context, String principal, String domainName);
    void putGroupMembership(ResourceContext context, String domainName, String groupName, String memberName, String auditRef, GroupMembership membership);
    void deleteGroupMembership(ResourceContext context, String domainName, String groupName, String memberName, String auditRef);
    void deletePendingGroupMembership(ResourceContext context, String domainName, String groupName, String memberName, String auditRef);
    void putGroupSystemMeta(ResourceContext context, String domainName, String groupName, String attribute, String auditRef, GroupSystemMeta detail);
    void putGroupMeta(ResourceContext context, String domainName, String groupName, String auditRef, GroupMeta detail);
    void putGroupMembershipDecision(ResourceContext context, String domainName, String groupName, String memberName, String auditRef, GroupMembership membership);
    void putGroupReview(ResourceContext context, String domainName, String groupName, String auditRef, Group group);
    DomainGroupMembership getPendingDomainGroupMembersList(ResourceContext context, String principal);
    PolicyList getPolicyList(ResourceContext context, String domainName, Integer limit, String skip);
    Policies getPolicies(ResourceContext context, String domainName, Boolean assertions);
    Policy getPolicy(ResourceContext context, String domainName, String policyName);
    void putPolicy(ResourceContext context, String domainName, String policyName, String auditRef, Policy policy);
    void deletePolicy(ResourceContext context, String domainName, String policyName, String auditRef);
    Assertion getAssertion(ResourceContext context, String domainName, String policyName, Long assertionId);
    Assertion putAssertion(ResourceContext context, String domainName, String policyName, String auditRef, Assertion assertion);
    void deleteAssertion(ResourceContext context, String domainName, String policyName, Long assertionId, String auditRef);
    AssertionConditions putAssertionConditions(ResourceContext context, String domainName, String policyName, Long assertionId, String auditRef, AssertionConditions assertionConditions);
    AssertionCondition putAssertionCondition(ResourceContext context, String domainName, String policyName, Long assertionId, String auditRef, AssertionCondition assertionCondition);
    void deleteAssertionConditions(ResourceContext context, String domainName, String policyName, Long assertionId, String auditRef);
    void deleteAssertionCondition(ResourceContext context, String domainName, String policyName, Long assertionId, Integer conditionId, String auditRef);
    void putServiceIdentity(ResourceContext context, String domain, String service, String auditRef, ServiceIdentity detail);
    ServiceIdentity getServiceIdentity(ResourceContext context, String domain, String service);
    void deleteServiceIdentity(ResourceContext context, String domain, String service, String auditRef);
    ServiceIdentities getServiceIdentities(ResourceContext context, String domainName, Boolean publickeys, Boolean hosts);
    ServiceIdentityList getServiceIdentityList(ResourceContext context, String domainName, Integer limit, String skip);
    PublicKeyEntry getPublicKeyEntry(ResourceContext context, String domain, String service, String id);
    void putPublicKeyEntry(ResourceContext context, String domain, String service, String id, String auditRef, PublicKeyEntry publicKeyEntry);
    void deletePublicKeyEntry(ResourceContext context, String domain, String service, String id, String auditRef);
    void putServiceIdentitySystemMeta(ResourceContext context, String domain, String service, String attribute, String auditRef, ServiceIdentitySystemMeta detail);
    void putTenancy(ResourceContext context, String domain, String service, String auditRef, Tenancy detail);
    void deleteTenancy(ResourceContext context, String domain, String service, String auditRef);
    void putTenant(ResourceContext context, String domain, String service, String tenantDomain, String auditRef, Tenancy detail);
    void deleteTenant(ResourceContext context, String domain, String service, String tenantDomain, String auditRef);
    TenantResourceGroupRoles putTenantResourceGroupRoles(ResourceContext context, String domain, String service, String tenantDomain, String resourceGroup, String auditRef, TenantResourceGroupRoles detail);
    TenantResourceGroupRoles getTenantResourceGroupRoles(ResourceContext context, String domain, String service, String tenantDomain, String resourceGroup);
    void deleteTenantResourceGroupRoles(ResourceContext context, String domain, String service, String tenantDomain, String resourceGroup, String auditRef);
    ProviderResourceGroupRoles putProviderResourceGroupRoles(ResourceContext context, String tenantDomain, String provDomain, String provService, String resourceGroup, String auditRef, ProviderResourceGroupRoles detail);
    ProviderResourceGroupRoles getProviderResourceGroupRoles(ResourceContext context, String tenantDomain, String provDomain, String provService, String resourceGroup);
    void deleteProviderResourceGroupRoles(ResourceContext context, String tenantDomain, String provDomain, String provService, String resourceGroup, String auditRef);
    Access getAccess(ResourceContext context, String action, String resource, String domain, String checkPrincipal);
    Access getAccessExt(ResourceContext context, String action, String resource, String domain, String checkPrincipal);
    ResourceAccessList getResourceAccessList(ResourceContext context, String principal, String action);
    Response getSignedDomains(ResourceContext context, String domain, String metaOnly, String metaAttr, Boolean master, Boolean conditions, String matchingTag);
    Response getJWSDomain(ResourceContext context, String name, Boolean signatureP1363Format, String matchingTag);
    UserToken getUserToken(ResourceContext context, String userName, String serviceNames, Boolean header);
    UserToken optionsUserToken(ResourceContext context, String userName, String serviceNames);
    ServicePrincipal getServicePrincipal(ResourceContext context);
    ServerTemplateList getServerTemplateList(ResourceContext context);
    Template getTemplate(ResourceContext context, String template);
    DomainTemplateDetailsList getDomainTemplateDetailsList(ResourceContext context, String name);
    DomainTemplateDetailsList getServerTemplateDetailsList(ResourceContext context);
    UserList getUserList(ResourceContext context, String domainName);
    void deleteUser(ResourceContext context, String name, String auditRef);
    void deleteDomainRoleMember(ResourceContext context, String domainName, String memberName, String auditRef);
    Quota getQuota(ResourceContext context, String name);
    void putQuota(ResourceContext context, String name, String auditRef, Quota quota);
    void deleteQuota(ResourceContext context, String name, String auditRef);
    Status getStatus(ResourceContext context);
    DomainRoleMembership getPendingDomainRoleMembersList(ResourceContext context, String principal);
    UserAuthorityAttributeMap getUserAuthorityAttributeMap(ResourceContext context);
    Schema getRdlSchema(ResourceContext context);
    ResourceContext newResourceContext(HttpServletRequest request, HttpServletResponse response, String apiName);
    void recordMetrics(ResourceContext ctx, int httpStatus);
}
