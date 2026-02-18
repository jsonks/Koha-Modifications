# Hotspot Tracker

![hotspot tracker](https://raw.githubusercontent.com/jsonks/Koha-Modifications/refs/heads/main/Staff/Hotspot%20Tracker/hotspottracker.png)

## Purpose

This leverages Koha's report templates to summarize hotspots in a dashboard format and give staff an easy way to track and manage individual devices.

## Setup

### Authorized values
The report for the hotspot tracker relies on two specific Authorised values:

* DAMAGED
  * Authorized value: 3
  * Description: Deactivated
* LOC
  * Authorized value code contains "hotspot"
  * Description: Hotspot

*Note: The report and template can be adjusted to use CCODE, itype, etc. and other damaged statuses if needed.*

### SQL
Add via Reports > Create from SQL

### Template
Add via Tools > Notices and Slips > New notice > Reports in the 'Print' section

## To use
1. Run the report
2. Click "Run with template" at the top and choose the proper template*

**This link can be added elsewhere for easy access, such as a top nav dropdown item or on the circulation homepage*

>[!IMPORTANT]
>The ability to toggle statuses requires the edit_item permission.
