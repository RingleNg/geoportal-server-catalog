define({
  root: ({
    classes: {
      ci_citation: "Citation"
    },

    documentTypes: {
      data: {
        caption: "ISO 19115 (Data)",
        description: ""
      },
      service: {
        caption: "ISO 19119 (Service)",
        description: ""
      },
      gmi: {
        caption: "ISO 19115-2 (Imagery and Gridded Data)",
        description: ""
      }
    },
    
    general: {
      reference: "Reference"
    },
    
    sections: {
      metadata: "Metadata",
      identification: "Identification",
      distribution: "Distribution",
      quality: "Quality",
      acquisition: "Acquisition"
    },
    
    metadataSection: {
      identifier: "Identifier",
      contact: "Contact",
      date: "Date",
      standard: "Standard",
      reference: "Reference"
    },
    
    identificationSection: {
      citation: "Citation",
      description: "Description",
      contact: "Contact",
      thumbnail: "Thumbnail",
      keywords: "Keywords",
      constraints: "Constraints",
      resource: "Resource",
      resourceTab: {
        representation: "Representation",
        language: "Language",
        classification: "Classification",
        extent: "Extent"
      },
      serviceResourceTab: {
        serviceType: "Service Type",
        extent: "Extent",
        couplingType: "Coupling Type",
        operation: "Operation",
        operatesOn: "Operates On"
      }
    },
    
    distributionSection: {
    },
    
    qualitySection: {
      scope: "Scope",
      conformance: "Conformance",
      lineage: "Lineage"
    },
    
    acquisitionSection: {
      requirement: "Requirement",
      objective: "Objective",
      instrument: "Instrument",
      plan: "Plan",
      operation: "Operation",
      platform: "Platform",
      environment: "Environment"
    },
    
    AbstractMD_Identification: {
      sAbstract: "Abstract",
      purpose: "Purpose",
      credit: "Credits",
      pointOfContact: "Point of Contact",
      resourceMaintenance: "Maintenance",
      graphicOverview: "Graphic Overview",
      descriptiveKeywords: "Keyword Collection",
      resourceConstraints: "Constraints"
    },
    
    CI_Address: {
      deliveryPoint: "Delivery Point",
      city: "City",
      administrativeArea: "Administrative Area",
      postalCode: "Postal Code",
      country: "Country",
      electronicMailAddress: "E-Mail Address"
    },
    
    CI_Citation: {
      title: "Title",
      alternateTitle: "Alternate Title",
      date: "Date",
      edition: "Edition",
      editionDate: "Edition Date",
      identifier: "Identifier",
      citedResponsibleParty: "Cited Responsible Party",
      presentationForm: "Presentation Form",
      series: "Series",
      otherCitationDetails: "Other Citation Details",
      isbn: "ISBN",
      issn: "ISSN",
      onlineResource: "Online Resource",
      graphic: "Graphic",
    },
    
    CI_Contact: {
      phone: "Phone",
      address: "Address",
      onlineResource: "Online Resource",
      hoursOfService: "Hours of Service",
      contactInstructions: "Contact Instructions"
    },
    
    CI_Date: {
      date: "Date",
      dateType: "Date Type"
    },
    
    CI_DateTypeCode: {
      caption: "Date Type",
      creation: "Creation",
      publication: "Pulication",
      revision: "Revision",
      expiry: "Expiry",
      lastUpdate: "Last Update",
      lastRevision: "Last Revision",
      nextUpdate: "Next Update",
      unavailable: "Unavailable",
      obtainable: "Obtainable",
      inForce: "In Force",
      adopted: "Adopted",
      deprecated: "Deprecated",
      superseded: "Superseded",
      replaced: "Replaced",
      validityBegins: "Validity Begins",
      validityExpires: "Validity Expires",
      valid: "Valid",
      released: "Released",
      access: "Access",
      distribution: "Distribution",
      distributed: "Distributed"
    },
    
    CI_OnLineFunctionCode: {
      download: "Download",
      information: "Information",
      offlineAccess: "Offline Access",
      order: "Order",
      search: "Search",
      completeMetadata: "Complete Metadata",
      browseGraphic: "Browse Graphic",
      upload: "Upload",
      emailService: "Email Service",
      browsing: "Browsing",
      fileAccess: "File Access"
    },
    
    CI_OnlineResource: {
      linkage: "URL",
      protocol: "Protocol",
      applicationProfile: "Application Profile",
      name: "Name",
      description: "Description",
      function: "Function",
      protocolRequest: "Protocol Request"
    },
    
    CI_PresentationFormCode: {
      documentDigital: "Document Digital",
      documentHardcopy: "Document Hardcopy",
      imageDigital: "Image Digital",
      imageHardcopy: "Image Hardcopy",
      mapDigital: "Map Digital",
      mapHardcopy: "Map Hardcopy",
      modelDigital: "Model Digital",
      modelHardcopy: "Model Hardcopy",
      profileDigital: "Profile Digital",
      profileHardcopy: "Profile Hardcopy",
      tableDigital: "Table Digital",
      tableHardcopy: "Table Hardcopy",
      videoDigital: "Video Digital",
      videoHardcopy: "Video Hardcopy",
      audioDigital: "Audio Digital",
      audioHardcopy: "Audio Hardcopy",
      multimediaDigital: "Multimedia Digital",
      multimediaHardcopy: "Multimedia Hardcopy",
      physicalObject: "Physical Object",
      diagramDigital: "Diagram Digital",
      diagramHardcopy: "Diagram Hardcopy"
    },

    CI_ResponsibleParty: {
      caption: "Point of Contact",
      individualName: "Individual Name",
      organisationName: "Organisation Name",
      positionName: "Position Name",
      contactInfo: "Contact Info",
      role: "Role"
    },
    
    CI_Responsibility: {
      role: "Role",
      extent: "Extent",
      party: "Party"
    },

    CI_RoleCode: {
      resourceProvider: "Resource Provider",
      custodian: "Custodian",
      owner: "Owner",
      user: "User",
      distributor: "Distributor",
      originator: "Originator",
      pointOfContact: "Point of Contact",
      principalInvestigator: "Principal Investigator",
      processor: "Processor",
      publisher: "Publisher",
      author: "Author",
      sponsor: "Sponsor",
      coAuthor: "Co-author",
      collaborator: "Collaborator",
      editor: "Editor",
      mediator: "Mediator",
      rightsHolder: "Rights Holder",
      contributor: "Contributor",
      funder: "Funder",
      stakeholder: "Stakeholder",
    },
    
    CI_Series: {
      name: "Name",
      issueIdentification: "Issue Identification",
      page: "Page"
    },

    CI_Telephone: {
      voice: "Voice",
      facsimile: "Fax"
    },
    
    DCPList: {
      caption: "DCP",
      XML: "XML",
      CORBA: "CORBA",
      JAVA: "JAVA",
      COM: "COM",
      SQL: "SQL",
      WebServices: "WebServices"
    },
    
    DQ_ConformanceResult: {
      caption: "Conformance Result",
      explanation: "Explanation",
      degree: {
        caption: "Degree",
        validationPerformed: "Validation Performed",
        conformant: "Conformant",
        nonConformant: "Non Conformant"
      }
    },
    
    DQ_DataQuality: {
      report: "Report"
    },
    
    DQ_Scope : {
      level: "Scope (quality information applies to)",
      levelDescription: "Level Description"
    },
    
    EX_Extent: {
      caption: "Extent",
      description: "Description",
      geographicElement: "Spatial Element",
      temporalElement: "Temporal Element",
      verticalElement: "Vertical Element"
    },
    
    EX_GeographicBoundingBox: {
      westBoundLongitude: "West Bounding Longitude",
      eastBoundLongitude: "East Bounding Longitude",
      southBoundLatitude: "South Bounding Latitude",
      northBoundLatitude: "North Bounding Latitude"
    },
    
    EX_GeographicDescription: {
      caption: "Geographic Description"
    },
    
    EX_TemporalExtent: {
      TimePeriod: {
        beginPosition: "Begin Date",
        endPosition: "End Date"
      }
    },
    
    EX_VerticalExtent: {
      minimumValue: "Minimum Value",
      maximumValue: "Maximum Value",
      verticalCRS: "Vertical CRS",
      verticalCRSId: "Vertical CRS ID"
    },
    
    Length: {
      caption: "Length",
      uom: "Units of Measure",
      km: "Kilometers",
      m: "Meters",
      mi: "Miles",
      ft: "Feet"
    },
    
    LI_Lineage: {
      statement: "Lineage Statement"
    },
    
    MD_BrowseGraphic: {
      fileName: "Browse Graphic URL",
      fileDescription: "Browse Graphic Caption",
      fileType: "Browse Graphic Type"
    },
    
    MD_ClassificationCode: {
      unclassified: "Unclassified",
      restricted: "Restricted",
      confidential: "Confidential",
      secret: "Secret",
      topSecret: "Top Secret"
    },
    
    MD_Constraints: {
      caption: "Usage Constraints",
      useLimitation: "Use Limitation"
    },
    
    MD_DataIdentification: {
      spatialRepresentationType: "Spatial Representation Type",
      spatialResolution: "Spatial Resolution",
      language: "Resource Language",
      supplementalInformation: "Supplemental"
    },
    
    MD_DigitalTransferOptions: {
      onLine: "Online"
    },
    
    MD_Distribution: {
      distributionFormat: "Distribution Format",
      transferOptions: "Transfer Options"
    },
    
    MD_Format: {
      name: "Format Name",
      version: "Format Version"
    },
    
    MD_Identifier: {
      authority: "Authority",
      code: "Code",
      codeSpace: "Code Space",
      version: "Version",
      description: "Description",
    },
    
    MD_Keywords: {
      delimitedCaption: "Keywords",
      thesaurusName: "Associated Thesaurus"
    },
    
    MD_KeywordTypeCode: {
      caption: "Keyword Type",
      discipline: "Discipline",
      place: "Place",
      stratum: "Stratum",
      temporal: "Temporal",
      theme: "Theme",
	  audience: "Audience",
	  subject: "Subject",
	  community: "Community",
	  "function": "Function",
	  domain: "Domain"
    },
    
    MD_LegalConstraints: {
      caption: "Legal Constraints",
      accessConstraints: "Access Constraints",
      useConstraints: "Use Constraints",
      otherConstraints: "Other Constraints"
    },
    
    MD_MaintenanceFrequencyCode: {
      caption: "Frequency",
      continual: "Continual",
      daily: "Daily",
      weekly: "Weekly",
      fortnightly: "Fortnightly",
      monthly: "Monthly",
      quarterly: "Quarterly",
      biannually: "Biannually",
      annually: "Annually",
      asNeeded: "As Needed",
      irregular: "Irregular",
      notPlanned: "Not Planned",
      unknown: "Unknown"
    },
    
    MD_Metadata: {
      caption: "Metadata",
      metadataIdentifier: "Identifier",
      defaultLocale: "Default Locale",
      parentMetadata: "Parent Metadata",
      contact: "Metadata Contact",
      dateInfo: "Date Info",
      metadataStandard: "Metadata Standard",
      metadataProfile: "Metadata Profile",
      fileIdentifier: "File Identifier",
      alternativeMetadataReference: "Alternative Metadata Reference",
      otherLocale: "Other Locale",
      metadataLinkage: "Metadata Linkage",
      spatialRepresentationInfo: "Spatial Representation",
      metadataExtensionInfo: "Metadata Extension",
      identificationInfo: "Identification",
      contentInfo: "Content",
      distributionInfo: "Distribution",
      dataQualityInfo: "Quality",
      portrayalCatalogueInfo: "Portrayal Catalogue",
      metadataConstraints: "Constraints",
      metadataMaintenance: "Metadata Maintenance",
      resourceLineage: "Lineage",
      metadataScope: "Metadata Scope",

      language: "Metadata Language",
      hierarchyLevel: "Hierarchy Level",
      hierarchyLevelName: "Hierarchy Level Name",
      dateStamp: "Metadata Date",
      referenceSystemInfo: "Reference System"
    },
    
    MD_ProgressCode: {
      caption: "Progress Code",
      completed: "Completed",
      historicalArchive: "Historical Archive",
      obsolete: "Obsolete",
      onGoing: "On Going",
      planned: "Planned",
      required: "Required",
      underDevelopment: "Under Development"
    },
    
    MD_RepresentativeFraction: {
      denominator: "Denominator"
    },
    
    MD_Resolution: {
      equivalentScale: "Equivalent Scale",
      distance: "Distance"
    },
    
    MD_RestrictionCode: {
      copyright: "Copyright",
      patent: "Patent",
      patentPending: "Patent Pending",
      trademark: "Trademark",
      license: "License",
      intellectualPropertyRights: "Intellectual Property Rights",
      restricted: "Restricted",
      otherRestrictions: "Other Restrictions"
    },
    
    MD_ScopeCode: {
      attribute: "Attribute",
      attributeType: "Attribute type",
      collectionHardware: "Collection hardware",
      collectionSession: "Collection session",
      dataset: "Dataset",
      series: "Series",
      nonGeographicDataset: "Non geographic dataset",
      dimensionGroup: "Dimension group",
      feature: "Feature",
      featureType: "Feature type",
      propertyType: "Property type",
      fieldSession: "Field session",
      software: "Software",
      service: "Service",
      model: "Model",
      tile: "Tile",
	  map: "Map",
	  mapDocument: "Map Document",
	  layer: "Layer"
    },
    
    MD_ScopeDescription: {
      attributes: "Attributes",
      features: "Features",
      featureInstances: "Feature Instances",
      attributeInstances: "Attribute Instances",
      dataset: "Dataset",
      other: "Other"
    },
    
    MD_SecurityConstraints: {
      caption: "Security Constraints",
      classification: "Classification",
      userNote: "User Note",
      classificationSystem: "Classification System",
      handlingDescription: "Handling Description"
    },
    
    MD_SpatialRepresentationTypeCode: {
      caption: "Spatial Representation Type",
      vector: "Vector",
      grid: "Grid",
      textTable: "Text Table",
      tin: "TIN",
      stereoModel: "Stereo Model",
      video: "Video"
    },
    
    MD_TopicCategoryCode: {
      caption: "Topic Category",
      boundaries: "Administrative and Political Boundaries",
      farming: "Agriculture and Farming",
      climatologyMeteorologyAtmosphere: "Atmosphere and Climatic",
      biota: "Biology and Ecology",
      economy: "Business and Economic",
      planningCadastre: "Cadastral",
      society: "Cultural, Society and Demography",
      elevation: "Elevation and Derived Products",
      environment: "Environment and Conservation",
      structure: "Facilities and Structures",
      geoscientificInformation: "Geological and Geophysical",
      health: "Human Health and Disease",
      imageryBaseMapsEarthCover: "Imagery and Base Maps",
      inlandWaters: "Inland Water Resources",
      location: "Locations and Geodetic Networks",
      intelligenceMilitary: "Military",
      oceans: "Oceans and Estuaries",
      transportation: "Transportation Networks",
      utilitiesCommunication: "Utilities and Communication"
    },
    
    MI_ContextCode: {
      caption: "Context",
      acquisition: "Acquisition",
      pass: "Pass",
      wayPoint: "Waypoint"
    },
    
    MI_EnvironmentalRecord: {
      caption: "Environmental Conditions",
      averageAirTemperature: "Average Air Temperature",
      maxRelativeHumidity: "Maximum Relative Humidity",
      maxAltitude: "Maximum Altitude",
      meterologicalConditions: "Meterological Conditions"
    },
    
    MI_Event: {
      identifier: "Event Identifier",
      time: "Time",
      expectedObjectiveReference: "Expected Objective (Objective Identifer)",
      relatedSensorReference: "Related Sensor (Instrument Identifer)",
      relatedPassReference: "Related Pass (Platform Pass Identifer)"
    },

    MI_GeometryTypeCode: {
      point: "Point",
      linear: "Linear",
      areal: "Areal",
      strip: "Strip"
    },
    
    MI_Instrument: {
      citation: "Instrument Citation",
      identifier: "Instrument Identifier",
      sType: "Instrument Type",
      description: "Instrument Description",
      mountedOn: "Mounted On",
      mountedOnPlatformReference: "Mounted On (Platform Identifier)"
    },
    
    MI_Metadata: {
      acquisitionInformation: "Acquisition"
    },
    
    MI_Objective: {
      caption: "Objective",
      identifier: "Objective Identifier",
      priority: "Priority of Target",
      sFunction: "Function of Objective",
      extent: "Extent",
      pass: "Platform Pass",
      sensingInstrumentReference: "Sensing Instrument (Instrument Identifier)",
      objectiveOccurrence: "Events",
      sections: {
        identification: "Identification",
        extent: "Extent",
        pass: "Pass",
        sensingInstrument: "Sensing Instrument",
        objectiveOccurrence: "Events"
      }
    },
    
    MI_ObjectiveTypeCode: {
      caption: "Type (Collection Technique for Objective)",
      instantaneousCollection: "Instantaneous Collection",
      persistentView: "Persistent View",
      survey: "Survey"
    },
    
    MI_Operation: {
      caption: "Operation",
      description: "Operation Description",
      citation: "Operation Citation",
      identifier: "Operation Identifier",
      status: "Operation Status",
      objectiveReference: "Related Objective (Objective Identifier)",
      planReference: "Related Plan (Plan Identifier)",
      significantEventReference: "Related Event (Event Identifier)",
      platformReference: "Related Platform (Platform Identifier)",
      sections: {
        identification: "Identification",
        related: "Related"
      }
    },
    
    MI_OperationTypeCode: {
      caption: "Operation Type",
      real: "Real",
      simulated: "Simulated",
      synthesized: "Synthesized"
    },
    
    MI_Plan: {
      sType: "Sampling Geometry for Collecting Data",
      status: "Status of Plan",
      citation: "Citation of Authority Requesting Collection",
      satisfiedRequirementReference: "Satisfied Requirement (Requirement Identifier)",
      operationReference: "Related Operation (Operation Identifier)"
    },
    
    MI_Platform: {
      citation: "Platform Citation",
      identifier: "Platform Identifier",
      description: "Description of Platform Supporting the Instrument",
      sponsor: "Sponsor Organization for Platform",
      instrument: "Instrument(s) mounted on the platform",
      instrumentReference: "Instrument Identifier",
      sections: {
        identification: "Identification",
        sponsor: "Sponsor",
        instruments: "Instruments"
      }
    },
    
    MI_PlatformPass: {
      identifier: "Platform Pass Identifier",
      extent: "Platform Pass Extent",
      relatedEventReference: "Related Event (Event Identifer)"
    },

    MI_PriorityCode: {
      critical: "Critical", 
      highImportance: "High Importance",
      mediumImportance: "Medium Importance",
      lowImportance: "Low Importance"
    },
    
    MI_RequestedDate : {
      requestedDateOfCollection: "Requested Date Of Collection",
      latestAcceptableDate: "Latest Acceptable Date"
    },
    
    MI_Requirement: {
      caption: "Requirement",
      citation: "Citation for Requirement Guidance Material",
      identifier: "Requirement Identifier",
      requestor: "Requestor of Requirement",
      recipient: "Recipient of Requirement Results",
      priority: "Requirement Priority",
      requestedDate: "Requested Date",
      expiryDate: "Expiry Date",
      satisifiedPlanReference: "Satisfied Plan (Plan Identifier)",
      sections: {
        identification: "Identification",
        requestor: "Requestor",
        recipient: "Recipient",
        priorityAndDates: "Priority And Dates",
        satisifiedPlan: "Satisified  Plan"
      }
    },
    
    MI_SequenceCode: {
      caption: "Sequence",
      start: "Start",
      end: "End",
      instantaneous: "Instantaneous"
    },
    
    MI_TriggerCode: {
      caption: "Trigger",
      automatic: "Automatic",
      manual: "Manual",
      preProgrammed: "Preprogrammed"
    },
    
    ObjectReference: {
      uuidref: "UUID Reference",
      xlinkref: "URL Reference"
    },

    PT_FreeText: {
      locale: "Locale",
      textGroup: "Localized Strings"
    },

    PT_Locale: {
      language: "Language",
      country: "Country",
      characterEncoding: "Character Encoding"
    },
    
    RS_Identifier: {
      caption: "ID Plus Code Space",
      code: "Code",
      codeSpace: "Code Space"
    },
    
    SV_CouplingType: {
      loose: "Loose",
      mixed: "Mixed",
      tight: "Tight"
    },
    
    SV_OperationMetadata: {
      operationName: "Operation Name",
      DCP: "DCP",
      connectPoint: "Connect Point"
    },
    
    SV_ServiceIdentification: {
      serviceType: "ServiceType",
      couplingType: "Coupling Type",
      containsOperations: "Operation Metadata",
      operatesOn: "Operates On"
    },
    
    TM_Primitive: {
      indeterminatePosition: "Indeterminate Position",
      indeterminates: {
        before: "Before",
         after: "After",
        now: "Now",
        unknown: "Unknown"
      }
    },
    
    gemet: {
      concept: {
        gemetConceptKeyword: "GEMET Concept Keyword",
        tool: "Look Up...",
        dialogTitle: "GEMET - Concept Keyword",
        searchLabel: "Search:",
        searchTip: "Search GEMET"
      },
      theme: {
        tool: "Look Up...",
        dialogTitle: "GEMET - Inspire Data Theme"
      },
      ioerror: "There was an error communicating with the GEMET service: {url}",
      searching: "Searching GEMET...",
      noMatch: "No matching results were found.",
      languages: {
        "bg": "Bulgarian",
        "cs": "Czech",
        "da": "Danish",
        "nl": "Dutch",
        "en": "English",
        "et": "Estonian",
        "fi": "Finnish",
        "fr": "French",
        "de": "German",
        "el": "Greek",
        "hu": "Hungarian",
        "ga": "Gaelic (Irish)",
        "it": "Italian",
        "lv": "Latvian",
        "lt": "Lithuanian",
        "mt": "Maltese",
        "pl": "Polish", 
        "pt": "Portuguese",
        "ro": "Romanian",
        "sk": "Slovak",
        "sl": "Slovenian",    
        "es": "Spanish",
        "sv": "Swedish"
      }
    }
   
  }),
  "ar": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "it": 1,
  "ja": 1,
  "ko": 1,
  "lv": 1,
  "lt": 1,
  "nl": 1,
  "nb": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
