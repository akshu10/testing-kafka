# testing-kafka
A simple Proof of concept to demo Apache kafka 


## Overview

##### Concepts 
Cluster - is a group of servers that and other resources that act like a 
single system and enable high **availability**.
Kafka - runs as a cluster of one or more servers that can span multiple data centers 
or cloud regions.
Broker - A broker in Kafka is any server that is the storage layer on a Kafka cluster


Topics -
> 1. Topics are multi-consumer and multi-porducer
> 2. Events on a topic can be read as often as possible
> 3. Topics are partitioned (To allow scalability and load balancing on topics) 
>>>>  a. Events with the same event KEY are written to the same partition. 

---
##### Message Delivery Semantics

Kafka provides the following gurantees: 
1. At most once—Messages may be lost but are never redelivered.
2. At least once—Messages are never lost but may be redelivered.
3. Exactly once—this is what people actually want, each message is delivered once and only once.

