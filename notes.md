# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.


## A good data model

- caotures ALL the information the system needs
- captures ONLY the information the system needs. 
- reflects rea;iyu )from the point of view of the system)
- is flexible, can evolve with the system.
- guarantee 'data integretity', without sacrficing too much performance.