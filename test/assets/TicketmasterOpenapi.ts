export default {
  "openapi": "3.0.0",
  "servers": [
    {
      "url": "https://app.ticketmaster.com"
    }
  ],
  "info": {
    "contact": {
      "url": "http://developer.ticketmaster.com/support/contact-us/"
    },
    "description": "The Ticketmaster Discovery API allows you to search for events, attractions, or venues.",
    "title": "Discovery API",
    "version": "v2",
    "x-apisguru-categories": ["ecommerce"],
    "x-origin": [
      {
        "format": "swagger",
        "url": "https://raw.githubusercontent.com/ticketmaster-api/ticketmaster-api.github.io/dev/_data/orgs/discovery-api/v2/api.json",
        "version": "2.0"
      }
    ],
    "x-providerName": "ticketmaster.com",
    "x-serviceName": "discovery"
  },
  "tags": [
    {
      "name": "v2"
    }
  ],
  "security": [
    {
      "apiKey": []
    }
  ],
  "paths": {
    "/discovery/v2/attractions": {
      "get": {
        "description": "Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.",
        "operationId": "SearchAttractions",
        "parameters": [
          {
            "$ref": "#/components/parameters/sort"
          },
          {
            "description": "Filter attractions by classification name: name of any segment, genre, sub-genre, type, sub-type",
            "example": "",
            "explode": true,
            "in": "query",
            "name": "classificationName",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ClassificationName"
            }
          },
          {
            "description": "Filter attractions by classification id: id of any segment, genre, sub-genre, type, sub-type",
            "example": "",
            "explode": true,
            "in": "query",
            "name": "classificationId",
            "required": false,
            "schema": {
              "default": "",
              "items": {},
              "type": "array"
            }
          },
          {
            "description": "Keyword to search on",
            "example": "",
            "in": "query",
            "name": "keyword",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its id",
            "example": "",
            "in": "query",
            "name": "id",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its source name",
            "example": "",
            "in": "query",
            "name": "source",
            "required": false,
            "schema": {
              "default": "",
              "enum": ["ticketmaster", " universe", " frontgate", " tmr"],
              "type": "string"
            }
          },
          {
            "description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities",
            "example": "",
            "in": "query",
            "name": "includeTest",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no", " only"],
              "pattern": "^\\s*|yes|no|only$",
              "type": "string"
            }
          },
          {
            "description": "Page number",
            "example": "",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "default": "0",
              "minimum": 0,
              "type": "string"
            }
          },
          {
            "description": "Page size of the response",
            "example": "",
            "in": "query",
            "name": "size",
            "required": false,
            "schema": {
              "default": "20",
              "maximum": 500,
              "minimum": 1,
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "Yes if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          },
          {
            "description": "yes, to include spell check suggestions in the response.",
            "example": "",
            "in": "query",
            "name": "includeSpellcheck",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/Attraction"
                  },
                  "type": "array"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Attraction Search"
      }
    },
    "/discovery/v2/attractions/{id}": {
      "get": {
        "description": "Get details for a specific attraction using the unique identifier for the attraction.",
        "operationId": "GetAttraction",
        "parameters": [
          {
            "description": "ID of the attraction",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "True if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Attraction"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Get Attraction Details"
      }
    },
    "/discovery/v2/classifications": {
      "get": {
        "description": "Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.",
        "operationId": "SearchClassifications",
        "parameters": [
          {
            "description": "Sorting order of the search result",
            "example": "",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "default": "name,asc",
              "pattern": "^name,asc|name,desc$",
              "type": "string"
            }
          },
          {
            "description": "Keyword to search on",
            "example": "",
            "in": "query",
            "name": "keyword",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its id",
            "example": "",
            "in": "query",
            "name": "id",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its source name",
            "example": "",
            "in": "query",
            "name": "source",
            "required": false,
            "schema": {
              "default": "",
              "enum": ["ticketmaster", " universe", " frontgate", " tmr"],
              "type": "string"
            }
          },
          {
            "description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities",
            "example": "",
            "in": "query",
            "name": "includeTest",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no", " only"],
              "pattern": "^\\s*|yes|no|only$",
              "type": "string"
            }
          },
          {
            "description": "Page number",
            "example": "",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "default": "0",
              "minimum": 0,
              "type": "string"
            }
          },
          {
            "description": "Page size of the response",
            "example": "",
            "in": "query",
            "name": "size",
            "required": false,
            "schema": {
              "default": "20",
              "maximum": 500,
              "minimum": 1,
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "Yes if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          },
          {
            "description": "yes, to include spell check suggestions in the response.",
            "example": "",
            "in": "query",
            "name": "includeSpellcheck",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/Classification"
                  },
                  "type": "array"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Classification Search"
      }
    },
    "/discovery/v2/classifications/genres/{id}": {
      "get": {
        "description": "Get details for a specific genre using its unique identifier.",
        "operationId": "GetGenre",
        "parameters": [
          {
            "description": "ID of the genre",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "True if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Genre"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Get Genre Details"
      }
    },
    "/discovery/v2/classifications/segments/{id}": {
      "get": {
        "description": "Get details for a specific segment using its unique identifier.",
        "operationId": "GetSegment",
        "parameters": [
          {
            "description": "ID of the segment",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "True if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Segment"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Get Segment Details"
      }
    },
    "/discovery/v2/classifications/subgenres/{id}": {
      "get": {
        "description": "Get details for a specific sub-genre using its unique identifier.",
        "operationId": "GetSubgenre",
        "parameters": [
          {
            "description": "ID of the subgenre",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "True if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Level"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Get Sub-Genre Details"
      }
    },
    "/discovery/v2/classifications/{id}": {
      "get": {
        "description": "Get details for a specific segment, genre, or sub-genre using its unique identifier.",
        "operationId": "GetClassification",
        "parameters": [
          {
            "description": "ID of the segment, genre, or sub-genre",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "True if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Classification"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Get Classification Details"
      }
    },
    "/discovery/v2/events.json": {
      "get": {
        "description": "Find events and filter your search by location, date, availability, and much more.",
        "operationId": "SearchEvents",
        "parameters": [
          {
            "description": "Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc','onsaleStartDate,asc', 'id,asc'",
            "example": "",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "default": "relevance,desc",
              "pattern": "^((name|date|relevance|name,date|date,name),(asc|desc))|(distance,asc)|(onSaleStartDate,asc)|(id,asc)$",
              "type": "string"
            }
          },
          {
            "description": "Filter events with a start date after this date",
            "example": "",
            "in": "query",
            "name": "startDateTime",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events with a start date before this date",
            "example": "",
            "in": "query",
            "name": "endDateTime",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events with onsale start date after this date",
            "example": "",
            "in": "query",
            "name": "onsaleStartDateTime",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events with onsale start date on this date",
            "example": "",
            "in": "query",
            "name": "onsaleOnStartDate",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events with onsale range within this date",
            "example": "",
            "in": "query",
            "name": "onsaleOnAfterStartDate",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events with onsale end date before this date",
            "example": "",
            "in": "query",
            "name": "onsaleEndDateTime",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by city",
            "example": "",
            "in": "query",
            "name": "city",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by country code",
            "example": "",
            "in": "query",
            "name": "countryCode",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by state code",
            "example": "",
            "in": "query",
            "name": "stateCode",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by postal code / zipcode",
            "example": "",
            "in": "query",
            "name": "postalCode",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by venue id",
            "example": "",
            "in": "query",
            "name": "venueId",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by attraction id",
            "example": "",
            "in": "query",
            "name": "attractionId",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by segment id",
            "example": "",
            "in": "query",
            "name": "segmentId",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by segment name",
            "example": "",
            "in": "query",
            "name": "segmentName",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by classification name: name of any segment, genre, sub-genre, type, sub-type",
            "example": "",
            "explode": true,
            "in": "query",
            "name": "classificationName",
            "required": false,
            "schema": {
              "default": "",
              "items": {},
              "type": "array"
            }
          },
          {
            "description": "Filter events by classification id: id of any segment, genre, sub-genre, type, sub-type",
            "example": "",
            "explode": true,
            "in": "query",
            "name": "classificationId",
            "required": false,
            "schema": {
              "default": "",
              "items": {},
              "type": "array"
            }
          },
          {
            "description": "Filter events by market id",
            "example": "",
            "in": "query",
            "name": "marketId",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^(\\d+(,\\d+)*)?$",
              "type": "string"
            }
          },
          {
            "description": "Filter events by promoter id",
            "example": "",
            "in": "query",
            "name": "promoterId",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^(\\d+(,\\d+)*)?$",
              "type": "string"
            }
          },
          {
            "description": "Filter events by dma id",
            "example": "",
            "in": "query",
            "name": "dmaId",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^(\\d+(,\\d+)*)?$",
              "type": "string"
            }
          },
          {
            "description": "True, to include events with date to be announce (TBA)",
            "example": "",
            "in": "query",
            "name": "includeTBA",
            "required": false,
            "schema": {
              "default": "no if date parameter sent, yes otherwise",
              "enum": ["yes", " no", " only"],
              "pattern": "^\\s*|yes|no|only$",
              "type": "string"
            }
          },
          {
            "description": "True, to include event with a date to be defined (TBD)",
            "example": "",
            "in": "query",
            "name": "includeTBD",
            "required": false,
            "schema": {
              "default": "no if date parameter sent, yes otherwise",
              "enum": ["yes", " no", " only"],
              "pattern": "^\\s*|yes|no|only$",
              "type": "string"
            }
          },
          {
            "description": "Filter events by clientName",
            "example": "",
            "in": "query",
            "name": "clientVisibility",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead",
            "example": "33.80003000,-117.88304300",
            "in": "query",
            "name": "latlong",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$",
              "type": "string"
            }
          },
          {
            "description": "Radius of the area in which we want to search for events.",
            "example": "",
            "in": "query",
            "name": "radius",
            "required": false,
            "schema": {
              "default": "50",
              "pattern": "^\\s*$|^0*1?\\d{1,4}$",
              "type": "string"
            }
          },
          {
            "description": "Unit of the radius",
            "example": "",
            "in": "query",
            "name": "unit",
            "required": false,
            "schema": {
              "default": "miles",
              "enum": ["miles", "km"],
              "pattern": "^\\s*|miles|km$",
              "type": "string"
            }
          },
          {
            "description": "filter events by geoHash",
            "example": "dr5rh",
            "in": "query",
            "name": "geoPoint",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$|^[a-zA-Z0-9]{1,9}$",
              "type": "string"
            }
          },
          {
            "description": "Keyword to search on",
            "example": "",
            "in": "query",
            "name": "keyword",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its id",
            "example": "",
            "in": "query",
            "name": "id",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its source name",
            "example": "",
            "in": "query",
            "name": "source",
            "required": false,
            "schema": {
              "default": "",
              "enum": ["ticketmaster", " universe", " frontgate", " tmr"],
              "type": "string"
            }
          },
          {
            "description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities",
            "example": "",
            "in": "query",
            "name": "includeTest",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no", " only"],
              "pattern": "^\\s*|yes|no|only$",
              "type": "string"
            }
          },
          {
            "description": "Page number",
            "example": "",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "default": "0",
              "minimum": 0,
              "type": "string"
            }
          },
          {
            "description": "Page size of the response",
            "example": "",
            "in": "query",
            "name": "size",
            "required": false,
            "schema": {
              "default": "20",
              "maximum": 500,
              "minimum": 1,
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "Yes if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          },
          {
            "description": "yes, to include spell check suggestions in the response.",
            "example": "",
            "in": "query",
            "name": "includeSpellcheck",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/Event"
                  },
                  "type": "array"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Event Search"
      }
    },
    "/discovery/v2/events/{id}": {
      "get": {
        "description": "Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.",
        "operationId": "GetEvent",
        "parameters": [
          {
            "description": "ID of the event",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "True if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Event"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Get Event Details"
      }
    },
    "/discovery/v2/events/{id}/images": {
      "get": {
        "description": "Get images for a specific event using the unique identifier for the event.",
        "operationId": "GetImages",
        "parameters": [
          {
            "description": "ID of the event",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "True if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/EventImages"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Get Event Images"
      }
    },
    "/discovery/v2/suggest": {
      "get": {
        "description": "Find search suggestions and filter your suggestions by location, source, etc.",
        "operationId": "SearchSuggestions",
        "parameters": [
          {
            "description": "Keyword to search on",
            "example": "",
            "in": "query",
            "name": "keyword",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its source name",
            "example": "",
            "in": "query",
            "name": "source",
            "required": false,
            "schema": {
              "default": "",
              "enum": ["ticketmaster", " universe", " frontgate", " tmr"],
              "type": "string"
            }
          },
          {
            "description": "Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead",
            "example": "33.80003000,-117.88304300",
            "in": "query",
            "name": "latlong",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$",
              "type": "string"
            }
          },
          {
            "description": "Radius of the area in which we want to search for events.",
            "example": "",
            "in": "query",
            "name": "radius",
            "required": false,
            "schema": {
              "default": "100",
              "pattern": "^\\s*$|^0*1?\\d{1,4}$",
              "type": "string"
            }
          },
          {
            "description": "Unit of the radius",
            "example": "",
            "in": "query",
            "name": "unit",
            "required": false,
            "schema": {
              "default": "miles",
              "enum": ["miles", "km"],
              "pattern": "^\\s*|miles|km$",
              "type": "string"
            }
          },
          {
            "description": "Size of every entity returned in the response",
            "example": "",
            "in": "query",
            "name": "size",
            "required": false,
            "schema": {
              "default": "5",
              "maximum": 5,
              "minimum": 1,
              "type": "string"
            }
          },
          {
            "description": "yes, to include fuzzy matches in the search. This has performance impact.",
            "example": "",
            "in": "query",
            "name": "includeFuzzy",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no",
              "type": "string"
            }
          },
          {
            "description": "Filter events to clientName",
            "example": "",
            "in": "query",
            "name": "clientVisibility",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter suggestions by country code",
            "example": "",
            "in": "query",
            "name": "countryCode",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "True, to include events with date to be announce (TBA)",
            "example": "",
            "in": "query",
            "name": "includeTBA",
            "required": false,
            "schema": {
              "default": "no if date parameter sent, yes otherwise",
              "enum": ["yes", " no", " only"],
              "pattern": "^\\s*|yes|no|only$",
              "type": "string"
            }
          },
          {
            "description": "True, to include event with a date to be defined (TBD)",
            "example": "",
            "in": "query",
            "name": "includeTBD",
            "required": false,
            "schema": {
              "default": "no if date parameter sent, yes otherwise",
              "enum": ["yes", " no", " only"],
              "pattern": "^\\s*|yes|no|only$",
              "type": "string"
            }
          },
          {
            "description": "Filter suggestions by segment id",
            "example": "",
            "in": "query",
            "name": "segmentId",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "filter events by geoHash",
            "example": "dr5rh",
            "in": "query",
            "name": "geoPoint",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$|^[a-zA-Z0-9]{1,9}$",
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "Yes if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          },
          {
            "description": "yes, to include spell check suggestions in the response.",
            "example": "",
            "in": "query",
            "name": "includeSpellcheck",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/hal+json; charset=utf-8": {
                "schema": {
                  "type": "string"
                }
              },
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Find Suggest",
        "tags": ["v2"]
      }
    },
    "/discovery/v2/venues": {
      "get": {
        "description": "Find venues and filter your search by name, and much more.",
        "operationId": "SearchVenues",
        "parameters": [
          {
            "description": "Sorting order of the search result. Allowable Values: 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'distance,desc'",
            "example": "",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "default": "relevance,desc",
              "pattern": "^(name|relevance|distance),(asc|desc)$",
              "type": "string"
            }
          },
          {
            "description": "Filter venues by state / province code",
            "example": "",
            "in": "query",
            "name": "stateCode",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter venues by country code",
            "example": "",
            "in": "query",
            "name": "countryCode",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead",
            "example": "33.80003000,-117.88304300",
            "in": "query",
            "name": "latlong",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$",
              "type": "string"
            }
          },
          {
            "description": "Radius of the area in which we want to search for events.",
            "example": "",
            "in": "query",
            "name": "radius",
            "required": false,
            "schema": {
              "default": "50",
              "pattern": "^\\s*$|^0*1?\\d{1,4}$",
              "type": "string"
            }
          },
          {
            "description": "Unit of the radius",
            "example": "",
            "in": "query",
            "name": "unit",
            "required": false,
            "schema": {
              "default": "miles",
              "enum": ["miles", "km"],
              "pattern": "^\\s*|miles|km$",
              "type": "string"
            }
          },
          {
            "description": "filter events by geoHash",
            "example": "dr5rh",
            "in": "query",
            "name": "geoPoint",
            "required": false,
            "schema": {
              "default": "",
              "pattern": "^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$|^[a-zA-Z0-9]{1,9}$",
              "type": "string"
            }
          },
          {
            "description": "Keyword to search on",
            "example": "",
            "in": "query",
            "name": "keyword",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its id",
            "example": "",
            "in": "query",
            "name": "id",
            "required": false,
            "schema": {
              "default": "",
              "type": "string"
            }
          },
          {
            "description": "Filter entities by its source name",
            "example": "",
            "in": "query",
            "name": "source",
            "required": false,
            "schema": {
              "default": "",
              "enum": ["ticketmaster", " universe", " frontgate", " tmr"],
              "type": "string"
            }
          },
          {
            "description": "True if you want to have entities flag as test in the response. Only, if you only wanted test entities",
            "example": "",
            "in": "query",
            "name": "includeTest",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no", " only"],
              "pattern": "^\\s*|yes|no|only$",
              "type": "string"
            }
          },
          {
            "description": "Page number",
            "example": "",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "default": "0",
              "minimum": 0,
              "type": "string"
            }
          },
          {
            "description": "Page size of the response",
            "example": "",
            "in": "query",
            "name": "size",
            "required": false,
            "schema": {
              "default": "20",
              "maximum": 500,
              "minimum": 1,
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "Yes if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          },
          {
            "description": "yes, to include spell check suggestions in the response.",
            "example": "",
            "in": "query",
            "name": "includeSpellcheck",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/Venue"
                  },
                  "type": "array"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Venue Search"
      }
    },
    "/discovery/v2/venues/{id}": {
      "get": {
        "description": "Get details for a specific venue using the unique identifier for the venue.",
        "operationId": "GetVenue",
        "parameters": [
          {
            "description": "ID of the venue",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            "example": "en-us,en,fr",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string"
            }
          },
          {
            "description": "True if you want to display licensed content",
            "example": "",
            "in": "query",
            "name": "includeLicensedContent",
            "required": false,
            "schema": {
              "default": "no",
              "enum": ["yes", " no"],
              "pattern": "^\\s*|yes|no$",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/Venue"
                }
              }
            },
            "description": "successful operation"
          }
        },
        "summary": "Get Venue Details"
      }
    }
  },
  "components": {
    "schemas": {
      "Sort": {
        "default": "relevance,desc",
        "pattern": "^(name|relevance),(asc|desc)$",
        "type": "string"
      },
      "ClassificationName": {
        "default": "",
        "items": {},
        "type": "array"
      },
      "AccessDates": {
        "type": "object",
        "description": "Event's Access Date",
        "properties": {
          "endApproximate": {
            "default": false,
            "description": "Boolean flag to indicate whether or not the access end date is approximated",
            "example": "yyyy-MM-ddThh-mm-ssZ",
            "type": "boolean",
            "x-position": 3
          },
          "endDateTime": {
            "description": "Event's end access time",
            "example": "yyyy-MM-ddThh-mm-ssZ",
            "format": "date-time",
            "type": "string",
            "x-position": 2
          },
          "startApproximate": {
            "default": false,
            "description": "Boolean flag to indicate whether or not the access start date is approximated",
            "type": "boolean",
            "x-position": 1
          },
          "startDateTime": {
            "description": "Event's start access time",
            "example": "yyyy-MM-ddThh-mm-ssZ",
            "format": "date-time",
            "type": "string"
          }
        }
      },
      "Accessibility": {
        "type": "object",
        "description": "Additional information for people who experience disabilities",
        "properties": {
          "info": {
            "description": "Accessibility's information",
            "type": "string",
            "x-position": 1
          }
        }
      },
      "Address": {
        "type": "object",
        "description": "Address",
        "properties": {
          "line1": {
            "description": "Address first line",
            "type": "string"
          },
          "line2": {
            "description": "Address second line",
            "type": "string",
            "x-position": 3
          },
          "line3": {
            "description": "Address third line",
            "type": "string",
            "x-position": 3
          }
        }
      },
      "Area": {
        "type": "object",
        "description": "Area",
        "properties": {
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          }
        }
      },
      "Attraction": {
        "description": "Attraction",
        "properties": {
          "additionalInfo": {
            "description": "Additional information of the entity",
            "type": "string",
            "x-position": 22
          },
          "classifications": {
            "description": "Attraction's classifications",
            "items": {
              "$ref": "#/components/schemas/Classification"
            },
            "type": "array",
            "x-position": 30
          },
          "description": {
            "description": "Description's of the entity",
            "type": "string",
            "x-position": 20
          },
          "externalLinks": {
            "additionalProperties": {
              "items": {
                "$ref": "#/components/schemas/ExternalLink"
              },
              "type": "array"
            },
            "description": "List of external links",
            "type": "object",
            "x-position": 79
          },
          "id": {
            "description": "Unique id of the entity in the discovery API",
            "type": "string",
            "x-position": 1
          },
          "images": {
            "description": "Images of the entity",
            "items": {
              "$ref": "#/components/schemas/Image"
            },
            "type": "array",
            "uniqueItems": true,
            "x-position": 29
          },
          "locale": {
            "description": "Locale in which the content is returned",
            "type": "string",
            "x-position": 3
          },
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          },
          "test": {
            "default": false,
            "description": "Indicate if this is a test entity, by default test entities won't appear in discovery API",
            "type": "boolean",
            "x-position": 96
          },
          "type": {
            "description": "Type of the entity",
            "enum": ["event", "venue", "attraction"],
            "type": "string"
          },
          "upcomingEvents": {
            "additionalProperties": {
              "format": "int32",
              "type": "integer"
            },
            "description": "number of upcoming events",
            "type": "object",
            "x-position": 110
          },
          "url": {
            "description": "URL of a web site detail page of the entity",
            "type": "string",
            "x-position": 24
          }
        },
        "required": ["id", "type"],
        "type": "object"
      },
      "AttractionExtensions": {
        "description": "All Attraction's extensions",
        "type": "object"
      },
      "Attribution": {
        "description": "Attribution",
        "properties": {
          "licenceName": {
            "description": "LicenceName",
            "type": "string"
          },
          "licenceUrl": {
            "description": "LicenceUrl",
            "type": "string"
          },
          "sourceName": {
            "description": "SourceName",
            "type": "string"
          },
          "sourceUrl": {
            "description": "SourceUrl",
            "type": "string"
          }
        },
        "type": "object"
      },
      "Attributions": {
        "description": "Attributions",
        "properties": {
          "description": {
            "$ref": "#/components/schemas/Attribution"
          },
          "descriptions": {
            "additionalProperties": {
              "$ref": "#/components/schemas/Attribution"
            },
            "description": "Attribution descriptions - multi-lingual fields",
            "type": "object"
          }
        },
        "type": "object"
      },
      "Chronology": {
        "properties": {
          "zone": {
            "$ref": "#/components/schemas/DateTimeZone"
          }
        },
        "type": "object"
      },
      "City": {
        "description": "City",
        "properties": {
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          }
        },
        "type": "object"
      },
      "Classification": {
        "description": "Classification",
        "properties": {
          "genre": {
            "$ref": "#/components/schemas/Level"
          },
          "primary": {
            "default": false,
            "description": "True if this is the entity's primary classification",
            "type": "boolean"
          },
          "segment": {
            "$ref": "#/components/schemas/Segment"
          },
          "subGenre": {
            "$ref": "#/components/schemas/Level"
          },
          "subType": {
            "$ref": "#/components/schemas/Level"
          },
          "type": {
            "$ref": "#/components/schemas/Level"
          }
        },
        "type": "object"
      },
      "Country": {
        "description": "Country",
        "properties": {
          "countryCode": {
            "description": "Country code (ISO 3166)",
            "type": "string"
          },
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          }
        },
        "type": "object"
      },
      "DateTimeField": {
        "properties": {
          "durationField": {
            "$ref": "#/components/schemas/DurationField"
          },
          "leapDurationField": {
            "$ref": "#/components/schemas/DurationField"
          },
          "lenient": {
            "default": false,
            "type": "boolean"
          },
          "maximumValue": {
            "format": "int32",
            "type": "integer"
          },
          "minimumValue": {
            "format": "int32",
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "rangeDurationField": {
            "$ref": "#/components/schemas/DurationField"
          },
          "supported": {
            "default": false,
            "type": "boolean"
          },
          "type": {
            "$ref": "#/components/schemas/DateTimeFieldType"
          }
        },
        "type": "object"
      },
      "DateTimeFieldType": {
        "properties": {
          "durationType": {
            "$ref": "#/components/schemas/DurationFieldType"
          },
          "name": {
            "type": "string"
          },
          "rangeDurationType": {
            "$ref": "#/components/schemas/DurationFieldType"
          }
        },
        "type": "object"
      },
      "DateTimeZone": {
        "properties": {
          "fixed": {
            "default": false,
            "type": "boolean"
          },
          "id": {
            "type": "string"
          }
        },
        "type": "object"
      },
      "DisplaySettingExtension": {
        "description": "Event's display settings extension",
        "properties": {
          "softLanding": {
            "default": false,
            "description": "True the landing is Soft otherwise it's Comingled",
            "type": "boolean"
          }
        },
        "type": "object"
      },
      "Dma": {
        "description": "DMA (Designated Market Area)",
        "properties": {
          "id": {
            "description": "DMS's id",
            "format": "int32",
            "type": "integer"
          }
        },
        "type": "object"
      },
      "DurationField": {
        "properties": {
          "name": {
            "type": "string"
          },
          "precise": {
            "default": false,
            "type": "boolean"
          },
          "supported": {
            "default": false,
            "type": "boolean"
          },
          "type": {
            "$ref": "#/components/schemas/DurationFieldType"
          },
          "unitMillis": {
            "format": "int64",
            "type": "integer"
          }
        },
        "type": "object"
      },
      "DurationFieldType": {
        "properties": {
          "name": {
            "type": "string"
          }
        },
        "type": "object"
      },
      "EndDates": {
        "description": "Event's End Dates",
        "properties": {
          "approximate": {
            "default": false,
            "description": "Boolean flag to indicate whether or not the end date is approximated",
            "type": "boolean",
            "x-position": 3
          },
          "dateTime": {
            "description": "The event end date time",
            "example": "yyyy-MM-ddThh-mm-ssZ",
            "format": "date-time",
            "type": "string",
            "x-position": 2
          },
          "localDate": {
            "description": "The event end date in local date",
            "example": "yyyy-MM-dd",
            "format": "date",
            "type": "string"
          },
          "localTime": {
            "$ref": "#/components/schemas/LocalTime"
          },
          "noSpecificTime": {
            "default": false,
            "description": "Boolean flag to indicate whether or not the event end time has no specific time",
            "type": "boolean",
            "x-position": 4
          }
        },
        "type": "object"
      },
      "EntityChanges": {
        "properties": {
          "changes": {
            "items": {
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "newlyCreated": {
            "default": false,
            "type": "boolean"
          }
        },
        "type": "object"
      },
      "Event": {
        "description": "Event",
        "properties": {
          "accessibility": {
            "$ref": "#/components/schemas/Accessibility"
          },
          "additionalInfo": {
            "description": "Additional information of the entity",
            "type": "string",
            "x-position": 22
          },
          "classifications": {
            "description": "Event's classifications",
            "items": {
              "$ref": "#/components/schemas/Classification"
            },
            "type": "array",
            "x-position": 50
          },
          "dates": {
            "$ref": "#/components/schemas/EventDates"
          },
          "description": {
            "description": "Description's of the entity",
            "type": "string",
            "x-position": 20
          },
          "distance": {
            "format": "double",
            "type": "number"
          },
          "externalLinks": {
            "additionalProperties": {
              "items": {
                "$ref": "#/components/schemas/ExternalLink"
              },
              "type": "array"
            },
            "description": "List of external links",
            "type": "object",
            "x-position": 79
          },
          "id": {
            "description": "Unique id of the entity in the discovery API",
            "type": "string",
            "x-position": 1
          },
          "images": {
            "description": "Images of the entity",
            "items": {
              "$ref": "#/components/schemas/Image"
            },
            "type": "array",
            "uniqueItems": true,
            "x-position": 29
          },
          "info": {
            "description": "Any information related to the event",
            "type": "string",
            "x-position": 32
          },
          "locale": {
            "description": "Locale in which the content is returned",
            "type": "string",
            "x-position": 3
          },
          "location": {
            "$ref": "#/components/schemas/Location"
          },
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          },
          "outlets": {
            "description": "Related outlets informations",
            "items": {
              "$ref": "#/components/schemas/Outlet"
            },
            "type": "array",
            "x-position": 37
          },
          "place": {
            "$ref": "#/components/schemas/Place"
          },
          "pleaseNote": {
            "description": "Any notes related to the event",
            "type": "string",
            "x-position": 34
          },
          "priceRanges": {
            "description": "Price ranges of this event",
            "items": {
              "$ref": "#/components/schemas/PriceRange"
            },
            "type": "array",
            "uniqueItems": true,
            "x-position": 36
          },
          "products": {
            "description": "Related products informations",
            "items": {
              "$ref": "#/components/schemas/Product"
            },
            "type": "array",
            "x-position": 38
          },
          "promoter": {
            "$ref": "#/components/schemas/Promoter"
          },
          "promoters": {
            "description": "Event's promoters",
            "items": {
              "$ref": "#/components/schemas/Promoter"
            },
            "type": "array",
            "x-position": 37
          },
          "sales": {
            "$ref": "#/components/schemas/EventSalesDates"
          },
          "seatmap": {
            "$ref": "#/components/schemas/SeatMap"
          },
          "test": {
            "default": false,
            "description": "Indicate if this is a test entity, by default test entities won't appear in discovery API",
            "type": "boolean",
            "x-position": 96
          },
          "type": {
            "description": "Type of the entity",
            "enum": ["event", "venue", "attraction"],
            "type": "string"
          },
          "units": {
            "type": "string"
          },
          "url": {
            "description": "URL of a web site detail page of the entity",
            "type": "string",
            "x-position": 24
          }
        },
        "required": ["id", "type"],
        "type": "object"
      },
      "EventDates": {
        "description": "Event's Dates",
        "properties": {
          "access": {
            "$ref": "#/components/schemas/AccessDates"
          },
          "end": {
            "$ref": "#/components/schemas/EndDates"
          },
          "spanMultipleDays": {
            "default": false,
            "description": "Flag indicating if date spans of multiple days",
            "type": "boolean",
            "x-position": 5
          },
          "start": {
            "$ref": "#/components/schemas/StartDates"
          },
          "status": {
            "$ref": "#/components/schemas/EventStatus"
          },
          "timezone": {
            "description": "Event's timezone",
            "type": "string",
            "x-position": 3
          }
        },
        "type": "object"
      },
      "EventExtensions": {
        "description": "All Event's extensions",
        "type": "object"
      },
      "EventImages": {
        "description": "This class defines an Event with only images view on the Discovery API",
        "properties": {
          "id": {
            "description": "Unique id of the entity in the discovery API",
            "type": "string",
            "x-position": 1
          },
          "images": {
            "description": "Images of the entity",
            "items": {
              "$ref": "#/components/schemas/Image"
            },
            "type": "array",
            "uniqueItems": true,
            "x-position": 2
          },
          "type": {
            "description": "Type of the entity",
            "enum": ["event"],
            "type": "string"
          }
        },
        "required": ["id", "type"],
        "type": "object"
      },
      "EventSalesDates": {
        "description": "Event's Sales Dates",
        "properties": {
          "presales": {
            "description": "Presale information on this event",
            "items": {
              "$ref": "#/components/schemas/Presale"
            },
            "type": "array",
            "x-position": 1
          },
          "public": {
            "$ref": "#/components/schemas/PublicSaleDates"
          }
        },
        "type": "object"
      },
      "EventStatus": {
        "description": "Event's Status",
        "properties": {
          "code": {
            "description": "The event's status code",
            "enum": [
              "onsale",
              "offsale",
              "canceled",
              "postponed",
              "rescheduled"
            ],
            "type": "string"
          }
        },
        "type": "object"
      },
      "Extension": {
        "type": "object"
      },
      "ExternalLink": {
        "description": "ExternalLink",
        "properties": {
          "id": {
            "description": "An external link id is the unique identifier of a resource on a different domain or api",
            "type": "string",
            "x-position": 2
          },
          "url": {
            "description": "An external link url is a url that goes to a different domain or api",
            "type": "string",
            "x-position": 2
          }
        },
        "type": "object"
      },
      "Genre": {
        "description": "Secondary Genre",
        "properties": {
          "id": {
            "description": "The ID of the classification's level",
            "type": "string"
          },
          "name": {
            "description": "The Name of the classification's level",
            "type": "string",
            "x-position": 1
          }
        },
        "type": "object"
      },
      "GeocodeExtension": {
        "properties": {
          "city": {
            "type": "string"
          },
          "country": {
            "type": "string"
          },
          "county": {
            "type": "string"
          },
          "formattedAddress": {
            "type": "string"
          },
          "geometry": {
            "$ref": "#/components/schemas/Geometry"
          },
          "postalCode": {
            "type": "string"
          },
          "route": {
            "type": "string"
          },
          "state": {
            "type": "string"
          },
          "streetNumber": {
            "type": "string"
          }
        },
        "type": "object"
      },
      "GeolocationVenueExtensions": {
        "description": "Venue's geocode extension",
        "properties": {
          "geocode": {
            "$ref": "#/components/schemas/GeocodeExtension"
          }
        },
        "type": "object"
      },
      "Geometry": {
        "properties": {
          "location": {
            "$ref": "#/components/schemas/Location"
          }
        },
        "type": "object"
      },
      "HostExtension": {
        "description": "Event's Host extension",
        "type": "object"
      },
      "Image": {
        "description": "Image",
        "properties": {
          "attribution": {
            "description": "Attribution of the image",
            "type": "string",
            "x-position": 8
          },
          "fallback": {
            "default": false,
            "description": "true if the image is not the event's image but a fallbak image",
            "type": "boolean",
            "x-position": 6
          },
          "height": {
            "description": "Height of the image",
            "format": "int32",
            "type": "integer",
            "x-position": 5
          },
          "ratio": {
            "description": "Aspect ratio of the image",
            "enum": ["16_9", "3_2", "4_3"],
            "type": "string",
            "x-position": 3
          },
          "url": {
            "description": "Public URL of the image",
            "type": "string",
            "x-position": 2
          },
          "width": {
            "description": "Width of the image",
            "format": "int32",
            "type": "integer",
            "x-position": 4
          }
        },
        "type": "object"
      },
      "Level": {
        "properties": {
          "id": {
            "description": "The ID of the classification's level",
            "type": "string"
          },
          "name": {
            "description": "The Name of the classification's level",
            "type": "string",
            "x-position": 1
          }
        },
        "type": "object"
      },
      "LocalTime": {
        "properties": {
          "chronology": {
            "$ref": "#/components/schemas/Chronology"
          },
          "fieldTypes": {
            "items": {
              "$ref": "#/components/schemas/DateTimeFieldType"
            },
            "type": "array"
          },
          "fields": {
            "items": {
              "$ref": "#/components/schemas/DateTimeField"
            },
            "type": "array"
          },
          "hourOfDay": {
            "format": "int32",
            "type": "integer"
          },
          "millisOfDay": {
            "format": "int32",
            "type": "integer"
          },
          "millisOfSecond": {
            "format": "int32",
            "type": "integer"
          },
          "minuteOfHour": {
            "format": "int32",
            "type": "integer"
          },
          "secondOfMinute": {
            "format": "int32",
            "type": "integer"
          },
          "values": {
            "items": {
              "format": "int32",
              "type": "integer"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "Locale": {
        "properties": {
          "country": {
            "type": "string"
          },
          "displayCountry": {
            "type": "string"
          },
          "displayLanguage": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          },
          "displayScript": {
            "type": "string"
          },
          "displayVariant": {
            "type": "string"
          },
          "extensionKeys": {
            "items": {
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "iso3Country": {
            "type": "string"
          },
          "iso3Language": {
            "type": "string"
          },
          "language": {
            "type": "string"
          },
          "script": {
            "type": "string"
          },
          "unicodeLocaleAttributes": {
            "items": {
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "unicodeLocaleKeys": {
            "items": {
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "variant": {
            "type": "string"
          }
        },
        "type": "object"
      },
      "Location": {
        "description": "Location",
        "properties": {
          "latitude": {
            "description": "Latitude",
            "type": "number"
          },
          "longitude": {
            "description": "Longitude",
            "type": "number"
          }
        },
        "type": "object"
      },
      "Market": {
        "description": "Market",
        "properties": {
          "id": {
            "description": "Market's id",
            "type": "string"
          }
        },
        "type": "object"
      },
      "Outlet": {
        "description": "A selling point for tickets.",
        "properties": {
          "type": {
            "description": "Outlet's type",
            "type": "string",
            "x-position": 2
          },
          "url": {
            "description": "Outlet's url",
            "type": "string",
            "x-position": 1
          }
        },
        "type": "object"
      },
      "Parking": {
        "description": "Parking",
        "properties": {
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          },
          "url": {
            "description": "Url to the web page of the parking",
            "type": "string",
            "x-position": 20
          }
        },
        "type": "object"
      },
      "Place": {
        "description": "Place",
        "properties": {
          "address": {
            "$ref": "#/components/schemas/Address"
          },
          "area": {
            "$ref": "#/components/schemas/Area"
          },
          "city": {
            "$ref": "#/components/schemas/City"
          },
          "country": {
            "$ref": "#/components/schemas/Country"
          },
          "location": {
            "$ref": "#/components/schemas/Location"
          },
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          },
          "postalCode": {
            "description": "Postal code / zipcode of the place",
            "type": "string",
            "x-position": 5
          },
          "state": {
            "$ref": "#/components/schemas/State"
          }
        },
        "type": "object"
      },
      "Presale": {
        "description": "Event's Presale Info",
        "properties": {
          "description": {
            "description": "Description of the presame",
            "type": "string",
            "x-position": 1
          },
          "endDateTime": {
            "description": "Presale's end dates. The date and time when the presale will end",
            "format": "date-time",
            "type": "string",
            "x-position": 5
          },
          "name": {
            "description": "Name of the presale",
            "type": "string"
          },
          "startDateTime": {
            "description": "Presale's start dates. The date and time when the presale will start",
            "format": "date-time",
            "type": "string",
            "x-position": 4
          },
          "url": {
            "description": "Presale link URL",
            "type": "string",
            "x-position": 3
          }
        },
        "type": "object"
      },
      "PriceRange": {
        "description": "PriceRange",
        "properties": {
          "currency": {
            "description": "Currency",
            "type": "string",
            "x-position": 1
          },
          "max": {
            "description": "Maximum price",
            "format": "double",
            "type": "number",
            "x-position": 3
          },
          "min": {
            "description": "Minimum price",
            "format": "double",
            "type": "number",
            "x-position": 2
          },
          "type": {
            "description": "Type of price",
            "enum": ["standard"],
            "type": "string"
          }
        },
        "type": "object"
      },
      "Product": {
        "description": "Product",
        "properties": {
          "id": {
            "description": "Product's primary id",
            "type": "string",
            "x-position": 10
          },
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          },
          "type": {
            "description": "Product's type",
            "type": "string",
            "x-position": 13
          },
          "url": {
            "description": "Product's url",
            "type": "string",
            "x-position": 12
          }
        },
        "type": "object"
      },
      "Promoter": {
        "description": "Promoter",
        "properties": {
          "description": {
            "description": "Description of the promoter",
            "type": "string",
            "x-position": 3
          },
          "id": {
            "description": "Id of the promoter",
            "type": "string"
          },
          "name": {
            "description": "Name of the promoter",
            "type": "string",
            "x-position": 1
          }
        },
        "type": "object"
      },
      "PublicSaleDates": {
        "description": "Event's Public Onsales Dates",
        "properties": {
          "endDateTime": {
            "description": "Public sale's end dates. The date and time when the public sale will end",
            "format": "date-time",
            "type": "string",
            "x-position": 1
          },
          "startDateTime": {
            "description": "Public sale's start dates. The date and time when the public sale will start",
            "format": "date-time",
            "type": "string"
          },
          "startTBD": {
            "default": false,
            "description": "True if the public sale's date is to be determined",
            "type": "boolean",
            "x-position": 2
          }
        },
        "type": "object"
      },
      "PublicVisibility": {
        "description": "The class defines the public visibility period on the Discovery/Publish API.",
        "type": "object"
      },
      "Relationship": {
        "description": "Relationship",
        "properties": {
          "id": {
            "description": "The ID of the related entity",
            "type": "string",
            "x-position": 2
          },
          "references": {
            "additionalProperties": {
              "type": "string"
            },
            "description": "References of this relationship in another system. Reference is the exact same entity",
            "example": "sourceName: id",
            "type": "object",
            "x-position": 3
          },
          "source": {
            "description": "The source name of the related entity",
            "type": "string",
            "x-position": 1
          },
          "type": {
            "description": "The type of the relationship",
            "enum": ["duplicate"],
            "type": "string"
          }
        },
        "type": "object"
      },
      "SeatMap": {
        "description": "Seatmap",
        "properties": {
          "staticUrl": {
            "description": "Static Seatmap Url",
            "type": "string",
            "x-position": 3
          }
        },
        "type": "object"
      },
      "Segment": {
        "description": "Segment",
        "properties": {
          "id": {
            "description": "The ID of the classification's level",
            "type": "string"
          },
          "name": {
            "description": "The Name of the classification's level",
            "type": "string",
            "x-position": 1
          }
        },
        "type": "object"
      },
      "Social": {
        "description": "Social networks data",
        "properties": {
          "twitter": {
            "$ref": "#/components/schemas/Twitter"
          }
        },
        "type": "object"
      },
      "Source": {
        "description": "Source",
        "type": "object"
      },
      "StartDates": {
        "description": "Event's Start Dates",
        "properties": {
          "dateTBA": {
            "default": false,
            "description": "Boolean flag to indicate whether or not the start date is TBA",
            "type": "boolean",
            "x-position": 4
          },
          "dateTBD": {
            "default": false,
            "description": "Boolean flag to indicate whether or not the start date is TBD",
            "type": "boolean",
            "x-position": 3
          },
          "dateTime": {
            "description": "The event start datetime",
            "example": "yyyy-MM-ddThh:mm:ssZ",
            "format": "date-time",
            "type": "string",
            "x-position": 2
          },
          "localDate": {
            "description": "The event start date in local date",
            "example": "yyyy-MM-dd",
            "format": "date",
            "type": "string"
          },
          "localTime": {
            "$ref": "#/components/schemas/LocalTime"
          },
          "noSpecificTime": {
            "default": false,
            "description": "Boolean flag to indicate whether or not the event start time has no specific time",
            "type": "boolean",
            "x-position": 6
          },
          "timeTBA": {
            "default": false,
            "description": "Boolean flag to indicate whether or not the start time is TBA",
            "type": "boolean",
            "x-position": 5
          }
        },
        "type": "object"
      },
      "State": {
        "description": "State",
        "properties": {
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          },
          "stateCode": {
            "description": "State code",
            "type": "string"
          }
        },
        "type": "object"
      },
      "TatExtension": {
        "description": "The Attraction Tool (TAT) extension",
        "type": "object"
      },
      "TicketmasterAttractionExtensions": {
        "description": "Attraction's extension (ticketmaster source)",
        "type": "object"
      },
      "TicketmasterEventExtensions": {
        "description": "Event's extension (ticketmaster source)",
        "properties": {
          "displaySettings": {
            "$ref": "#/components/schemas/DisplaySettingExtension"
          }
        },
        "type": "object"
      },
      "TicketmasterVenueExtensions": {
        "description": "Venue's extension (ticketmaster source)",
        "type": "object"
      },
      "Twitter": {
        "description": "Twitter data",
        "properties": {
          "handle": {
            "description": "Twitter handle",
            "enum": ["@a Twitter handle"],
            "example": "@a Twitter handle exampe",
            "type": "string"
          },
          "hashtags": {
            "description": "Twitter hashtags",
            "example": "#hashtag example #hashtag another example",
            "items": {
              "type": "string"
            },
            "type": "array",
            "x-position": 1
          }
        },
        "type": "object"
      },
      "Venue": {
        "description": "Venue",
        "properties": {
          "accessibleSeatingDetail": {
            "description": "Venue accessible seating detail",
            "type": "string",
            "x-position": 35
          },
          "additionalInfo": {
            "description": "Additional information of the entity",
            "type": "string",
            "x-position": 22
          },
          "address": {
            "$ref": "#/components/schemas/Address"
          },
          "boxOfficeInfo": {
            "$ref": "#/components/schemas/VenueBoxOfficeInfo"
          },
          "city": {
            "$ref": "#/components/schemas/City"
          },
          "country": {
            "$ref": "#/components/schemas/Country"
          },
          "currency": {
            "description": "Default currency of ticket prices for events in this venue",
            "type": "string",
            "x-position": 27
          },
          "description": {
            "description": "Description's of the entity",
            "type": "string",
            "x-position": 20
          },
          "distance": {
            "format": "double",
            "type": "number"
          },
          "dma": {
            "description": "The list of associated DMAs (Designated Market Areas) of the venue",
            "items": {
              "$ref": "#/components/schemas/Dma"
            },
            "type": "array",
            "x-position": 29
          },
          "externalLinks": {
            "additionalProperties": {
              "items": {
                "$ref": "#/components/schemas/ExternalLink"
              },
              "type": "array"
            },
            "description": "List of external links",
            "type": "object",
            "x-position": 79
          },
          "generalInfo": {
            "$ref": "#/components/schemas/VenueGeneralInfo"
          },
          "id": {
            "description": "Unique id of the entity in the discovery API",
            "type": "string",
            "x-position": 1
          },
          "images": {
            "description": "Images of the entity",
            "items": {
              "$ref": "#/components/schemas/Image"
            },
            "type": "array",
            "uniqueItems": true,
            "x-position": 29
          },
          "locale": {
            "description": "Locale in which the content is returned",
            "type": "string",
            "x-position": 3
          },
          "location": {
            "$ref": "#/components/schemas/Location"
          },
          "markets": {
            "description": "Markets of the venue",
            "items": {
              "$ref": "#/components/schemas/Market"
            },
            "type": "array",
            "x-position": 28
          },
          "name": {
            "description": "Name of the entity",
            "type": "string",
            "x-position": 10
          },
          "parkingDetail": {
            "description": "Venue parking info",
            "type": "string",
            "x-position": 33
          },
          "postalCode": {
            "description": "Postal code / zipcode of the venue",
            "type": "string",
            "x-position": 24
          },
          "social": {
            "$ref": "#/components/schemas/Social"
          },
          "state": {
            "$ref": "#/components/schemas/State"
          },
          "test": {
            "default": false,
            "description": "Indicate if this is a test entity, by default test entities won't appear in discovery API",
            "type": "boolean",
            "x-position": 96
          },
          "timezone": {
            "description": "Timezone of the venue",
            "type": "string",
            "x-position": 26
          },
          "type": {
            "description": "Type of the entity",
            "enum": ["event", "venue", "attraction"],
            "type": "string"
          },
          "units": {
            "type": "string"
          },
          "upcomingEvents": {
            "additionalProperties": {
              "format": "int32",
              "type": "integer"
            },
            "description": "number of upcoming events",
            "type": "object",
            "x-position": 110
          },
          "url": {
            "description": "URL of a web site detail page of the entity",
            "type": "string",
            "x-position": 24
          }
        },
        "required": ["id", "type"],
        "type": "object"
      },
      "VenueBoxOfficeInfo": {
        "description": "Venue box office information",
        "properties": {
          "acceptedPaymentDetail": {
            "description": "Venue box office accepted payment details",
            "type": "string",
            "x-position": 5
          },
          "openHoursDetail": {
            "description": "Venue box office opening hours",
            "type": "string",
            "x-position": 3
          },
          "phoneNumberDetail": {
            "description": "Venue box office phone number",
            "type": "string",
            "x-position": 1
          },
          "willCallDetail": {
            "description": "Venue box office will call details",
            "type": "string",
            "x-position": 7
          }
        },
        "type": "object"
      },
      "VenueExtensions": {
        "description": "All Venue's extensions",
        "properties": {
          "geolocation": {
            "$ref": "#/components/schemas/GeolocationVenueExtensions"
          }
        },
        "type": "object"
      },
      "VenueGeneralInfo": {
        "description": "Venue general information",
        "properties": {
          "childRule": {
            "description": "Venue children rule",
            "type": "string",
            "x-position": 3
          },
          "generalRule": {
            "description": "Venue general rules",
            "type": "string",
            "x-position": 1
          }
        },
        "type": "object"
      }
    },
    "parameters": {
      "apiKey": {
        "in": "query",
        "name": "apikey",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      "sort": {
        "description": "Sorting order of the search result. Allowable Values : 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc'",
        "example": "",
        "in": "query",
        "name": "sort",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    },
    "securitySchemes": {
      "apiKey": {
        "type": "apiKey",
        "description": "This API uses an apikey to authenticate users. [More info](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#overview)",
        "in": "query",
        "name": "apikey"
      }
    }
  }
} as const;
