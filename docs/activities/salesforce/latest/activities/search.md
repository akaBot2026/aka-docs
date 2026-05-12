---
id: search
title: "Search"
sidebar_label: "Search"
sidebar_position: 16
description: "Search activity documentation."
displayed_sidebar: activitiesSidebar
---
# Search

RCA.Activities.Salesforce.Search

You may use this activity to perform a parameterized search operation within Salesforce.

**Properties**

**Advanced Search**

* **Search:** Specifies a complete and valid parameterized search string.

**Basic Search:**

* **Fields:** Lists Salesforce Object fields to retrieve. If unspecified, only Id is retrieved. These fields must be present on all listed Salesforce Objects.
* **SalesforceObjects:** Enumerates Salesforce Objects to search.
* **SearchTerm:** Provides a valid search term.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Result:** The result as a Dictionary where the Salesforce Object is the key and a DataTable containing its records is the value. If there are no records for a specified object in the search, it won't be included in the dictionary.
* **SalesforceStatus:** The status returned from Salesforce once the searc is completed, stored in a SalesforceStatus variable.