# Maxwell Developer Portal

# Overview
 >NHE Shared Edu Services are foundational to Elsevier's adaptive learning systems. We are a collection of RESTful microservices deployed to AWS. These services provide common APIs that are used by all Elsevier learning applications (examples include Sherpath, EAQ, NCO, CK Student Assessment etc.). 
 
---
# Getting Started
 Shared Services
> How do we help Product Engineers build customer facing products that enable education?
>
>  Through our APIs and our ability to help you test them. 
>
> Let’s explain a little about our APIs and how to test those endpoints to see if they return the information you need.

 APIs
>  To view our APIs and Services, scroll down to our API Reference section.
>
>  APIs are the sets of rules that let different programs talk to each other. We follow the Open API Specification 3.0. Where do APIs come from? 
>
>  To read more about Elsevier’s API Standards, read this: API & Service Terminology Standard.
>
>  When we say RESTful APIs, we mean that our APIs use HTTP protocol to access our API endpoints at predefined URLs. If you are not familiar with this, this article can help you dive deeper.

 Testing Tools
>  Postman is used by NHE Tech’s QE team and our back-end developers to test APIs. You will see Postman calls and collections throughout our API documentation. Here is an article explaining how to use Postman in NHE Tech.  
---
# API Reference
## Services
### Assessment Service
>  The Assessment Domain is responsible for all assessment-taking in the EOLS Platform. This service houses assessment-related functionalities of the platform. It handles requests such as creating/updating assignments, answering questions, and submitting assessments. It is used by many products including (but not limited to): Sherpath, EAQ, NCO, HESI-PS, HESI-NG, Courseware, and the Evolve Assessment Player.
>
>  You can view the most up-to-date service map in New Relic.
>
>  Here is a link to further documentation: [eols-assessment-service](https://elsevier.atlassian.net/wiki/spaces/EOLS/pages/4381482614720)

__Endpoints:__  
[Create Assessment API](https://elsevier.atlassian.net/wiki/spaces/ED/pages/22615121264705)

[Get Assessment API](https://elsevier.atlassian.net/wiki/spaces/ED/pages/22685595240306)

[Get Assessment By Id API](https://elsevier.atlassian.net/wiki/spaces/ED/pages/22685617094693)

[Delete Assessment API](https://elsevier.atlassian.net/wiki/spaces/ED/pages/22685619716441)

[Get Question Count For Assessment API](https://elsevier.atlassian.net/wiki/spaces/ED/pages/22685619487203)