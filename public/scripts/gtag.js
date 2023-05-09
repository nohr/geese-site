// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "5",

      macros: [
        { function: "__e" },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-43752144-14",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoTitle",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 },
      ],
      tags: [
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "YouTube",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 2],
          vtp_eventAction: "Start Playing",
          vtp_eventLabel: ["macro", 3],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 10,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Button",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 2],
          vtp_eventAction: "Click",
          vtp_eventLabel: ["macro", 4],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 14,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_gaSettings: ["macro", 2],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 15,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "Mailing List",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 2],
          vtp_eventAction: "Submit",
          vtp_eventLabel: "Form",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: true,
          tag_id: 16,
        },
        {
          function: "__cvt_41739167_21",
          metadata: ["map"],
          once_per_event: true,
          vtp_single_multi_product: "single",
          vtp_pixel_code: "CCHM96BC77U42MHSFRG0",
          vtp_event: "ViewContent",
          vtp_enhance_ecomm: false,
          vtp_hash: "hashed",
          tag_id: 22,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "41739167_3",
          tag_id: 24,
        },
        {
          function: "__fsl",
          vtp_waitForTags: "",
          vtp_checkValidation: "",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "41739167_6",
          tag_id: 25,
        },
        {
          function: "__ytl",
          vtp_captureComplete: true,
          vtp_captureStart: true,
          vtp_fixMissingApi: false,
          vtp_triggerStartOption: "DOM_READY",
          vtp_capturePause: false,
          vtp_captureProgress: false,
          vtp_uniqueTriggerId: "41739167_7",
          vtp_enableTriggerStartOption: true,
          tag_id: 26,
        },
        {
          function: "__ytl",
          vtp_progressThresholdsPercent: "25, 50, 75",
          vtp_captureComplete: true,
          vtp_captureStart: true,
          vtp_fixMissingApi: true,
          vtp_triggerStartOption: "DOM_READY",
          vtp_radioButtonGroup1: "PERCENTAGE",
          vtp_capturePause: false,
          vtp_captureProgress: true,
          vtp_uniqueTriggerId: "41739167_9",
          vtp_enableTriggerStartOption: true,
          tag_id: 27,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "41739167_13",
          tag_id: 28,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1315404028548666");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1315404028548666\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 17,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","897636584619084");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=897636584619084\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 20,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a="script";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,"https://sc-static.net/scevent.min.js");snaptr("init","df2ae12e-50a6-4ca0-82c7-ad76d1c871ca",{user_email:"__INSERT_USER_EMAIL__"});snaptr("track","PAGE_VIEW");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 23,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.video" },
        {
          function: "_re",
          arg0: ["macro", 1],
          arg1: "(^$|((^|,)41739167_9($|,)))",
        },
        { function: "_sw", arg0: ["macro", 4], arg1: "dsp_button" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
        {
          function: "_re",
          arg0: ["macro", 1],
          arg1: "(^$|((^|,)41739167_13($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_cn", arg0: ["macro", 5], arg1: "6" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.formSubmit" },
        {
          function: "_re",
          arg0: ["macro", 1],
          arg1: "(^$|((^|,)41739167_6($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
      ],
      rules: [
        [
          ["if", 0, 1],
          ["add", 0],
        ],
        [
          ["if", 2, 3, 4],
          ["add", 1],
        ],
        [
          ["if", 5],
          ["add", 2, 10, 11, 4, 12, 5, 6, 9],
        ],
        [
          ["if", 6, 7, 8],
          ["add", 3],
        ],
        [
          ["if", 9],
          ["add", 7, 8],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_41739167_21",
        [46, "a"],
        [52, "b", "0_1_18"],
        [52, "c", ["require", "logToConsole"]],
        [52, "d", ["require", "copyFromWindow"]],
        [52, "e", ["require", "copyFromDataLayer"]],
        [52, "f", ["e", "ecommerce"]],
        [52, "g", ["require", "makeNumber"]],
        [52, "h", ["require", "callInWindow"]],
        [52, "i", ["require", "Object"]],
        [52, "j", ["require", "JSON"]],
        [
          52,
          "k",
          [
            8,
            "ViewContent",
            1,
            "ClickButton",
            1,
            "Search",
            1,
            "AddToWishlist",
            1,
            "AddToCart",
            1,
            "InitiateCheckout",
            1,
            "AddPaymentInfo",
            1,
            "CompletePayment",
            1,
            "PlaceAnOrder",
            1,
            "Contact",
            1,
            "Download",
            1,
            "SubmitForm",
            1,
            "CompleteRegistration",
            1,
            "Subscribe",
            1,
          ],
        ],
        [
          52,
          "l",
          [51, "", [7, "q"], [36, [21, [40, ["d", [15, "q"]]], "undefined"]]],
        ],
        [
          52,
          "m",
          [
            51,
            "",
            [7, "q"],
            [36, [1, [15, "q"], [12, [17, [15, "q"], "length"], 64]]],
          ],
        ],
        [
          52,
          "n",
          [
            51,
            "",
            [7],
            [41, "q", "r", "s", "t"],
            [3, "q", [8, "gtm_version", [15, "b"]]],
            [
              22,
              [12, [17, [15, "a"], "enhance_ecomm"], true],
              [
                46,
                [3, "r", 0],
                [
                  22,
                  [12, [17, [15, "a"], "ga_ecomm"], "ecomm"],
                  [
                    46,
                    [
                      22,
                      [17, [15, "f"], "items"],
                      [
                        46,
                        ["c", "1a. Standard Ecommerce - Data layers detected"],
                        [43, [15, "q"], "contents", [7]],
                        [
                          2,
                          [17, [15, "f"], "items"],
                          "map",
                          [
                            7,
                            [
                              51,
                              "",
                              [7, "u"],
                              [41, "v"],
                              [3, "v", [8]],
                              [
                                22,
                                [17, [15, "u"], "item_id"],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "content_id",
                                    [17, [15, "u"], "item_id"],
                                  ],
                                ],
                              ],
                              [
                                22,
                                [
                                  1,
                                  [28, [17, [15, "u"], "item_id"]],
                                  [17, [15, "u"], "id"],
                                ],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "content_id",
                                    [17, [15, "u"], "id"],
                                  ],
                                ],
                              ],
                              [
                                22,
                                [17, [15, "u"], "item_name"],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "content_name",
                                    [17, [15, "u"], "item_name"],
                                  ],
                                ],
                              ],
                              [
                                22,
                                [17, [15, "u"], "price"],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "price",
                                    [17, [15, "u"], "price"],
                                  ],
                                ],
                              ],
                              [
                                22,
                                [17, [15, "u"], "quantity"],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "quantity",
                                    [17, [15, "u"], "quantity"],
                                  ],
                                ],
                              ],
                              [43, [15, "v"], "content_type", "product"],
                              [
                                2,
                                [17, [15, "q"], "contents"],
                                "push",
                                [7, [15, "v"]],
                              ],
                              [
                                22,
                                [17, [15, "u"], "price"],
                                [
                                  46,
                                  [
                                    22,
                                    [28, [17, [15, "u"], "quantity"]],
                                    [46, [43, [15, "u"], "quantity", 1]],
                                  ],
                                  [
                                    3,
                                    "r",
                                    [
                                      0,
                                      [15, "r"],
                                      [
                                        26,
                                        [17, [15, "u"], "price"],
                                        [17, [15, "u"], "quantity"],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                      [
                        46,
                        [
                          "c",
                          "1a. Standard Ecommerce - Unable to detect any Data Layers",
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  22,
                  [12, [17, [15, "a"], "ga_ecomm"], "enhance_ecomm"],
                  [
                    46,
                    [3, "s", ""],
                    [
                      22,
                      [12, [17, [15, "a"], "event"], "ViewContent"],
                      [
                        46,
                        [
                          22,
                          [
                            1,
                            [17, [15, "f"], "detail"],
                            [17, [17, [15, "f"], "detail"], "products"],
                          ],
                          [
                            46,
                            [
                              3,
                              "s",
                              [17, [17, [15, "f"], "detail"], "products"],
                            ],
                          ],
                        ],
                      ],
                      [
                        46,
                        [
                          22,
                          [12, [17, [15, "a"], "event"], "AddToCart"],
                          [
                            46,
                            [
                              22,
                              [
                                1,
                                [17, [15, "f"], "add"],
                                [17, [17, [15, "f"], "add"], "products"],
                              ],
                              [
                                46,
                                [
                                  3,
                                  "s",
                                  [17, [17, [15, "f"], "add"], "products"],
                                ],
                              ],
                            ],
                          ],
                          [
                            46,
                            [
                              22,
                              [
                                30,
                                [
                                  12,
                                  [17, [15, "a"], "event"],
                                  "InitiateCheckout",
                                ],
                                [
                                  12,
                                  [17, [15, "a"], "event"],
                                  "AddPaymentInfo",
                                ],
                              ],
                              [
                                46,
                                [
                                  22,
                                  [
                                    1,
                                    [17, [15, "f"], "checkout"],
                                    [
                                      17,
                                      [17, [15, "f"], "checkout"],
                                      "products",
                                    ],
                                  ],
                                  [
                                    46,
                                    [
                                      3,
                                      "s",
                                      [
                                        17,
                                        [17, [15, "f"], "checkout"],
                                        "products",
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                              [
                                46,
                                [
                                  22,
                                  [
                                    30,
                                    [
                                      30,
                                      [
                                        12,
                                        [17, [15, "a"], "event"],
                                        "CompletePayment",
                                      ],
                                      [
                                        12,
                                        [17, [15, "a"], "event"],
                                        "PlaceAnOrder",
                                      ],
                                    ],
                                    [12, [17, [15, "a"], "event"], "Subscribe"],
                                  ],
                                  [
                                    46,
                                    [
                                      22,
                                      [
                                        1,
                                        [17, [15, "f"], "purchase"],
                                        [
                                          17,
                                          [17, [15, "f"], "purchase"],
                                          "products",
                                        ],
                                      ],
                                      [
                                        46,
                                        [
                                          3,
                                          "s",
                                          [
                                            17,
                                            [17, [15, "f"], "purchase"],
                                            "products",
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                    [
                      22,
                      [18, [17, [15, "s"], "length"], 0],
                      [
                        46,
                        ["c", "1b. Enhanced Ecommerce - Data layers detected"],
                        [43, [15, "q"], "contents", [7]],
                        [
                          2,
                          [15, "s"],
                          "map",
                          [
                            7,
                            [
                              51,
                              "",
                              [7, "u"],
                              [41, "v"],
                              [3, "v", [8]],
                              [
                                22,
                                [17, [15, "u"], "id"],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "content_id",
                                    [17, [15, "u"], "id"],
                                  ],
                                ],
                              ],
                              [
                                22,
                                [17, [15, "u"], "name"],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "content_name",
                                    [17, [15, "u"], "name"],
                                  ],
                                ],
                              ],
                              [
                                22,
                                [17, [15, "u"], "price"],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "price",
                                    ["g", [17, [15, "u"], "price"]],
                                  ],
                                ],
                              ],
                              [
                                22,
                                [17, [15, "u"], "quantity"],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "v"],
                                    "quantity",
                                    ["g", [17, [15, "u"], "quantity"]],
                                  ],
                                ],
                              ],
                              [43, [15, "v"], "content_type", "product"],
                              [
                                2,
                                [17, [15, "q"], "contents"],
                                "push",
                                [7, [15, "v"]],
                              ],
                              [
                                22,
                                [17, [15, "u"], "price"],
                                [
                                  46,
                                  [
                                    22,
                                    [28, [17, [15, "u"], "quantity"]],
                                    [46, [43, [15, "u"], "quantity", 1]],
                                  ],
                                  [
                                    3,
                                    "r",
                                    [
                                      0,
                                      [15, "r"],
                                      [
                                        26,
                                        [17, [15, "u"], "price"],
                                        [17, [15, "u"], "quantity"],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                      [
                        46,
                        [
                          "c",
                          "1b. Enhanced Ecommerce - Unable to detect any ecommerce data layers",
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  22,
                  [
                    1,
                    [
                      1,
                      [29, [17, [15, "a"], "event"], "ViewContent"],
                      [17, [15, "q"], "contents"],
                    ],
                    [18, [17, [17, [15, "q"], "contents"], "length"], 0],
                  ],
                  [
                    46,
                    [43, [15, "q"], "currency", "USD"],
                    [
                      22,
                      [17, [15, "f"], "currencyCode"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "currency",
                          [17, [15, "f"], "currencyCode"],
                        ],
                      ],
                    ],
                    [
                      22,
                      [
                        1,
                        [28, [17, [15, "f"], "currencyCode"]],
                        [17, [15, "f"], "currency"],
                      ],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "currency",
                          [17, [15, "f"], "currency"],
                        ],
                      ],
                    ],
                    [43, [15, "q"], "value", [15, "r"]],
                    [
                      22,
                      [
                        1,
                        [
                          1,
                          [17, [15, "f"], "purchase"],
                          [17, [17, [15, "f"], "purchase"], "actionField"],
                        ],
                        [
                          17,
                          [17, [17, [15, "f"], "purchase"], "actionField"],
                          "revenue",
                        ],
                      ],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "value",
                          [
                            17,
                            [17, [17, [15, "f"], "purchase"], "actionField"],
                            "revenue",
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                46,
                [
                  22,
                  [12, [17, [15, "a"], "single_multi_product"], "single"],
                  [
                    46,
                    [
                      22,
                      [17, [15, "a"], "content_id"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "content_id",
                          [17, [15, "a"], "content_id"],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "content_type"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "content_type",
                          [17, [15, "a"], "content_type"],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "content_name"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "content_name",
                          [17, [15, "a"], "content_name"],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "price"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "price",
                          ["g", [17, [15, "a"], "price"]],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "quantity"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "quantity",
                          ["g", [17, [15, "a"], "quantity"]],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "currency"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "currency",
                          [17, [15, "a"], "currency"],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "value"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "value",
                          ["g", [17, [15, "a"], "value"]],
                        ],
                      ],
                      [
                        46,
                        [
                          22,
                          [
                            1,
                            [17, [15, "a"], "price"],
                            [17, [15, "a"], "quantity"],
                          ],
                          [
                            46,
                            [
                              43,
                              [15, "q"],
                              "value",
                              [
                                26,
                                ["g", [17, [15, "a"], "price"]],
                                ["g", [17, [15, "a"], "quantity"]],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "content_category"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "content_category",
                          [17, [15, "a"], "content_category"],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "description"],
                      [
                        46,
                        [
                          43,
                          [15, "q"],
                          "description",
                          [17, [15, "a"], "description"],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "query"],
                      [46, [43, [15, "q"], "query", [17, [15, "a"], "query"]]],
                    ],
                    [
                      22,
                      [17, [15, "a"], "status"],
                      [
                        46,
                        [43, [15, "q"], "status", [17, [15, "a"], "status"]],
                      ],
                    ],
                  ],
                  [
                    46,
                    [
                      22,
                      [12, [17, [15, "a"], "single_multi_product"], "multiple"],
                      [
                        46,
                        [
                          22,
                          [17, [15, "a"], "contents"],
                          [
                            46,
                            [
                              53,
                              [
                                52,
                                "u",
                                [
                                  2,
                                  [15, "j"],
                                  "parse",
                                  [7, [17, [15, "a"], "contents"]],
                                ],
                              ],
                              [
                                22,
                                [21, [15, "u"], [44]],
                                [46, [43, [15, "q"], "contents", [15, "u"]]],
                                [
                                  46,
                                  [
                                    43,
                                    [15, "q"],
                                    "contents",
                                    [17, [15, "a"], "contents"],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                        [
                          22,
                          [17, [15, "a"], "currency"],
                          [
                            46,
                            [
                              43,
                              [15, "q"],
                              "currency",
                              [17, [15, "a"], "currency"],
                            ],
                          ],
                        ],
                        [
                          22,
                          [17, [15, "a"], "value"],
                          [
                            46,
                            [
                              43,
                              [15, "q"],
                              "value",
                              ["g", [17, [15, "a"], "value"]],
                            ],
                          ],
                        ],
                        [
                          22,
                          [17, [15, "a"], "description"],
                          [
                            46,
                            [
                              43,
                              [15, "q"],
                              "description",
                              [17, [15, "a"], "description"],
                            ],
                          ],
                        ],
                        [
                          22,
                          [17, [15, "a"], "query"],
                          [
                            46,
                            [43, [15, "q"], "query", [17, [15, "a"], "query"]],
                          ],
                        ],
                        [
                          22,
                          [17, [15, "a"], "status"],
                          [
                            46,
                            [
                              43,
                              [15, "q"],
                              "status",
                              [17, [15, "a"], "status"],
                            ],
                          ],
                        ],
                      ],
                      [
                        46,
                        [
                          22,
                          [
                            12,
                            [17, [15, "a"], "single_multi_product"],
                            "empty",
                          ],
                          [
                            46,
                            [
                              22,
                              [17, [15, "a"], "currency"],
                              [
                                46,
                                [
                                  43,
                                  [15, "q"],
                                  "currency",
                                  [17, [15, "a"], "currency"],
                                ],
                              ],
                            ],
                            [
                              22,
                              [17, [15, "a"], "value"],
                              [
                                46,
                                [
                                  43,
                                  [15, "q"],
                                  "value",
                                  ["g", [17, [15, "a"], "value"]],
                                ],
                              ],
                            ],
                            [
                              22,
                              [17, [15, "a"], "description"],
                              [
                                46,
                                [
                                  43,
                                  [15, "q"],
                                  "description",
                                  [17, [15, "a"], "description"],
                                ],
                              ],
                            ],
                            [
                              22,
                              [17, [15, "a"], "query"],
                              [
                                46,
                                [
                                  43,
                                  [15, "q"],
                                  "query",
                                  [17, [15, "a"], "query"],
                                ],
                              ],
                            ],
                            [
                              22,
                              [17, [15, "a"], "status"],
                              [
                                46,
                                [
                                  43,
                                  [15, "q"],
                                  "status",
                                  [17, [15, "a"], "status"],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [3, "t", [8]],
            [
              22,
              [12, [17, [15, "a"], "hash"], "hashed"],
              [
                46,
                [
                  22,
                  [17, [15, "a"], "sha256_email"],
                  [
                    46,
                    [
                      43,
                      [15, "t"],
                      "sha256_email",
                      [17, [15, "a"], "sha256_email"],
                    ],
                  ],
                ],
                [
                  22,
                  [17, [15, "a"], "sha256_phone"],
                  [
                    46,
                    [
                      43,
                      [15, "t"],
                      "sha256_phone_number",
                      [17, [15, "a"], "sha256_phone"],
                    ],
                  ],
                ],
                [
                  22,
                  [17, [15, "a"], "sha256_external_id"],
                  [
                    46,
                    [
                      43,
                      [15, "t"],
                      "external_id",
                      [17, [15, "a"], "sha256_external_id"],
                    ],
                  ],
                ],
                ["c", "2a. Advanced matching with hashed PII"],
              ],
              [
                46,
                [
                  22,
                  [12, [17, [15, "a"], "hash"], "non-hashed"],
                  [
                    46,
                    [
                      22,
                      [17, [15, "a"], "email"],
                      [46, [43, [15, "t"], "email", [17, [15, "a"], "email"]]],
                    ],
                    [
                      22,
                      [17, [15, "a"], "phone"],
                      [
                        46,
                        [
                          43,
                          [15, "t"],
                          "phone_number",
                          [17, [15, "a"], "phone"],
                        ],
                      ],
                    ],
                    [
                      22,
                      [17, [15, "a"], "external_id"],
                      [
                        46,
                        [
                          43,
                          [15, "t"],
                          "external_id",
                          [17, [15, "a"], "external_id"],
                        ],
                      ],
                    ],
                    [
                      "c",
                      "2b. Advanced matching without hashed data, TikTok Pixel will hash the data for you.",
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [18, [17, [2, [15, "i"], "keys", [7, [15, "t"]]], "length"], 0],
              [46, ["h", "ttq.identify", [15, "t"]]],
            ],
            [
              "c",
              "3. Base code found, sending ",
              [17, [15, "a"], "event"],
              "event with",
              [15, "q"],
              [17, [15, "a"], "event_id"],
            ],
            [
              "h",
              "ttq.track",
              [17, [15, "a"], "event"],
              [15, "q"],
              [
                8,
                "event_id",
                [17, [15, "a"], "event_id"],
                "pixel_code",
                [17, [15, "a"], "pixel_code"],
              ],
            ],
          ],
        ],
        [
          52,
          "o",
          [
            51,
            "",
            [7, "q"],
            [52, "r", [7]],
            [52, "s", [7]],
            [
              22,
              [
                30,
                [20, [40, [17, [15, "q"], "pixel_code"]], "undefined"],
                [20, [2, [17, [15, "q"], "pixel_code"], "trim", [7]], ""],
              ],
              [46, [2, [15, "r"], "push", [7, "data.pixel_code not found"]]],
            ],
            [
              22,
              [28, ["l", "ttq"]],
              [46, [2, [15, "r"], "push", [7, "ttq not found"]]],
            ],
            [
              22,
              [17, [15, "q"], "external_id"],
              [
                46,
                [
                  43,
                  [15, "q"],
                  "external_id",
                  [2, [17, [15, "q"], "external_id"], "trim", [7]],
                ],
              ],
            ],
            [
              22,
              [17, [15, "q"], "email"],
              [
                46,
                [
                  22,
                  [
                    20,
                    [2, [17, [15, "q"], "email"], "indexOf", [7, "@"]],
                    [27, 1],
                  ],
                  [
                    46,
                    [2, [15, "s"], "push", [7, "data.email is not an email"]],
                  ],
                ],
                [
                  22,
                  ["m", [17, [15, "q"], "email"]],
                  [
                    46,
                    [
                      2,
                      [15, "s"],
                      "push",
                      [7, "data.email appears to be a SHA256 hash"],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [17, [15, "q"], "phone"],
              [
                46,
                [
                  22,
                  ["m", [17, [15, "q"], "phone"]],
                  [
                    46,
                    [
                      2,
                      [15, "s"],
                      "push",
                      [7, "data.phone appears to be a SHA256 hash"],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [17, [15, "q"], "sha256_email"],
              [
                46,
                [
                  22,
                  [28, ["m", [17, [15, "q"], "sha256_email"]]],
                  [
                    46,
                    [
                      2,
                      [15, "s"],
                      "push",
                      [7, "data.sha256_email is not a SHA256 hash"],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [17, [15, "q"], "sha256_phone"],
              [
                46,
                [
                  22,
                  [28, ["m", [17, [15, "q"], "sha256_phone"]]],
                  [
                    46,
                    [
                      2,
                      [15, "s"],
                      "push",
                      [7, "data.sha256_phone is not a SHA256 hash"],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [20, [16, [15, "k"], [17, [15, "q"], "event"]], [44]],
              [
                46,
                [
                  2,
                  [15, "s"],
                  "push",
                  [
                    7,
                    [
                      0,
                      [0, 'data.event "', [17, [15, "q"], "event"]],
                      '" is not a valid event',
                    ],
                  ],
                ],
              ],
            ],
            [65, "t", [15, "s"], [46, ["c", [0, "[WARN] ", [15, "t"]]]]],
            [65, "t", [15, "r"], [46, ["c", [0, "[ERROR] ", [15, "t"]]]]],
            [36, [15, "r"]],
          ],
        ],
        [
          52,
          "p",
          [
            51,
            "",
            [7],
            [52, "q", ["o", [15, "a"]]],
            [
              22,
              [18, [17, [15, "q"], "length"], 0],
              [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]],
            ],
            ["n"],
            [2, [15, "a"], "gtmOnSuccess", [7]],
          ],
        ],
        ["p"],
      ],
    ],

    permissions: {
      __cvt_41739167_21: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "ttq", read: true, write: false, execute: false },
            { key: "ttq.identify", read: false, write: false, execute: true },
            { key: "ttq.track", read: false, write: false, execute: true },
          ],
        },
        read_data_layer: { keyPatterns: ["ecommerce"] },
      },
    },

    sandboxed_scripts: ["__cvt_41739167_21"],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ka = { a: !0 },
        la = {};
      try {
        la.__proto__ = ka;
        ha = la.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ma = fa,
    oa = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ma) ma(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.wm = b.prototype;
    },
    pa = this || self,
    qa = function (a) {
      return a;
    };
  var ra = function (a, b) {
    this.h = a;
    this.m = b;
  };
  var sa = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    ta = function () {
      this.B = {};
      this.C = !1;
      this.N = {};
    },
    ua = function (a, b) {
      var c = [],
        d;
      for (d in a.B)
        if (a.B.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  ta.prototype.get = function (a) {
    return this.B["dust." + a];
  };
  ta.prototype.set = function (a, b) {
    this.C || ((a = "dust." + a), this.N.hasOwnProperty(a) || (this.B[a] = b));
  };
  ta.prototype.has = function (a) {
    return this.B.hasOwnProperty("dust." + a);
  };
  var va = function (a, b) {
    b = "dust." + b;
    a.C || a.N.hasOwnProperty(b) || delete a.B[b];
  };
  ta.prototype.nc = function () {
    this.C = !0;
  };
  ta.prototype.Gf = function () {
    return this.C;
  };
  var wa = function (a) {
    this.m = new ta();
    this.h = [];
    this.B = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (sa(b) ? (this.h[Number(b)] = a[Number(b)]) : this.m.set(b, a[b]));
  };
  aa = wa.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof wa
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.B)
      if ("length" === a) {
        if (!sa(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else sa(a) ? (this.h[Number(a)] = b) : this.m.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : sa(a)
      ? this.h[Number(a)]
      : this.m.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Rb = function () {
    for (var a = ua(this.m, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new wa(a);
  };
  var xa = function (a, b) {
    sa(b) ? delete a.h[Number(b)] : va(a.m, b);
  };
  aa = wa.prototype;
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new wa(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (sa(a) && this.h.hasOwnProperty(a)) || this.m.has(a);
  };
  aa.nc = function () {
    this.B = !0;
    Object.freeze(this.h);
    this.m.nc();
  };
  aa.Gf = function () {
    return this.B;
  };
  var ya = function () {
    this.quota = {};
  };
  ya.prototype.reset = function () {
    this.quota = {};
  };
  var za = function (a, b) {
    this.T = a;
    this.N = function (c, d, e) {
      return c.apply(d, e);
    };
    this.B = b;
    this.m = new ta();
    this.h = this.C = void 0;
  };
  za.prototype.add = function (a, b) {
    Aa(this, a, b, !1);
  };
  var Aa = function (a, b, c, d) {
    if (!a.m.Gf())
      if (d) {
        var e = a.m;
        e.set(b, c);
        e.N["dust." + b] = !0;
      } else a.m.set(b, c);
  };
  za.prototype.set = function (a, b) {
    this.m.Gf() ||
      (!this.m.has(a) && this.B && this.B.has(a)
        ? this.B.set(a, b)
        : this.m.set(a, b));
  };
  za.prototype.get = function (a) {
    return this.m.has(a) ? this.m.get(a) : this.B ? this.B.get(a) : void 0;
  };
  za.prototype.has = function (a) {
    return !!this.m.has(a) || !(!this.B || !this.B.has(a));
  };
  var Ba = function (a) {
    var b = new za(a.T, a);
    a.C && (b.C = a.C);
    b.N = a.N;
    b.h = a.h;
    return b;
  };
  var Da = function () {},
    Fa = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    Ga = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ha = Array.isArray,
    Ia = function (a, b) {
      if (a && Ha(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ka = function (a, b) {
      if (!Ga(a) || !Ga(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ma = function (a, b) {
      for (var c = new La(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Na = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Oa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Pa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Qa = function (a) {
      var b = [];
      if (Ha(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ra = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Sa = function () {
      return new Date(Date.now());
    },
    Ta = function () {
      return Sa().getTime();
    },
    La = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  La.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  La.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ua = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Va = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Wa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ya = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Za = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    $a = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    ab = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    cb = /^\w{1,9}$/,
    db = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        cb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    eb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var fb = function (a, b) {
    ta.call(this);
    this.T = a;
    this.pb = b;
  };
  oa(fb, ta);
  fb.prototype.toString = function () {
    return this.T;
  };
  fb.prototype.Rb = function () {
    return new wa(ua(this, 1));
  };
  fb.prototype.h = function (a, b) {
    return this.pb.apply(
      new gb(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  fb.prototype.m = function (a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var ib = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = hb(a, b[d])), c instanceof ra);
        d++
      );
      return c;
    },
    hb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof fb))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.h.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.C;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    gb = function (a, b) {
      this.m = a;
      this.h = b;
    },
    C = function (a, b) {
      return Ha(b) ? hb(a.h, b) : b;
    },
    F = function (a) {
      return a.m.T;
    };
  var jb = function () {
    ta.call(this);
  };
  oa(jb, ta);
  jb.prototype.Rb = function () {
    return new wa(ua(this, 1));
  };
  var kb = {
    map: function (a) {
      for (var b = new jb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = C(this, arguments[c]) + "",
          e = C(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    list: function (a) {
      for (var b = new wa(), c = 0; c < arguments.length; c++) {
        var d = C(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    fn: function (a, b, c) {
      var d = this.h,
        e = C(this, b);
      if (!(e instanceof wa))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new fb(
        a,
        (function () {
          return function (g) {
            var h = Ba(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = C(this, m[n])), m[n] instanceof ra)) return m[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new wa(m));
            var r = ib(h, f);
            if (r instanceof ra) return "return" === r.h ? r.m : r;
          };
        })()
      );
    },
    control: function (a, b) {
      return new ra(a, C(this, b));
    },
    undefined: function () {},
  };
  var lb = function () {
      this.B = new ya();
      this.h = new za(this.B);
    },
    mb = function (a, b, c) {
      var d = new fb(b, c);
      d.nc();
      a.h.set(b, d);
    },
    nb = function (a, b, c) {
      kb.hasOwnProperty(b) && mb(a, c || b, kb[b]);
    };
  lb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.m(c);
  };
  lb.prototype.m = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = hb(this.h, arguments[c]);
    return b;
  };
  lb.prototype.C = function (a, b) {
    var c = Ba(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = hb(c, arguments[e]);
    return d;
  };
  function ob() {
    for (var a = pb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function qb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var pb, rb;
  function sb(a) {
    pb = pb || qb();
    rb = rb || ob();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(pb[m], pb[n], pb[p], pb[q]);
    }
    return b.join("");
  }
  function tb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = rb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    pb = pb || qb();
    rb = rb || ob();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var ub = {},
    vb = function (a, b) {
      ub[a] = ub[a] || [];
      ub[a][b] = !0;
    },
    wb = function () {
      delete ub.GA4_EVENT;
    },
    xb = function (a) {
      var b = ub[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return sb(c.join("")).replace(/\.+$/, "");
    };
  var yb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var zb,
    Ab = function () {
      if (void 0 === zb) {
        var a = null,
          b = pa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: qa,
              createScript: qa,
              createScriptURL: qa,
            });
          } catch (c) {
            pa.console && pa.console.error(c.message);
          }
          zb = a;
        } else zb = a;
      }
      return zb;
    };
  var Bb = function (a) {
    this.h = a;
  };
  Bb.prototype.toString = function () {
    return this.h + "";
  };
  var Cb = function (a) {
      return a instanceof Bb && a.constructor === Bb
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    Db = {},
    Eb = function (a) {
      var b = a,
        c = Ab(),
        d = c ? c.createScriptURL(b) : b;
      return new Bb(d, Db);
    };
  var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var Gb, Hb;
  a: {
    for (var Ib = ["CLOSURE_FLAGS"], Jb = pa, Kb = 0; Kb < Ib.length; Kb++)
      if (((Jb = Jb[Ib[Kb]]), null == Jb)) {
        Hb = null;
        break a;
      }
    Hb = Jb;
  }
  var Lb = Hb && Hb[610401301];
  Gb = null != Lb ? Lb : !1;
  function Mb() {
    var a = pa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Nb,
    Ob = pa.navigator;
  Nb = Ob ? Ob.userAgentData || null : null;
  function Pb(a) {
    return Gb
      ? Nb
        ? Nb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function Qb(a) {
    return -1 != Mb().indexOf(a);
  }
  function Rb() {
    return Gb ? !!Nb && 0 < Nb.brands.length : !1;
  }
  function Sb() {
    return Rb() ? !1 : Qb("Opera");
  }
  function Tb() {
    return Qb("Firefox") || Qb("FxiOS");
  }
  function Ub() {
    return Rb()
      ? Pb("Chromium")
      : ((Qb("Chrome") || Qb("CriOS")) && !(Rb() ? 0 : Qb("Edge"))) ||
          Qb("Silk");
  }
  var Vb = {},
    Wb = function (a) {
      this.h = a;
    };
  Wb.prototype.toString = function () {
    return this.h.toString();
  };
  var Xb = function (a) {
    return a instanceof Wb && a.constructor === Wb
      ? a.h
      : "type_error:SafeHtml";
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Yb = {};
  var Zb = function () {},
    $b = function (a) {
      this.h = a;
    };
  oa($b, Zb);
  $b.prototype.toString = function () {
    return this.h;
  };
  function ac(a, b) {
    var c = [new $b(bc[0].toLowerCase(), Yb)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof $b) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function cc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  (function () {
    return "";
  })
    .toString()
    .indexOf("`");
  function dc(a) {
    var b = (a = ec(a)),
      c = Ab(),
      d = c ? c.createHTML(b) : b;
    return new Wb(d, Vb);
  }
  function ec(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    H = document,
    fc = navigator,
    gc = H.currentScript && H.currentScript.src,
    hc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    ic = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    jc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    kc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function lc(a, b, c) {
    b &&
      l(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var mc = function (a, b, c, d, e) {
      var f = H.createElement("script");
      lc(f, d, jc);
      f.type = "text/javascript";
      f.async = !0;
      var g;
      g = Eb(ec(a));
      f.src = Cb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      ic(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    nc = function () {
      if (gc) {
        var a = gc.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    oc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = H.createElement("iframe")), (h = !0));
      lc(g, c, kc);
      d &&
        l(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var m = (H.body && H.body.lastChild) || H.body || H.head;
        m.parentNode.insertBefore(g, m);
      }
      ic(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    pc = function (a, b, c, d) {
      var e = new Image(1, 1);
      lc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    qc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    rc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      z.setTimeout(a, 0);
    },
    sc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    tc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    uc = function (a) {
      var b = H.createElement("div"),
        c = b,
        d = dc("A<div>" + a + "</div>");
      1 === c.nodeType && cc(c);
      c.innerHTML = Xb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    vc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    wc = function (a) {
      var b;
      try {
        b = fc.sendBeacon && fc.sendBeacon(a);
      } catch (c) {
        vb("TAGGING", 15);
      }
      b || pc(a);
    },
    xc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    yc = function (a, b) {
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    zc = function () {
      var a = z.performance;
      if (a && Fa(a.now)) return a.now();
    },
    Ac = function () {
      return z.performance || void 0;
    };
  var Bc = function (a, b) {
      return C(this, a) && C(this, b);
    },
    Cc = function (a, b) {
      return C(this, a) === C(this, b);
    },
    Dc = function (a, b) {
      return C(this, a) || C(this, b);
    },
    Gc = function (a, b) {
      a = C(this, a);
      b = C(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    Hc = function (a, b) {
      a = String(C(this, a));
      b = String(C(this, b));
      return a.substring(0, b.length) === b;
    },
    Ic = function (a, b) {
      a = C(this, a);
      b = C(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof jb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var Kc = function () {
    this.h = new lb();
    Jc(this);
  };
  Kc.prototype.execute = function (a) {
    return this.h.m(a);
  };
  var Jc = function (a) {
    nb(a.h, "map");
    var b = function (c, d) {
      mb(a.h, c, d);
    };
    b("and", Bc);
    b("contains", Gc);
    b("equals", Cc);
    b("or", Dc);
    b("startsWith", Hc);
    b("variable", Ic);
  };
  var Lc = function () {
    this.map = new Map();
  };
  Lc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Lc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Mc = function () {
    this.keys = [];
    this.values = [];
  };
  Mc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Mc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  var Nc = function (a) {
    if (a instanceof Nc) return a;
    this.Ua = a;
  };
  Nc.prototype.toString = function () {
    return String(this.Ua);
  };
  var Pc = function (a) {
    ta.call(this);
    this.h = a;
    this.set("then", Oc(this));
    this.set("catch", Oc(this, !0));
    this.set("finally", Oc(this, !1, !0));
  };
  oa(Pc, jb);
  var Oc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new fb("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof fb || (d = void 0);
      e instanceof fb || (e = void 0);
      var f = Ba(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.h(f), a.h) : m.h(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new Pc(h);
    });
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Qc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Rc = function (a) {
      if (null == a) return String(a);
      var b = Qc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Sc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Tc = function (a) {
      if (!a || "object" != Rc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Sc(a, "constructor") &&
          !Sc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Sc(a, b);
    },
    Uc = function (a, b) {
      var c = b || ("array" == Rc(a) ? [] : {}),
        d;
      for (d in a)
        if (Sc(a, d)) {
          var e = a[d];
          "array" == Rc(e)
            ? ("array" != Rc(c[d]) && (c[d] = []), (c[d] = Uc(e, c[d])))
            : Tc(e)
            ? (Tc(c[d]) || (c[d] = {}), (c[d] = Uc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Wc = function (a, b, c) {
      var d = Map ? new Lc() : new Mc(),
        e = function (g, h) {
          for (var m = ua(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof wa) {
            var m = [];
            d.set(g, m);
            for (var n = g.Rb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof Pc) return g.h;
          if (g instanceof jb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof fb) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = Vc(u[v], b, c);
              var w = new za(b ? b.T : new ya());
              b && (w.h = b.h);
              return f(g.h.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof Nc && t) return g.Ua;
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    Vc = function (a, b, c) {
      var d = Map ? new Lc() : new Mc(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Ha(g) || Na(g)) {
            var m = new wa([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (Tc(g)) {
            var p = new jb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new fb("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), A = 0;
                A < y.length;
                A++
              )
                y[A] = Wc(C(this, y[A]), b, c);
              return f((0, this.h.N)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new Nc(g);
        };
      return f(a);
    };
  var Xc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    Yc = function (a) {
      if (void 0 === a || Ha(a) || Tc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var Zc = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof wa)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new wa(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new wa(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.h(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new wa(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = Xc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : xa(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new wa(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Xc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.h(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : xa(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var ad = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    bd = new ra("break"),
    cd = new ra("continue"),
    dd = function (a, b) {
      return C(this, a) + C(this, b);
    },
    ed = function (a, b) {
      return C(this, a) && C(this, b);
    },
    fd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      if (!(c instanceof wa))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = Wc(c.get(0));
            try {
              return a.toString(e);
            } catch (r) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (ad.hasOwnProperty(b)) {
          var f = 2;
          f = 1;
          var g = Wc(c, void 0, f);
          return Vc(a[b].apply(a, g), this.h);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof wa) {
        if (a.has(b)) {
          var h = a.get(b);
          if (h instanceof fb) {
            var m = Xc(c);
            m.unshift(this.h);
            return h.h.apply(h, m);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= Zc.supportedMethods.indexOf(b)) {
          var n = Xc(c);
          n.unshift(this.h);
          return Zc[b].apply(a, n);
        }
      }
      if (a instanceof fb || a instanceof jb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof fb) {
            var q = Xc(c);
            q.unshift(this.h);
            return p.h.apply(p, q);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof fb ? a.T : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, Xc(c));
      }
      if (a instanceof Nc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    gd = function (a, b) {
      a = C(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = C(this, b);
      c.set(a, d);
      return d;
    },
    hd = function (a) {
      var b = Ba(this.h),
        c = ib(b, Array.prototype.slice.apply(arguments));
      if (c instanceof ra) return c;
    },
    id = function () {
      return bd;
    },
    jd = function (a) {
      for (var b = C(this, a), c = 0; c < b.length; c++) {
        var d = C(this, b[c]);
        if (d instanceof ra) return d;
      }
    },
    kd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = C(this, arguments[c + 1]);
          Aa(b, d, e, !0);
        }
      }
    },
    ld = function () {
      return cd;
    },
    md = function (a, b, c) {
      var d = new wa();
      b = C(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, C(this, f));
    },
    nd = function (a, b) {
      return C(this, a) / C(this, b);
    },
    od = function (a, b) {
      a = C(this, a);
      b = C(this, b);
      var c = a instanceof Nc,
        d = b instanceof Nc;
      return c || d ? (c && d ? a.Ua == b.Ua : !1) : a == b;
    },
    pd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = C(this, arguments[c]);
      return b;
    };
  function qd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = ib(f, d);
      if (g instanceof ra) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function rd(a, b, c) {
    if ("string" === typeof b)
      return qd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof jb || b instanceof wa || b instanceof fb) {
      var d = b.Rb(),
        e = d.length();
      return qd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var sd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return rd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    td = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return rd(
        function (e) {
          var f = Ba(d);
          Aa(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    ud = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return rd(
        function (e) {
          var f = Ba(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    wd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return vd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    xd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return vd(
        function (e) {
          var f = Ba(d);
          Aa(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    yd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return vd(
        function (e) {
          var f = Ba(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function vd(a, b, c) {
    if ("string" === typeof b)
      return qd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof wa)
      return qd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    throw new TypeError("The value is not iterable.");
  }
  var zd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = C(this, a);
      if (!(f instanceof wa))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = C(this, d);
      var h = Ba(g);
      for (e(g, h); hb(h, b); ) {
        var m = ib(h, d);
        if (m instanceof ra) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = Ba(g);
        e(h, n);
        hb(n, c);
        h = n;
      }
    },
    Ad = function (a) {
      a = C(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Bd = function (a, b) {
      var c;
      a = C(this, a);
      b = C(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof jb || a instanceof wa || a instanceof fb) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : sa(b) && (c = a[b]);
      else if (a instanceof Nc) return;
      return c;
    },
    Cd = function (a, b) {
      return C(this, a) > C(this, b);
    },
    Dd = function (a, b) {
      return C(this, a) >= C(this, b);
    },
    Ed = function (a, b) {
      a = C(this, a);
      b = C(this, b);
      a instanceof Nc && (a = a.Ua);
      b instanceof Nc && (b = b.Ua);
      return a === b;
    },
    Fd = function (a, b) {
      return !Ed.call(this, a, b);
    },
    Gd = function (a, b, c) {
      var d = [];
      C(this, a) ? (d = C(this, b)) : c && (d = C(this, c));
      var e = ib(this.h, d);
      if (e instanceof ra) return e;
    },
    Hd = function (a, b) {
      return C(this, a) < C(this, b);
    },
    Id = function (a, b) {
      return C(this, a) <= C(this, b);
    },
    Jd = function (a, b) {
      return C(this, a) % C(this, b);
    },
    Kd = function (a, b) {
      return C(this, a) * C(this, b);
    },
    Ld = function (a) {
      return -C(this, a);
    },
    Md = function (a) {
      return !C(this, a);
    },
    Nd = function (a, b) {
      return !od.call(this, a, b);
    },
    Od = function () {
      return null;
    },
    Pd = function (a, b) {
      return C(this, a) || C(this, b);
    },
    Qd = function (a, b) {
      var c = C(this, a);
      C(this, b);
      return c;
    },
    Rd = function (a) {
      return C(this, a);
    },
    Sd = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    Td = function (a) {
      return new ra("return", C(this, a));
    },
    Ud = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof fb || a instanceof wa || a instanceof jb) && a.set(b, c);
      return c;
    },
    Vd = function (a, b) {
      return C(this, a) - C(this, b);
    },
    Wd = function (a, b, c) {
      a = C(this, a);
      var d = C(this, b),
        e = C(this, c);
      if (!Ha(d) || !Ha(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === C(this, d[h]))
          if (((f = C(this, e[h])), f instanceof ra)) {
            var m = f.h;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = C(this, e[e.length - 1])),
        f instanceof ra && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    Xd = function (a, b, c) {
      return C(this, a) ? C(this, b) : C(this, c);
    },
    Yd = function (a) {
      a = C(this, a);
      return a instanceof fb ? "function" : typeof a;
    },
    Zd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    $d = function (a, b, c, d) {
      var e = C(this, d);
      if (C(this, c)) {
        var f = ib(this.h, e);
        if (f instanceof ra) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; C(this, a); ) {
        var g = ib(this.h, e);
        if (g instanceof ra) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        C(this, b);
      }
    },
    ce = function (a) {
      return ~Number(C(this, a));
    },
    de = function (a, b) {
      return Number(C(this, a)) << Number(C(this, b));
    },
    ee = function (a, b) {
      return Number(C(this, a)) >> Number(C(this, b));
    },
    fe = function (a, b) {
      return Number(C(this, a)) >>> Number(C(this, b));
    },
    ge = function (a, b) {
      return Number(C(this, a)) & Number(C(this, b));
    },
    he = function (a, b) {
      return Number(C(this, a)) ^ Number(C(this, b));
    },
    ie = function (a, b) {
      return Number(C(this, a)) | Number(C(this, b));
    };
  var ke = function () {
    this.h = new lb();
    je(this);
  };
  ke.prototype.execute = function (a) {
    return le(this.h.m(a));
  };
  var me = function (a, b, c) {
      return le(a.h.C(b, c));
    },
    je = function (a) {
      var b = function (d, e) {
        nb(a.h, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        mb(a.h, String(d), e);
      };
      c(0, dd);
      c(1, ed);
      c(2, fd);
      c(3, gd);
      c(53, hd);
      c(4, id);
      c(5, jd);
      c(52, kd);
      c(6, ld);
      c(9, jd);
      c(50, md);
      c(10, nd);
      c(12, od);
      c(13, pd);
      c(47, sd);
      c(54, td);
      c(55, ud);
      c(63, zd);
      c(64, wd);
      c(65, xd);
      c(66, yd);
      c(15, Ad);
      c(16, Bd);
      c(17, Bd);
      c(18, Cd);
      c(19, Dd);
      c(20, Ed);
      c(21, Fd);
      c(22, Gd);
      c(23, Hd);
      c(24, Id);
      c(25, Jd);
      c(26, Kd);
      c(27, Ld);
      c(28, Md);
      c(29, Nd);
      c(45, Od);
      c(30, Pd);
      c(32, Qd);
      c(33, Qd);
      c(34, Rd);
      c(35, Rd);
      c(46, Sd);
      c(36, Td);
      c(43, Ud);
      c(37, Vd);
      c(38, Wd);
      c(39, Xd);
      c(40, Yd);
      c(41, Zd);
      c(42, $d);
      c(58, ce);
      c(57, de);
      c(60, ee);
      c(61, fe);
      c(56, ge);
      c(62, he);
      c(59, ie);
    };
  function le(a) {
    if (
      a instanceof ra ||
      a instanceof fb ||
      a instanceof wa ||
      a instanceof jb ||
      a instanceof Nc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var ne = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Cj: a("consent"),
      Nh: a("convert_case_to"),
      Oh: a("convert_false_to"),
      Ph: a("convert_null_to"),
      Qh: a("convert_true_to"),
      Rh: a("convert_undefined_to"),
      hm: a("debug_mode_metadata"),
      Qb: a("function"),
      Ig: a("instance_name"),
      ik: a("live_only"),
      jk: a("malware_disabled"),
      kk: a("metadata"),
      nk: a("original_activity_id"),
      km: a("original_vendor_template_id"),
      jm: a("once_on_load"),
      mk: a("once_per_event"),
      Ji: a("once_per_load"),
      mm: a("priority_override"),
      nm: a("respected_consent_types"),
      Ni: a("setup_tags"),
      ce: a("tag_id"),
      Si: a("teardown_tags"),
    };
  })();
  var Je;
  var Ke = [],
    Le = [],
    Me = [],
    Ne = [],
    Oe = [],
    Pe = {},
    Qe,
    Re,
    Te = function () {
      var a = Se;
      Re = Re || a;
    },
    Ue,
    Ve = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    We = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Pe[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.Xi && d.Xi(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.Wi && (f.vtp_gtmCachedValues = d.Wi);
      if (b) {
        if (null == b.name) {
          var h;
          a: {
            var m = b.index;
            if (null == m) h = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = Ke[m];
                  break;
                case 1:
                  n = Ne[m];
                  break;
                default:
                  h = "";
                  break a;
              }
              var p = n && n[ne.Ig];
              h = p ? String(p) : "";
            }
          }
          b.name = h;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : Je(c, f, b);
    },
    Ye = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Xe(a[e], b, c));
      return d;
    },
    Xe = function (a, b, c) {
      if (Ha(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Xe(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = Ke[f];
            if (!g || b.fh(g)) return;
            c[f] = !0;
            var h = String(g[ne.Ig]);
            try {
              var m = Ye(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = We(m, { event: b, index: f, type: 2, name: h });
              Ue && (d = Ue.zk(d, m));
            } catch (y) {
              b.ij && b.ij(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Xe(a[n], b, c)] = Xe(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Xe(a[q], b, c);
              Re && (p = p || r === Re.kf);
              d.push(r);
            }
            return Re && p ? Re.Ak(d) : d.join("");
          case "escape":
            d = Xe(a[1], b, c);
            if (Re && Ha(a[1]) && "macro" === a[1][0] && Re.bl(a))
              return Re.El(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) oe[a[t]] && (d = oe[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Ne[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { cj: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = Ze(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Ze = function (a, b, c) {
      try {
        return Qe(Ye(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var $e = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  oa($e, Error);
  function af(a, b) {
    if (Ha(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) af(a[c], b[c]);
    }
  }
  var bf = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Al = a;
    this.m = b;
    this.h = [];
  };
  oa(bf, Error);
  var df = function () {
    return function (a, b) {
      a instanceof bf || (a = new bf(a, cf));
      b && a.h.push(b);
      throw a;
    };
  };
  function cf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var gf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = ef(a), f = 0; f < Le.length; f++) {
        var g = Le[f],
          h = ff(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < Ne.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    ff = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    ef = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Ze(Me[c], a));
        return b[c];
      };
    };
  var hf = {
    zk: function (a, b) {
      b[ne.Nh] &&
        "string" === typeof a &&
        (a = 1 == b[ne.Nh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(ne.Ph) && null === a && (a = b[ne.Ph]);
      b.hasOwnProperty(ne.Rh) && void 0 === a && (a = b[ne.Rh]);
      b.hasOwnProperty(ne.Qh) && !0 === a && (a = b[ne.Qh]);
      b.hasOwnProperty(ne.Oh) && !1 === a && (a = b[ne.Oh]);
      return a;
    },
  };
  var jf = function () {
    this.h = {};
  };
  function kf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new $e(c, d, g);
      }
  }
  function lf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          kf(e, b, d, g);
          kf(f, b, d, g);
        }
      }
    };
  }
  var of = function () {
      var a = data.permissions || {},
        b = K.D,
        c = this;
      this.m = new jf();
      this.h = {};
      var d = {},
        e = lf(this.m, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      l(a, function (f, g) {
        var h = {};
        l(g, function (m, n) {
          var p = mf(m, n);
          h[m] = p.assert;
          d[m] || (d[m] = p.X);
        });
        c.h[f] = function (m, n) {
          var p = h[m];
          if (!p)
            throw nf(
              m,
              {},
              "The requested permission " + m + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    qf = function (a) {
      return pf.h[a] || function () {};
    };
  function mf(a, b) {
    var c = Ve(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = nf;
    try {
      return We(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new $e(e, {}, "Permission " + e + " is unknown.");
        },
        X: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function nf(a, b, c) {
    return new $e(a, b, c);
  }
  var rf = !1;
  var sf = {};
  sf.gm = Pa("");
  sf.Ck = Pa("");
  var tf = rf,
    uf = sf.Ck,
    vf = sf.gm;
  var If = /^[a-z$_][\w$]*$/i,
    Jf = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
    Kf = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!Jf.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = -1 !== f && f === e.length - 2,
          h = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (0 === d.length) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!If.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || h.length > d.length || (!g && d.length != e.length)
            ? 0
            : g
            ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length))
            : d === h
        )
          return !0;
      }
      return !1;
    };
  var Lf = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Mf(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Nf = new La();
  function Of(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Nf.get(e);
      f || ((f = new RegExp(b, d)), Nf.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Pf(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function Qf(a, b) {
    return String(a) === String(b);
  }
  function Rf(a, b) {
    return Number(a) >= Number(b);
  }
  function Sf(a, b) {
    return Number(a) <= Number(b);
  }
  function Tf(a, b) {
    return Number(a) > Number(b);
  }
  function Uf(a, b) {
    return Number(a) < Number(b);
  }
  function Vf(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var bg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function cg(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var dg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    eg = { Fn: "function", DustMap: "Object", List: "Array" },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = dg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof fb
            ? (n = "Fn")
            : m instanceof wa
            ? (n = "List")
            : m instanceof jb
            ? (n = "DustMap")
            : m instanceof Nc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (eg[n] || n) +
                ", which does not match required type " +
                (eg[h] || h) +
                "."
            );
        }
      }
    };
  function fg(a) {
    return "" + a;
  }
  function gg(a, b) {
    var c = [];
    return c;
  }
  var hg = function (a, b) {
      var c = new fb(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = C(this, d[e]);
        return b.apply(this, d);
      });
      c.nc();
      return c;
    },
    kg = function (a, b) {
      var c = new jb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Fa(e)
            ? c.set(d, hg(a + "_" + d, e))
            : Tc(e)
            ? c.set(d, kg(a + "_" + d, e))
            : (Ga(e) || k(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.nc();
      return c;
    };
  var lg = function (a, b) {
    L(F(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new jb();
    return (d = kg("AssertApiSubject", c));
  };
  var mg = function (a, b) {
    L(F(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof Pc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new jb();
    return (d = kg("AssertThatSubject", c));
  };
  function ng(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(Wc(arguments[d], c));
      return Vc(a.apply(null, b));
    };
  }
  var pg = function () {
    for (var a = Math, b = og, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = ng(a[e].bind(a)));
    }
    return c;
  };
  function qg(a, b) {
    var c = null;
    return c;
  }
  qg.M = "internal.createRegExp";
  var rg = function (a) {
    var b;
    return b;
  };
  var sg = function (a) {
    var b;
    return b;
  };
  var tg = function (a) {
    return encodeURI(a);
  };
  var ug = function (a) {
    return encodeURIComponent(a);
  };
  function vg(a, b) {
    var c = !1;
    return c;
  }
  vg.M = "internal.evaluateBooleanExpression";
  var Ag = function (a) {
    L(F(this), ["message:?string"], arguments);
  };
  var Bg = function (a, b) {
    L(F(this), ["min:!number", "max:!number"], arguments);
    return Ka(a, b);
  };
  var M = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    d.xk.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Cg = function () {
    M(this, "read_container_data");
    var a = new jb();
    a.set("containerId", "GTM-N2LKN6X");
    a.set("version", "5");
    a.set("environmentName", "");
    a.set("debugMode", tf);
    a.set("previewMode", vf);
    a.set("environmentMode", uf);
    a.nc();
    return a;
  };
  var Dg = function () {
    return new Date().getTime();
  };
  var Eg = function (a) {
    if (null === a) return "null";
    if (a instanceof wa) return "array";
    if (a instanceof fb) return "function";
    if (a instanceof Nc) {
      a = a.Ua;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Fg = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (tf || vf) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return Vc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(Wc(c));
      }),
    };
  };
  var Gg = function (a) {
    return Oa(Wc(a, this.h));
  };
  var Hg = function (a) {
    return Number(Wc(a, this.h));
  };
  var Ig = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Jg = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var og = "floor ceil round max min abs pow sqrt".split(" ");
  var Kg = function () {
      var a = {};
      return {
        Mk: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Vl: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Lg = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return fb.prototype.h.apply(a, c);
      };
    },
    Mg = function (a, b) {
      L(F(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Ng = {};
  var Og = function (a) {
    var b = new jb();
    if (a instanceof wa)
      for (var c = a.Rb(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof fb)
      for (var f = ua(a, 1), g = 0; g < f.length; g++) {
        var h = f[g];
        b.set(h, a.get(h));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  Ng.keys = function (a) {
    L(F(this), ["input:!*"], arguments);
    if (a instanceof wa || a instanceof fb || "string" === typeof a) a = Og(a);
    if (a instanceof jb) return a.Rb();
    return new wa();
  };
  Ng.values = function (a) {
    L(F(this), ["input:!*"], arguments);
    if (a instanceof wa || a instanceof fb || "string" === typeof a) a = Og(a);
    if (a instanceof jb) return new wa(ua(a, 2));
    return new wa();
  };
  Ng.entries = function (a) {
    L(F(this), ["input:!*"], arguments);
    if (a instanceof wa || a instanceof fb || "string" === typeof a) a = Og(a);
    if (a instanceof jb) {
      for (var b = ua(a, 3), c = new wa(), d = 0; d < b.length; d++) {
        var e = new wa(b[d]);
        c.push(e);
      }
      return c;
    }
    return new wa();
  };
  Ng.freeze = function (a) {
    (a instanceof jb || a instanceof wa || a instanceof fb) && a.nc();
    return a;
  };
  Ng.delete = function (a, b) {
    if (a instanceof jb && !a.Gf()) return va(a, b), !0;
    return !1;
  };
  var Pg = function () {
    this.h = {};
    this.m = {};
  };
  Pg.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  Pg.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.m.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Fa(b) ? hg(a, b) : kg(a, b);
  };
  var Rg = function (a, b, c) {
    if (a.m.hasOwnProperty(b))
      throw (
        "Attempting to add a private function which already exists: " + b + "."
      );
    if (a.h.hasOwnProperty(b))
      throw (
        "Attempting to add a private function with an existing API name: " +
        b +
        "."
      );
    a.m[b] = Fa(c) ? hg(b, c) : kg(b, c);
  };
  function Qg(a, b) {
    var c = void 0;
    return c;
  }
  function Sg() {
    var a = {};
    return a;
  }
  function Tg(a, b) {
    var c = !1;
    return c;
  }
  Tg.M = "internal.testRegExp";
  var Vg = function (a) {
      return Ug ? H.querySelectorAll(a) : null;
    },
    Wg = function (a, b) {
      if (!Ug) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Xg = !1;
  if (H.querySelectorAll)
    try {
      var Yg = H.querySelectorAll(":root");
      Yg && 1 == Yg.length && Yg[0] == H.documentElement && (Xg = !0);
    } catch (a) {}
  var Ug = Xg;
  var O = function (a) {
    vb("GTM", a);
  };
  var P = {
      g: {
        Ih: "ad_data_sharing",
        I: "ad_storage",
        Jh: "ad_user_data",
        U: "analytics_storage",
        Ja: "region",
        md: "consent_updated",
        Me: "wait_for_update",
        Gj: "ads",
        Sf: "all",
        Hj: "play",
        Ij: "search",
        Jj: "youtube",
        Sh: "app_remove",
        Th: "app_store_refund",
        Uh: "app_store_subscription_cancel",
        Vh: "app_store_subscription_convert",
        Wh: "app_store_subscription_renew",
        Uf: "add_payment_info",
        Vf: "add_shipping_info",
        Ac: "add_to_cart",
        Bc: "remove_from_cart",
        Wf: "view_cart",
        Vb: "begin_checkout",
        Cc: "select_item",
        Hb: "view_item_list",
        Wb: "select_promotion",
        Ib: "view_promotion",
        Ka: "purchase",
        Dc: "refund",
        La: "view_item",
        Xf: "add_to_wishlist",
        Kj: "exception",
        Xh: "first_open",
        Yh: "first_visit",
        ra: "gtag.config",
        Fa: "gtag.get",
        Zh: "in_app_purchase",
        Xb: "page_view",
        Lj: "screen_view",
        ai: "session_start",
        Mj: "timing_complete",
        Nj: "track_social",
        od: "user_engagement",
        qb: "gclid",
        la: "ads_data_redaction",
        aa: "allow_ad_personalization_signals",
        pd: "allow_custom_scripts",
        Oe: "allow_display_features",
        rd: "allow_enhanced_conversions",
        rb: "allow_google_signals",
        Ba: "allow_interest_groups",
        Oj: "app_id",
        Pj: "app_installer_id",
        Qj: "app_name",
        Rj: "app_version",
        Yb: "auid",
        bi: "auto_detection_enabled",
        Jb: "aw_remarketing",
        Pe: "aw_remarketing_only",
        sd: "discount",
        ud: "aw_feed_country",
        vd: "aw_feed_language",
        ca: "items",
        wd: "aw_merchant_id",
        Yf: "aw_basket_type",
        Ec: "campaign_content",
        Fc: "campaign_id",
        Gc: "campaign_medium",
        Hc: "campaign_name",
        Ic: "campaign",
        Jc: "campaign_source",
        Kc: "campaign_term",
        Ya: "client_id",
        di: "content_group",
        ei: "content_type",
        Ga: "conversion_cookie_prefix",
        Lc: "conversion_id",
        wa: "conversion_linker",
        Kb: "conversion_api",
        Ma: "cookie_domain",
        Ca: "cookie_expires",
        Na: "cookie_flags",
        Zb: "cookie_name",
        Mc: "cookie_path",
        Ha: "cookie_prefix",
        ab: "cookie_update",
        sb: "country",
        sa: "currency",
        xd: "customer_lifetime_value",
        ac: "custom_map",
        fi: "gcldc",
        gi: "debug_mode",
        ba: "developer_id",
        hi: "disable_merchant_reported_purchases",
        bc: "dc_custom_params",
        Zf: "dc_natural_search",
        Qe: "dynamic_event_settings",
        ag: "affiliation",
        Re: "checkout_option",
        Se: "checkout_step",
        cg: "coupon",
        yd: "item_list_name",
        Te: "list_name",
        ii: "promotions",
        Nc: "shipping",
        Ue: "tax",
        zd: "engagement_time_msec",
        Oc: "enhanced_client_id",
        Pc: "enhanced_conversions",
        dg: "enhanced_conversions_automatic_settings",
        Ad: "estimated_delivery_date",
        Ve: "euid_logged_in_state",
        fc: "event_callback",
        Sj: "event_category",
        tb: "event_developer_id_string",
        Tj: "event_label",
        eg: "event",
        Bd: "event_settings",
        Cd: "event_timeout",
        Uj: "description",
        Vj: "fatal",
        ji: "experiments",
        We: "firebase_id",
        Dd: "first_party_collection",
        Ed: "_x_20",
        Lb: "_x_19",
        fg: "fledge",
        gg: "flight_error_code",
        hg: "flight_error_message",
        ki: "fl_activity_category",
        li: "fl_activity_group",
        ig: "fl_advertiser_id",
        mi: "fl_ar_dedupe",
        ni: "fl_random_number",
        oi: "tran",
        ri: "u",
        Fd: "gac_gclid",
        hc: "gac_wbraid",
        jg: "gac_wbraid_multiple_conversions",
        kg: "ga_restrict_domain",
        Xe: "ga_temp_client_id",
        Gd: "gdpr_applies",
        lg: "geo_granularity",
        cb: "value_callback",
        Oa: "value_key",
        Wj: "google_ono",
        eb: "google_signals",
        mg: "google_tld",
        Hd: "groups",
        ng: "gsa_experiment_id",
        og: "iframe_state",
        Id: "ignore_referrer",
        Ye: "internal_traffic_results",
        ic: "is_legacy_converted",
        fb: "is_legacy_loaded",
        Jd: "is_passthrough",
        xa: "language",
        Ze: "legacy_developer_id_string",
        ya: "linker",
        jc: "accept_incoming",
        vb: "decorate_forms",
        V: "domains",
        Mb: "url_position",
        pg: "method",
        Xj: "name",
        Qc: "new_customer",
        qg: "non_interaction",
        si: "optimize_id",
        af: "page_hostname",
        Nb: "page_path",
        Da: "page_referrer",
        wb: "page_title",
        rg: "passengers",
        sg: "phone_conversion_callback",
        ui: "phone_conversion_country_code",
        ug: "phone_conversion_css_class",
        vi: "phone_conversion_ids",
        vg: "phone_conversion_number",
        wg: "phone_conversion_options",
        kc: "quantity",
        Rc: "redact_device_info",
        bf: "redact_enhanced_user_id",
        wi: "redact_ga_client_id",
        xi: "redact_user_id",
        Kd: "referral_exclusion_definition",
        Ob: "restricted_data_processing",
        yi: "retoken",
        Yj: "sample_rate",
        cf: "screen_name",
        xb: "screen_resolution",
        zi: "search_term",
        Pa: "send_page_view",
        Pb: "send_to",
        Sc: "session_duration",
        Ld: "session_engaged",
        df: "session_engaged_time",
        hb: "session_id",
        Md: "session_number",
        Tc: "delivery_postal_code",
        xg: "temporary_client_id",
        ef: "topmost_url",
        Ai: "tracking_id",
        ff: "traffic_type",
        ma: "transaction_id",
        Qa: "transport_url",
        yg: "trip_type",
        Uc: "update",
        ib: "url_passthrough",
        Od: "_user_agent_architecture",
        Pd: "_user_agent_bitness",
        Qd: "_user_agent_full_version_list",
        Rd: "_user_agent_mobile",
        Sd: "_user_agent_model",
        Td: "_user_agent_platform",
        Ud: "_user_agent_platform_version",
        Vd: "_user_agent_wow64",
        na: "user_data",
        zg: "user_data_auto_latency",
        Ag: "user_data_auto_meta",
        Bg: "user_data_auto_multi",
        Cg: "user_data_auto_selectors",
        Dg: "user_data_auto_status",
        hf: "user_data_mode",
        jf: "user_data_settings",
        za: "user_id",
        Ra: "user_properties",
        Eg: "us_privacy_string",
        fa: "value",
        mc: "wbraid",
        Fg: "wbraid_multiple_conversions",
        Gi: "_host_name",
        Hi: "_in_page_command",
        Ii: "_is_passthrough_cid",
        nf: "non_personalized_ads",
        be: "_sst_parameters",
        Za: "conversion_label",
        ja: "page_location",
        ub: "global_developer_id_string",
        Nd: "tc_privacy_string",
      },
    },
    vh = {},
    wh = Object.freeze(
      ((vh[P.g.aa] = 1),
      (vh[P.g.Oe] = 1),
      (vh[P.g.rd] = 1),
      (vh[P.g.rb] = 1),
      (vh[P.g.ca] = 1),
      (vh[P.g.Ma] = 1),
      (vh[P.g.Ca] = 1),
      (vh[P.g.Na] = 1),
      (vh[P.g.Zb] = 1),
      (vh[P.g.Mc] = 1),
      (vh[P.g.Ha] = 1),
      (vh[P.g.ab] = 1),
      (vh[P.g.ac] = 1),
      (vh[P.g.ba] = 1),
      (vh[P.g.Qe] = 1),
      (vh[P.g.fc] = 1),
      (vh[P.g.Bd] = 1),
      (vh[P.g.Cd] = 1),
      (vh[P.g.Dd] = 1),
      (vh[P.g.kg] = 1),
      (vh[P.g.eb] = 1),
      (vh[P.g.mg] = 1),
      (vh[P.g.Hd] = 1),
      (vh[P.g.Ye] = 1),
      (vh[P.g.ic] = 1),
      (vh[P.g.fb] = 1),
      (vh[P.g.ya] = 1),
      (vh[P.g.bf] = 1),
      (vh[P.g.Kd] = 1),
      (vh[P.g.Ob] = 1),
      (vh[P.g.Pa] = 1),
      (vh[P.g.Pb] = 1),
      (vh[P.g.Sc] = 1),
      (vh[P.g.df] = 1),
      (vh[P.g.Tc] = 1),
      (vh[P.g.Qa] = 1),
      (vh[P.g.Uc] = 1),
      (vh[P.g.jf] = 1),
      (vh[P.g.Ra] = 1),
      (vh[P.g.be] = 1),
      vh)
    );
  Object.freeze([
    P.g.ja,
    P.g.Da,
    P.g.wb,
    P.g.xa,
    P.g.cf,
    P.g.za,
    P.g.We,
    P.g.di,
  ]);
  var xh = {},
    yh = Object.freeze(
      ((xh[P.g.Sh] = 1),
      (xh[P.g.Th] = 1),
      (xh[P.g.Uh] = 1),
      (xh[P.g.Vh] = 1),
      (xh[P.g.Wh] = 1),
      (xh[P.g.Xh] = 1),
      (xh[P.g.Yh] = 1),
      (xh[P.g.Zh] = 1),
      (xh[P.g.ai] = 1),
      (xh[P.g.od] = 1),
      xh)
    ),
    zh = {},
    Ah = Object.freeze(
      ((zh[P.g.Uf] = 1),
      (zh[P.g.Vf] = 1),
      (zh[P.g.Ac] = 1),
      (zh[P.g.Bc] = 1),
      (zh[P.g.Wf] = 1),
      (zh[P.g.Vb] = 1),
      (zh[P.g.Cc] = 1),
      (zh[P.g.Hb] = 1),
      (zh[P.g.Wb] = 1),
      (zh[P.g.Ib] = 1),
      (zh[P.g.Ka] = 1),
      (zh[P.g.Dc] = 1),
      (zh[P.g.La] = 1),
      (zh[P.g.Xf] = 1),
      zh)
    ),
    Bh = Object.freeze([P.g.aa, P.g.rb, P.g.ab]),
    Ch = Object.freeze([].concat(Bh)),
    Dh = Object.freeze([P.g.Ca, P.g.Cd, P.g.Sc, P.g.df, P.g.zd]),
    Eh = Object.freeze([].concat(Dh)),
    Fh = {},
    Gh = ((Fh[P.g.I] = "1"), (Fh[P.g.U] = "2"), Fh),
    Hh = {},
    Ih = Object.freeze(
      ((Hh[P.g.aa] = 1),
      (Hh[P.g.rd] = 1),
      (Hh[P.g.Ba] = 1),
      (Hh[P.g.Jb] = 1),
      (Hh[P.g.Pe] = 1),
      (Hh[P.g.sd] = 1),
      (Hh[P.g.ud] = 1),
      (Hh[P.g.vd] = 1),
      (Hh[P.g.ca] = 1),
      (Hh[P.g.wd] = 1),
      (Hh[P.g.Ga] = 1),
      (Hh[P.g.wa] = 1),
      (Hh[P.g.Ma] = 1),
      (Hh[P.g.Ca] = 1),
      (Hh[P.g.Na] = 1),
      (Hh[P.g.Ha] = 1),
      (Hh[P.g.sa] = 1),
      (Hh[P.g.xd] = 1),
      (Hh[P.g.ba] = 1),
      (Hh[P.g.hi] = 1),
      (Hh[P.g.Pc] = 1),
      (Hh[P.g.Ad] = 1),
      (Hh[P.g.We] = 1),
      (Hh[P.g.Dd] = 1),
      (Hh[P.g.fb] = 1),
      (Hh[P.g.xa] = 1),
      (Hh[P.g.Qc] = 1),
      (Hh[P.g.ja] = 1),
      (Hh[P.g.Da] = 1),
      (Hh[P.g.sg] = 1),
      (Hh[P.g.ug] = 1),
      (Hh[P.g.vg] = 1),
      (Hh[P.g.wg] = 1),
      (Hh[P.g.Ob] = 1),
      (Hh[P.g.Pa] = 1),
      (Hh[P.g.Pb] = 1),
      (Hh[P.g.Tc] = 1),
      (Hh[P.g.ma] = 1),
      (Hh[P.g.Qa] = 1),
      (Hh[P.g.Uc] = 1),
      (Hh[P.g.ib] = 1),
      (Hh[P.g.na] = 1),
      (Hh[P.g.za] = 1),
      (Hh[P.g.fa] = 1),
      Hh)
    );
  Object.freeze(P.g);
  var Jh = {},
    Kh = (z.google_tag_manager = z.google_tag_manager || {}),
    Lh = Math.random();
  Jh.Kg = "3530";
  Jh.ae = Number("0") || 0;
  Jh.ka = "dataLayer";
  Jh.Ej =
    "ChAI8JjdogYQ++KMuKjNy9FvEiQAJIHBp61CxIILYjd8zJ+XIs72kIbQp7s0Z3o4/PCH3lab9WYaAnHV";
  var Mh = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Nh = { __paused: 1, __tg: 1 },
    Oh;
  for (Oh in Mh) Mh.hasOwnProperty(Oh) && (Nh[Oh] = 1);
  var Ph = Pa(""),
    Qh,
    Rh = !1;
  Rh = !0;
  Qh = Rh;
  var Sh,
    Th = !1;
  Sh = Th;
  var Uh,
    Vh = !1;
  Uh = Vh;
  var Wh,
    Xh = !1;
  Wh = Xh;
  Jh.Ne = "www.googletagmanager.com";
  var Yh = "" + Jh.Ne + (Qh ? "/gtag/js" : "/gtm.js"),
    Zh = null,
    $h = null,
    ai = {},
    bi = {},
    li = {},
    mi = function () {
      var a = Kh.sequence || 1;
      Kh.sequence = a + 1;
      return a;
    };
  Jh.Dj = "";
  var ni = "";
  Jh.tf = ni;
  var oi = new La(),
    pi = {},
    qi = {},
    ti = {
      name: Jh.ka,
      set: function (a, b) {
        Uc(ab(a, b), pi);
        ri();
      },
      get: function (a) {
        return si(a, 2);
      },
      reset: function () {
        oi = new La();
        pi = {};
        ri();
      },
    },
    si = function (a, b) {
      return 2 != b ? oi.get(a) : ui(a);
    },
    ui = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = pi, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    vi = function (a, b) {
      qi.hasOwnProperty(a) || (oi.set(a, b), Uc(ab(a, b), pi), ri());
    },
    wi = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = si(c, 1);
        if (Ha(d) || Tc(d)) d = Uc(d);
        qi[c] = d;
      }
    },
    ri = function (a) {
      l(qi, function (b, c) {
        oi.set(b, c);
        Uc(ab(b), pi);
        Uc(ab(b, c), pi);
        a && delete qi[b];
      });
    },
    xi = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? ui(a) : oi.get(a);
      "array" === Rc(d) || "object" === Rc(d) ? (c = Uc(d)) : (c = d);
      return c;
    };
  var yi;
  try {
    yi = JSON.parse(
      tb(
        "eyIwIjoiVVMiLCIxIjoiVVMtTlkiLCIyIjpmYWxzZSwiMyI6IiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"
      )
    );
  } catch (a) {
    O(123), vb("HEALTH", 2), (yi = {});
  }
  var zi = function () {
      return yi["0"] || "";
    },
    Ai = function () {
      return yi["1"] || "";
    },
    Bi = function () {
      var a = !1;
      return a;
    },
    Ci = function () {
      var a = "";
      return a;
    },
    Di = function () {
      var a = !1;
      return a;
    },
    Ei = function () {
      var a = "";
      return a;
    };
  var Fi,
    Gi = !1;
  function Hi() {
    Gi = !0;
    Fi = Fi || {};
  }
  var Ii = function (a) {
    Gi || Hi();
    return Fi[a];
  };
  var Ji = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Ki = function (a) {
      if (H.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var Li = function () {
      var a = H.body,
        b = H.documentElement || (a && a.parentElement),
        c,
        d;
      if (H.compatMode && "BackCompat" !== H.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    Mi = function (a) {
      var b = Li(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var Ti = /:[0-9]+$/,
    Ui = /^\d+\.fls\.doubleclick\.net$/,
    Vi = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var m = h.slice(1).join("=");
          if (!c) return d ? m : decodeURIComponent(m).replace(/\+/g, " ");
          e.push(d ? m : decodeURIComponent(m).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    Yi = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Wi(a.protocol) || Wi(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(Ti, "")
            .toLowerCase());
      return Xi(a, b, c, d, e);
    },
    Xi = function (a, b, c, d, e) {
      var f,
        g = Wi(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Zi(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Ti, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || vb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Vi(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Wi = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Zi = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    $i = function (a) {
      var b = H.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || vb("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Ti, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    aj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = $i(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    bj = function (a) {
      var b = $i(z.location.href),
        c = Yi(b, "host", !1);
      if (c && c.match(Ui)) {
        var d = Yi(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var zj = [],
    Aj = function (a) {
      return void 0 == zj[a] ? !1 : zj[a];
    };
  var Bj = [];
  Bj[7] = !0;
  Bj[9] = !0;
  Bj[27] = !0;
  Bj[11] = !0;
  Bj[13] = !0;
  Bj[15] = !0;
  Bj[16] = !0;
  Bj[25] = !0;
  Bj[34] = !0;
  Bj[36] = !0;
  Bj[38] = !0;
  Bj[82] = !0;
  Bj[43] = !0;
  Bj[52] = !0;
  Bj[57] = !0;
  Bj[59] = !0;
  Bj[61] = !0;
  Bj[67] = !0;
  Bj[68] = !0;
  Bj[69] = !0;
  Bj[72] = !0;
  Bj[75] = !0;
  zj[2] = !0;
  Bj[76] = !0;
  Bj[77] = !0;
  Bj[79] = !0;
  Bj[80] = !0;
  Bj[83] = !0;
  Bj[88] = !0;
  Bj[89] = !0;
  Bj[92] = !0;
  Bj[93] = !0;
  Bj[94] = !0;
  Bj[96] = !0;
  Bj[97] = !0;
  var U = function (a) {
    return !!Bj[a];
  };
  var Cj = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Dj = function (a) {
    Dj[" "](a);
    return a;
  };
  Dj[" "] = function () {};
  var Fj = function () {
    var a = Ej,
      b = "bh";
    if (a.bh && a.hasOwnProperty(b)) return a.bh;
    var c = new a();
    return (a.bh = c);
  };
  var Ej = function () {
    var a = {};
    this.h = function () {
      var b = Cj.h,
        c = Cj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[Cj.h] = !0;
    };
  };
  var Gj = !1,
    Hj = !1,
    Ij = [],
    Jj = {},
    Kj = {},
    Lj = { ad_storage: !1, ad_user_data: !1, ad_data_sharing: !1 };
  function Mj() {
    var a = hc("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        cps: {},
        set: Nj,
        default: Nj,
        update: Oj,
        declare: Pj,
        implicit: Qj,
        addListener: Rj,
        notifyListeners: Sj,
        setCps: Tj,
        active: !1,
        usedDeclare: !1,
        usedDefault: !1,
        usedUpdate: !1,
        usedImplicit: !1,
        usedSetCps: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Uj(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Pj(a, b, c, d, e) {
    var f = Mj();
    f.active = !0;
    f.usedDeclare = !0;
    var g = f.entries,
      h = g[a] || {},
      m = h.declare_region,
      n = c && k(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Uj(n, m, d, e)) {
      var p = {
        region: h.region,
        declare_region: n,
        declare: "granted" === b,
        implicit: h.implicit,
        initial: h.initial,
        default: h.default,
        update: h.update,
        quiet: h.quiet,
      };
      if ("" !== d || !1 !== h.declare) g[a] = p;
    }
  }
  function Qj(a, b) {
    var c = Mj();
    c.active = !0;
    c.usedImplicit = !0;
    var d = c.entries,
      e = (d[a] = d[a] || {});
    !1 !== e.implicit && (e.implicit = "granted" === b);
  }
  function Nj(a, b, c, d, e, f) {
    var g = Mj();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    vb("TAGGING", 19);
    if (void 0 == b) vb("TAGGING", 18);
    else {
      var h = g.entries,
        m = h[a] || {},
        n = m.region,
        p = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      var q = "granted" === b;
      if (Uj(p, n, d, e)) {
        var r = !!(f && 0 < f && void 0 === m.update),
          t = {
            region: p,
            declare_region: m.declare_region,
            implicit: m.implicit,
            initial: q,
            default: q,
            declare: m.declare,
            update: m.update,
            quiet: r,
          };
        if ("" !== d || !1 !== m.initial) h[a] = t;
        r &&
          z.setTimeout(function () {
            if (h[a] === t && t.quiet) {
              t.quiet = !1;
              var u = [a];
              if (Aj(4))
                for (var v in Jj)
                  Jj.hasOwnProperty(v) && Jj[v] === a && u.push(v);
              for (var w = 0; w < u.length; w++) Vj(u[w]);
              Sj();
              vb("TAGGING", 2);
            }
          }, f);
      }
    }
  }
  function Oj(a, b) {
    var c = Mj();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Wj(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Wj(c, a),
        h = [a];
      if (Aj(4))
        for (var m in Jj) Jj.hasOwnProperty(m) && Jj[m] === a && h.push(m);
      if (f.quiet) {
        f.quiet = !1;
        for (var n = 0; n < h.length; n++) Vj(h[n]);
      } else if (g !== d) for (var p = 0; p < h.length; p++) Vj(h[p]);
    }
  }
  function Xj(a, b, c, d, e, f) {
    var g = a[b] || {},
      h = g.region,
      m = d && k(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Uj(m, h, e, f)) {
      var n = { enabled: "granted" === c, region: m };
      if ("" !== e || !1 !== g.enabled) return (a[b] = n), !0;
    }
    return !1;
  }
  function Tj(a, b, c, d, e) {
    var f = Mj();
    Xj(f.cps, a, b, c, d, e) && (f.usedSetCps = !0);
  }
  function Rj(a, b) {
    Ij.push({ consentTypes: a, Hk: b });
  }
  function Vj(a) {
    for (var b = 0; b < Ij.length; ++b) {
      var c = Ij[b];
      Ha(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.lj = !0);
    }
  }
  function Sj(a, b) {
    for (var c = 0; c < Ij.length; ++c) {
      var d = Ij[c];
      if (d.lj) {
        d.lj = !1;
        try {
          d.Hk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Wj(a, b) {
    var c = a.entries,
      d = c[b] || {},
      e = d.update;
    if (void 0 !== e) return e;
    e = d.initial;
    if (void 0 !== e) return e;
    if (Aj(4) && Jj.hasOwnProperty(b)) {
      var f = c[Jj[b]] || {};
      e = f.update;
      if (void 0 !== e) return e;
      e = f.initial;
      if (void 0 !== e) return e;
    }
    e = d.declare;
    if (void 0 !== e || (Aj(4) && ((e = d.implicit), void 0 !== e))) return e;
    if (Aj(3) && Lj.hasOwnProperty(b)) return Lj[b];
  }
  var Yj = function (a) {
      var b = Mj();
      b.accessedAny = !0;
      return Wj(b, a);
    },
    Zj = function (a) {
      var b = Mj();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    ak = function (a) {
      var b = Mj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    bk = function () {
      if (!Fj().h()) return !1;
      var a = Mj();
      a.accessedAny = !0;
      return a.active;
    },
    ck = function () {
      var a = Mj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    dk = function (a, b) {
      Mj().addListener(a, b);
    },
    ek = function (a, b) {
      Mj().notifyListeners(a, b);
    },
    fk = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!ak(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        dk(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    gk = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === Yj(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = k(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        dk(d, function (f) {
          var g = c();
          0 < g.length && ((f.consentTypes = g), a(f));
        });
    };
  function hk() {}
  function ik() {}
  function jk(a, b) {
    if (!U(104) || b) {
      for (var c = [], d = 0; d < kk.length; d++) {
        var e = a(kk[d]);
        c[d] = !0 === e ? "1" : !1 === e ? "0" : "-";
      }
      return c.join("");
    }
    for (var f = [], g = 0; g < lk.length; g++) {
      var h = a(lk[g]);
      f[g] = !0 === h ? "1" : !1 === h ? "0" : "-";
    }
    return f.join("");
  }
  var kk = [P.g.I, P.g.U],
    lk = [P.g.I, P.g.U, P.g.Jh, P.g.Ih],
    mk = {},
    nk =
      ((mk[P.g.Gj] = "a"),
      (mk[P.g.Ij] = "s"),
      (mk[P.g.Jj] = "y"),
      (mk[P.g.Hj] = "p"),
      mk),
    ok = function (a) {
      for (
        var b = a[P.g.Ja], c = Array.isArray(b) ? b : [b], d = { gd: 0 };
        d.gd < c.length;
        d = { gd: d.gd }, ++d.gd
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== P.g.Ja) {
                var h = c[e.gd],
                  m = zi(),
                  n = Ai();
                Hj = !0;
                Gj && vb("TAGGING", 20);
                Mj().declare(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    pk = function (a) {
      var b = a[P.g.Ja];
      b && O(40);
      var c = a[P.g.Me];
      c && O(41);
      for (
        var d = Ha(b) ? b : [b], e = { hd: 0 };
        e.hd < d.length;
        e = { hd: e.hd }, ++e.hd
      )
        l(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== P.g.Ja && g !== P.g.Me) {
                var m = d[f.hd],
                  n = Number(c),
                  p = zi(),
                  q = Ai();
                Gj = !0;
                Hj && vb("TAGGING", 20);
                Mj().set(g, h, m, p, q, n);
              }
            };
          })(e)
        );
    },
    qk = function (a, b) {
      l(a, function (c, d) {
        Gj = !0;
        Hj && vb("TAGGING", 20);
        Mj().update(c, d);
      });
      ek(b.eventId, b.priorityId);
    },
    rk = function (a) {
      for (
        var b = a[P.g.Ja], c = Array.isArray(b) ? b : [b], d = { jd: 0 };
        d.jd < c.length;
        d = { jd: d.jd }, ++d.jd
      )
        l(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== P.g.Ja) {
                var h = c[e.jd],
                  m = zi(),
                  n = Ai();
                Mj().setCps(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    sk = function (a) {
      for (
        var b = a[P.g.Ja], c = Array.isArray(b) ? b : [b], d = { wc: 0 };
        d.wc < c.length;
        d = { wc: d.wc }, ++d.wc
      )
        a.hasOwnProperty(P.g.Sf) &&
          l(
            nk,
            (function (e) {
              return function (f) {
                Xj(Kj, f, a[P.g.Sf], c[e.wc], zi(), Ai());
              };
            })(d)
          ),
          l(
            a,
            (function (e) {
              return function (f, g) {
                f !== P.g.Ja &&
                  f !== P.g.Sf &&
                  Xj(Kj, f, g, c[e.wc], zi(), Ai());
              };
            })(d)
          );
    },
    tk = function (a) {
      var b = Yj(a);
      return void 0 != b ? b : !0;
    },
    uk = function () {
      return "G" + (U(104) ? "2" : "1") + jk(Yj);
    },
    vk = {},
    wk =
      ((vk[P.g.I] = 0),
      (vk[P.g.U] = 1),
      (vk[P.g.Jh] = 2),
      (vk[P.g.Ih] = 3),
      vk);
  function xk(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var yk = function () {
      if (!U(106)) return "G1" + jk(Zj, !0);
      for (var a = "1", b = 0; b < lk.length; b++) {
        var c = a,
          d,
          e = lk[b],
          f = Jj[e];
        d = void 0 === f ? 0 : wk.hasOwnProperty(f) ? 12 | wk[f] : 8;
        var g = Mj();
        g.accessedAny = !0;
        var h = g.entries[e] || {};
        d = (d << 2) | xk(h.implicit);
        a =
          c +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              d
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (xk(h.declare) << 4) | (xk(h.initial) << 2) | xk(h.update)
            ]);
      }
      return a;
    },
    zk = function () {
      var a = Mj(),
        b = a.cps,
        c = [],
        d;
      for (d in Kj)
        Kj.hasOwnProperty(d) &&
          Kj[d].enabled &&
          (a.usedSetCps
            ? b.hasOwnProperty(d) && b[d].enabled && c.push(d)
            : c.push(d));
      for (var e = "", f = 0; f < c.length; f++) {
        var g = nk[c[f]];
        g && (e += g);
      }
      return "" === e ? "-" : e;
    },
    Ak = function (a, b) {
      dk(a, b);
    },
    Bk = function (a, b) {
      gk(a, b);
    },
    Ck = function (a, b) {
      fk(a, b);
    };
  var Dk = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Ek = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Fk = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Gk = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Hk(a) {
    return "null" !== a.origin;
  }
  var Kk = function (a, b, c, d) {
      return Ik(d) ? Ek(a, String(b || Jk()), c) : [];
    },
    Nk = function (a, b, c, d, e) {
      if (Ik(e)) {
        var f = Lk(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Mk(
            f,
            function (g) {
              return g.zf;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Mk(
            f,
            function (g) {
              return g.xe;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Ok(a, b, c, d) {
    var e = Jk(),
      f = window;
    Hk(f) && (f.document.cookie = a);
    var g = Jk();
    return e != g || (void 0 != c && 0 <= Kk(b, g, !1, d).indexOf(c));
  }
  var Sk = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!Ik(c.Cb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Pk(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date
        ? (m = c.expires.toUTCString())
        : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.wl);
      g = e(g, "samesite", c.Pl);
      c.Rl && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Qk(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Rk(u, c.path) && Ok(v, a, b, c.Cb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Rk(n, c.path) ? 1 : Ok(g, a, b, c.Cb) ? 0 : 1;
    },
    Tk = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Sk(a, b, c);
    };
  function Mk(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Lk(a, b, c) {
    for (var d = [], e = Kk(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), zf: 1 * m[0] || 1, xe: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Pk = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Uk = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Vk = /(^|\.)doubleclick\.net$/i,
    Rk = function (a, b) {
      return (
        Vk.test(window.document.location.hostname) || ("/" === b && Uk.test(a))
      );
    },
    Jk = function () {
      return Hk(window) ? window.document.cookie : "";
    },
    Qk = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Vk.test(e) || Uk.test(e) || a.push("none");
      return a;
    },
    Ik = function (a) {
      if (!Fj().h() || !a || !bk()) return !0;
      if (!ak(a)) return !1;
      var b = Yj(a);
      return null == b ? !0 : !!b;
    };
  var Wk = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Dk(a) & 2147483647)) : String(b);
    },
    Xk = function (a) {
      return [Wk(a), Math.round(Ta() / 1e3)].join(".");
    },
    $k = function (a, b, c, d, e) {
      var f = Yk(b);
      return Nk(a, f, Zk(c), d, e);
    },
    al = function (a, b, c, d) {
      var e = "" + Yk(c),
        f = Zk(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Yk = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Zk = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var bl = function () {
    Kh.dedupe_gclid || (Kh.dedupe_gclid = "" + Xk());
    return Kh.dedupe_gclid;
  };
  var cl = function () {
    var a = !1;
    return a;
  };
  var dl = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    el = function () {
      var a = hc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new dl()), (a.tidr = b));
      return b;
    };
  var K = { D: "GTM-N2LKN6X", Gb: "41739167" },
    fl = { jj: "GTM-N2LKN6X", kj: "GTM-N2LKN6X" };
  K.lf = Pa("");
  var gl = function () {
      return fl.jj ? fl.jj.split("|") : [K.D];
    },
    hl = function () {
      return fl.kj ? fl.kj.split("|") : [];
    },
    il = function (a) {
      var b = el();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    jl = function () {
      for (var a = el(), b = gl(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = gl()), (d.destinations = hl()))
          : (a.container[b[c]] = {
              state: 2,
              containers: gl(),
              destinations: hl(),
            });
      }
      for (var e = hl(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && O(93);
        g
          ? ((g.state = 2), (g.containers = gl()), (g.destinations = hl()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: gl(),
              destinations: hl(),
            });
      }
      a.canonical[K.Gb] = 2;
    },
    kl = function (a) {
      return !!el().container[a];
    },
    ll = function () {
      return { ctid: K.D, isDestination: K.lf };
    },
    ml = function () {
      var a = el().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    nl = function () {
      var a = {};
      l(el().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  var ol = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    pl = function (a) {
      var b = K.D.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = K.D;
      c.Ml = Jh.ae;
      c.Ol = Jh.Kg;
      c.rl = K.lf ? 2 : 1;
      Qh ? ((c.Lf = ol[b]), c.Lf || (c.Lf = 0)) : (c.Lf = Wh ? 13 : 10);
      Uh ? (c.nh = 1) : cl() ? (c.nh = 2) : (c.nh = 3);
      var d;
      var e = c.Lf,
        f = c.nh;
      void 0 === e
        ? (d = "")
        : (f || (f = 0),
          (d =
            "" +
            cg(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (e << 2) | f
            ]));
      var g = c.om,
        h =
          4 +
          d +
          (g
            ? "" +
              cg(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                g
              ]
            : ""),
        m,
        n = c.Ol;
      m = n && bg.test(n) ? "" + cg(3, 2) + n : "";
      var p,
        q = c.Ml;
      p = q
        ? "" +
          cg(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]
        : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";
        else {
          var w = u[1];
          r =
            "" +
            cg(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + w.length
            ] +
            (c.rl || 0) +
            w;
        }
      } else r = "";
      return h + m + p + r;
    };
  function ql(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var rl = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function sl() {
    return Gb ? !!Nb && !!Nb.platform : !1;
  }
  function tl() {
    return Qb("iPhone") && !Qb("iPod") && !Qb("iPad");
  }
  function ul() {
    tl() || Qb("iPad") || Qb("iPod");
  }
  Sb();
  Rb() || Qb("Trident") || Qb("MSIE");
  Qb("Edge");
  !Qb("Gecko") ||
    (-1 != Mb().toLowerCase().indexOf("webkit") && !Qb("Edge")) ||
    Qb("Trident") ||
    Qb("MSIE") ||
    Qb("Edge");
  -1 != Mb().toLowerCase().indexOf("webkit") && !Qb("Edge") && Qb("Mobile");
  sl() || Qb("Macintosh");
  sl() || Qb("Windows");
  (sl() ? "Linux" === Nb.platform : Qb("Linux")) || sl() || Qb("CrOS");
  var vl = pa.navigator || null;
  vl && (vl.appVersion || "").indexOf("X11");
  sl() || Qb("Android");
  tl();
  Qb("iPad");
  Qb("iPod");
  ul();
  Mb().toLowerCase().indexOf("kaios");
  var wl = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    xl = /#|$/,
    yl = function (a, b) {
      var c = a.search(xl),
        d = wl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    zl = /[?&]($|#)/,
    Al = function (a, b, c) {
      for (
        var d, e = a.search(xl), f = 0, g, h = [];
        0 <= (g = wl(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(zl, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Bl = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              Dj(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Cl = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Dl() {
    if (!H.head) return null;
    var a = El("META");
    H.head.appendChild(a);
    a.httpEquiv = "origin-trial";
    a.content =
      "A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9";
    return a;
  }
  var Fl = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : Bl(z.top)
        ? 1
        : 2;
    },
    El = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Gl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = El("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = yb(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      rl(e, "load", f);
      rl(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Il = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Cl(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Hl(c, b);
    },
    Hl = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          (e.headers = { "Attribution-Reporting-Eligible": "event-source" }));
        c.fetch(a, e);
      } else Gl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Jl = function () {};
  var Kl = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Ll = function (a, b) {
      b = void 0 === b ? {} : b;
      this.m = a;
      this.h = null;
      this.N = {};
      this.pb = 0;
      var c;
      this.T = null != (c = b.Zl) ? c : 500;
      var d;
      this.C = null != (d = b.qm) ? d : !1;
      this.B = null;
    };
  oa(Ll, Jl);
  Ll.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.C },
      d = Gk(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Kl(c)),
          (c.internalBlockOnErrors = b.C),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Ml(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Ll.prototype.removeEventListener = function (a) {
    a && a.listenerId && Ml(this, "removeEventListener", null, a.listenerId);
  };
  var Ol = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Nl(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Nl(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? Nl(a.purpose.legitimateInterests, b) &&
                Nl(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Nl = function (a, b) {
      return !(!a || !a[b]);
    },
    Ml = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if (fm(a)) {
        gm(a);
        var f = ++a.pb;
        a.N[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    fm = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    gm = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.N[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        rl(a.m, "message", a.B));
    },
    hm = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Kl(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Il({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var im = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    jm = ql("", 500);
  function km() {
    var a = Kh.tcf || {};
    return (Kh.tcf = a);
  }
  var qm = function () {
    var a = km(),
      b = new Ll(z, { Zl: -1 });
    lm(b) && mm() && O(124);
    if (!mm() && !a.active && lm(b)) {
      a.active = !0;
      a.If = {};
      nm();
      a.tcString = "tcunavailable";
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState) om(a), pm(a);
          else {
            var d;
            a.gdprApplies = c.gdprApplies;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in im) im.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (
              "tcloaded" === c.eventStatus ||
              "useractioncomplete" === c.eventStatus ||
              "cmpuishown" === c.eventStatus
            ) {
              var g = {},
                h;
              for (h in im)
                if (im.hasOwnProperty(h))
                  if ("1" === h) {
                    var m,
                      n = c,
                      p = !0;
                    p = void 0 === p ? !1 : p;
                    m = hm(n)
                      ? !1 === n.gdprApplies ||
                        "tcunavailable" === n.tcString ||
                        (void 0 === n.gdprApplies && !p) ||
                        "string" !== typeof n.tcString ||
                        !n.tcString.length
                        ? !0
                        : Ol(n, "1", 0)
                      : !1;
                    g["1"] = m;
                  } else g[h] = Ol(c, h, im[h]);
              d = g;
            }
            d && ((a.tcString = c.tcString || "tcempty"), (a.If = d), pm(a));
          }
        });
      } catch (c) {
        om(a), pm(a);
      }
    }
  };
  function om(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function nm() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = jm), a);
    pk(b);
  }
  function lm(a) {
    return "function" === typeof z.__tcfapi ||
      "function" === typeof a.m.__tcfapi ||
      null != fm(a)
      ? !0
      : !1;
  }
  var mm = function () {
    return !0 !== z.gtag_enable_tcf_support;
  };
  function pm(a) {
    var b = {},
      c = ((b.ad_storage = a.If["1"] ? "granted" : "denied"), b);
    qk(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: rm() }
    );
  }
  var rm = function () {
      var a = km();
      return a.active ? a.tcString || "" : "";
    },
    sm = function () {
      var a = km();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    tm = function (a) {
      if (!im.hasOwnProperty(String(a))) return !0;
      var b = km();
      return b.active && b.If ? !!b.If[String(a)] : !0;
    };
  var um = function (a) {
      var b = String(a[ne.Qb] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    vm =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var wm = { sampleRate: "0.005000", zj: "", yj: Number("5"), xm: Number("") },
    xm;
  if (!(xm = vm)) {
    var ym = Math.random(),
      zm = wm.sampleRate;
    xm = ym < zm;
  }
  var Am = xm,
    Bm = "https://www.googletagmanager.com/a?id=" + K.D + "&cv=5";
  function Cm() {
    return [Bm, "&v=3&t=t", "&pid=" + Ka(), "&rv=" + Jh.Kg].join("");
  }
  var Dm = Cm();
  function Em() {
    Dm = Cm();
  }
  var Fm = {},
    Gm = "",
    Hm = "",
    Im = "",
    Jm = "",
    Km = [],
    Lm = "",
    Mm = "",
    Nm = void 0,
    Om = {},
    Pm = {},
    Qm = void 0,
    Rm = 5;
  0 < wm.yj && (Rm = wm.yj);
  var Sm = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        fl: function () {
          return c < a ? !1 : Ta() - d[c % a] < b;
        },
        Il: function () {
          var f = c++ % a;
          d[f] = Ta();
        },
      };
    })(Rm, 1e3),
    Tm = 1e3;
  function Um(a) {
    var b = Nm;
    if (void 0 === b) return "";
    var c = xb("GTM"),
      d = xb("TAGGING"),
      e = xb("HEALTH"),
      f = Dm,
      g = Fm[b] ? "" : "&es=1",
      h = Om[b],
      m = Vm(),
      n = Gm,
      p = Hm,
      q = Mm,
      r = Im,
      t = Jm,
      u;
    return [
      f,
      g,
      h,
      c ? "&u=" + c : "",
      d ? "&ut=" + d : "",
      e ? "&h=" + e : "",
      m,
      n,
      p,
      q,
      r,
      t,
      u,
      Lm ? "&dl=" + encodeURIComponent(Lm) : "",
      0 < Km.length ? "&tdp=" + Km.join(".") : "",
      Jh.ae ? "&x=" + Jh.ae : "",
      "&z=0",
    ].join("");
  }
  function Xm() {
    Qm && (z.clearTimeout(Qm), (Qm = void 0));
    if (void 0 !== Nm && (!Fm[Nm] || Gm || Hm))
      if (Pm[Nm] || Sm.fl() || 0 >= Tm--) O(1), (Pm[Nm] = !0);
      else {
        Sm.Il();
        var a = Um(!0);
        pc(a);
        if (Jm || (Lm && 0 < Km.length)) {
          var b = a.replace("/a?", "/td?");
          pc(b);
        }
        Fm[Nm] = !0;
        Lm = Jm = Im = Mm = Hm = Gm = "";
        Km = [];
      }
  }
  function Ym() {
    Qm || (Qm = z.setTimeout(Xm, 500));
  }
  function Zm() {
    2022 <= Um().length && Xm();
  }
  function Vm() {
    return (
      "&tc=" +
      Ne.filter(function (a) {
        return a;
      }).length
    );
  }
  var $m = function (a, b) {
      if (Am && !Pm[a] && Nm !== a) {
        Xm();
        Nm = a;
        Im = Gm = "";
        var c;
        c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
        Om[a] = "&e=" + c + "&eid=" + a;
        Ym();
      }
    },
    an = function (a, b, c) {
      if (Am && b) {
        var d = um(b),
          e = c + d;
        if (!Pm[a]) {
          a !== Nm && (Xm(), (Nm = a));
          Gm = Gm ? Gm + "." + e : "&tr=" + e;
          var f = b["function"];
          if (!f)
            throw Error("Error: No function name given for function call.");
          var g = (Pe[f] ? "1" : "2") + d;
          Im = Im ? Im + "." + g : "&ti=" + g;
          Ym();
          Zm();
        }
      }
    },
    bn = function (a, b, c) {
      if (Am && void 0 !== a && !Pm[a]) {
        a !== Nm && (Xm(), (Nm = a));
        var d = c + b;
        Hm = Hm ? Hm + "." + d : "&epr=" + d;
        Ym();
        Zm();
      }
    },
    cn = function (a, b, c) {},
    Wm = void 0;
  var dn = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Tb();
  tl() || Qb("iPod");
  Qb("iPad");
  !Qb("Android") || Ub() || Tb() || Sb() || Qb("Silk");
  Ub();
  !Qb("Safari") ||
    Ub() ||
    (Rb() ? 0 : Qb("Coast")) ||
    Sb() ||
    (Rb() ? 0 : Qb("Edge")) ||
    (Rb() ? Pb("Microsoft Edge") : Qb("Edg/")) ||
    (Rb() ? Pb("Opera") : Qb("OPR")) ||
    Tb() ||
    Qb("Silk") ||
    Qb("Android") ||
    ul();
  var en = {},
    fn = null,
    gn = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!fn) {
        fn = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          en[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === fn[q] && (fn[q] = p);
          }
        }
      }
      for (
        var r = en[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (A >> 6)],
          J = r[A & 63];
        t[w++] = "" + B + D + E + J;
      }
      var G = 0,
        N = u;
      switch (b.length - v) {
        case 2:
          (G = b[v + 1]), (N = r[(G & 15) << 2] || u);
        case 1:
          var Q = b[v];
          t[w] = "" + r[Q >> 2] + r[((Q & 3) << 4) | (G >> 4)] + N + u;
      }
      return t.join("");
    };
  var hn =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function jn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function kn() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function ln() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function mn(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function nn() {
    var a = z;
    if (!mn(a)) return null;
    var b = jn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(hn)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  function tn(a, b, c, d) {
    var e,
      f = Number(null != a.Ab ? a.Ab : void 0);
    0 !== f && (e = new Date((b || Ta()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Cb: d,
    };
  }
  var un;
  var yn = function () {
      var a = vn,
        b = wn,
        c = xn(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        qc(H, "mousedown", d);
        qc(H, "keyup", d);
        qc(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    zn = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      xn().decorators.push(f);
    },
    An = function (a, b, c) {
      for (var d = xn().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== H.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Wa(e, g.callback());
        }
      }
      return e;
    };
  function xn() {
    var a = hc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Bn = /(.*?)\*(.*?)\*(.*)/,
    Cn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Dn = /^(?:www\.|m\.|amp\.)+/,
    En = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Fn(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Hn = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(sb(String(d))));
      }
    var e = b.join("*");
    return ["1", Gn(e), e].join("*");
  };
  function Gn(a, b) {
    var c = [
        fc.userAgent,
        new Date().getTimezoneOffset(),
        fc.userLanguage || fc.language,
        Math.floor(Ta() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = un)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    un = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ un[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function In() {
    return function (a) {
      var b = $i(z.location.href),
        c = b.search.replace("?", ""),
        d = Vi(c, "_gl", !1, !0) || "";
      a.query = Jn(d) || {};
      var e = Yi(b, "fragment").match(Fn("_gl"));
      a.fragment = Jn((e && e[3]) || "") || {};
    };
  }
  function Kn(a, b) {
    var c = Fn(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Ln = function (a, b) {
      b || (b = "_gl");
      var c = En.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Kn(b, (c[2] || "").slice(1)),
        f = Kn(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Mn = function (a) {
      var b = In(),
        c = xn();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Wa(d, e.query), a && Wa(d, e.fragment));
      return d;
    },
    Jn = function (a) {
      try {
        var b = Nn(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = tb(d[e + 1]);
            c[f] = g;
          }
          vb("TAGGING", 6);
          return c;
        }
      } catch (h) {
        vb("TAGGING", 8);
      }
    };
  function Nn(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Bn.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Gn(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        vb("TAGGING", 7);
      }
    }
  }
  function On(a, b, c, d) {
    function e(p) {
      p = Kn(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = En.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + m;
  }
  function Pn(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = An(b, 1, c),
      e = An(b, 2, c),
      f = An(b, 3, c);
    if (Ya(d)) {
      var g = Hn(d);
      c ? Qn("_gl", g, a) : Rn("_gl", g, a, !1);
    }
    if (!c && Ya(e)) {
      var h = Hn(e);
      Rn("_gl", h, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Rn(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Qn(n, p, q);
              break a;
            }
          }
          "string" == typeof q && On(n, p, q);
        }
  }
  function Rn(a, b, c, d) {
    if (c.href) {
      var e = On(a, b, c.href, void 0 === d ? !1 : d);
      Fb.test(e) && (c.href = e);
    }
  }
  function Qn(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = H.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = On(a, b, c.action);
        Fb.test(n) && (c.action = n);
      }
    }
  }
  function vn(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Pn(e, e.hostname);
      }
    } catch (g) {}
  }
  function wn(a) {
    try {
      if (a.action) {
        var b = Yi($i(a.action), "host");
        Pn(a, b);
      }
    } catch (c) {}
  }
  var Sn = function (a, b, c, d) {
      yn();
      zn(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Tn = function (a, b) {
      yn();
      zn(a, [Xi(z.location, "host", !0)], b, !0, !0);
    },
    Un = function () {
      var a = H.location.hostname,
        b = Cn.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Dn, ""),
        m = e.replace(Dn, ""),
        n;
      if (!(n = h === m)) {
        var p = "." + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Vn = function (a, b) {
      return !1 === a ? !1 : a || b || Un();
    };
  var Wn = ["1"],
    Xn = {},
    Yn = {},
    $n = function (a) {
      return Xn[Zn(a)];
    },
    eo = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Zn(a.prefix);
      if (!Xn[c])
        if (ao(c, a.path, a.domain)) {
          if (Aj(1)) {
            var d = Yn[Zn(a.prefix)];
            bo(a, d ? d.id : void 0, d ? d.kh : void 0);
          }
        } else {
          if (Aj(2)) {
            var e = bj("auiddc");
            if (e) {
              vb("TAGGING", 17);
              Xn[c] = e;
              return;
            }
          }
          if (b) {
            var f = Zn(a.prefix),
              g = Xk();
            if (0 === co(f, g, a)) {
              var h = hc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            ao(c, a.path, a.domain);
          }
        }
    };
  function bo(a, b, c) {
    var d = Zn(a.prefix),
      e = Xn[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(Ta() / 1e3)));
          co(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function co(a, b, c, d) {
    var e = al(b, "1", c.domain, c.path),
      f = tn(c, d);
    f.Cb = "ad_storage";
    return Tk(a, e, f);
  }
  function ao(a, b, c) {
    var d = $k(a, b, c, Wn, "ad_storage");
    if (!d) return !1;
    fo(a, d);
    return !0;
  }
  function fo(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((Xn[a] = c.slice(0, 2).join(".")),
        (Yn[a] = { id: c.slice(2, 4).join("."), kh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Yn[a] = { id: c.slice(0, 2).join("."), kh: Number(c[2]) || 0 })
      : (Xn[a] = b);
  }
  function Zn(a) {
    return (a || "_gcl") + "_au";
  }
  function go(a) {
    bk() || a();
    fk(
      function () {
        Yj("ad_storage") && a();
        gk(a, "ad_storage");
      },
      ["ad_storage"]
    );
  }
  function ho(a) {
    var b = Mn(!0),
      c = Zn(a.prefix);
    go(function () {
      var d = b[c];
      if (d) {
        fo(c, d);
        var e = 1e3 * Number(Xn[c].split(".")[1]);
        if (e) {
          vb("TAGGING", 16);
          var f = tn(a, e);
          f.Cb = "ad_storage";
          var g = al(d, "1", a.domain, a.path);
          Tk(c, g, f);
        }
      }
    });
  }
  function io(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = $k(a, e.path, e.domain, Wn, "ad_storage");
      h && (g[a] = h);
      return g;
    };
    go(function () {
      Sn(f, b, c, d);
    });
  }
  var jo = function (a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Dh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function ko(a, b) {
    var c = jo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Dh] || (d[c[e].Dh] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ia: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Dh].push(g);
      }
    }
    return d;
  }
  var lo = /^\w+$/,
    mo = /^[\w-]+$/,
    no = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    oo = function () {
      if (!Fj().h() || !bk()) return !0;
      var a = Yj("ad_storage");
      return null == a ? !0 : !!a;
    },
    po = function (a, b) {
      ak("ad_storage")
        ? oo()
          ? a()
          : gk(a, "ad_storage")
        : b
        ? vb("TAGGING", 3)
        : fk(
            function () {
              po(a, !0);
            },
            ["ad_storage"]
          );
    },
    ro = function (a) {
      return qo(a).map(function (b) {
        return b.ia;
      });
    },
    qo = function (a) {
      var b = [];
      if (!Hk(z) || !H.cookie) return b;
      var c = Kk(a, H.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { He: d.He }, e++) {
        var f = so(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.He = g.ia;
          var m = g.timestamp,
            n = g.labels,
            p = Ia(
              b,
              (function (q) {
                return function (r) {
                  return r.ia === q.He;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = to(p.labels, n || [])))
            : b.push({ version: h, ia: d.He, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return uo(b);
    };
  function to(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function vo(a) {
    return a && "string" == typeof a && a.match(lo) ? a : "_gcl";
  }
  var xo = function () {
      var a = $i(z.location.href),
        b = Yi(a, "query", !1, void 0, "gclid"),
        c = Yi(a, "query", !1, void 0, "gclsrc"),
        d = Yi(a, "query", !1, void 0, "wbraid"),
        e = Yi(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Vi(f, "gclid", !1);
        c = c || Vi(f, "gclsrc", !1);
        d = d || Vi(f, "wbraid", !1);
      }
      return wo(b, c, e, d);
    },
    wo = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && mo.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(mo))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    zo = function (a) {
      var b = xo();
      po(function () {
        yo(b, !1, a);
      });
    };
  function yo(a, b, c, d, e) {
    function f(w, x) {
      var y = Ao(w, g);
      y && (Tk(y, x, h), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = vo(c.prefix);
    d = d || Ta();
    var h = tn(c, d, !0);
    h.Cb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Ao("gb", g),
        t = !1;
      if (!b)
        for (var u = qo(r), v = 0; v < u.length; v++)
          u[v].ia === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Co = function (a, b) {
      var c = Mn(!0);
      po(function () {
        for (var d = vo(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== no[f]) {
            var g = Ao(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(Bo(h), Ta()),
                n;
              b: {
                var p = m;
                if (Hk(z))
                  for (
                    var q = Kk(g, H.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Bo(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = tn(b, m, !0);
                t.Cb = "ad_storage";
                Tk(g, h, t);
              }
            }
          }
        }
        yo(wo(c.gclid, c.gclsrc), !1, b);
      });
    },
    Ao = function (a, b) {
      var c = no[a];
      if (void 0 !== c) return b + c;
    },
    Bo = function (a) {
      return 0 !== Do(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function so(a) {
    var b = Do(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ia: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Do(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !mo.test(a[2])
      ? []
      : a;
  }
  var Eo = function (a, b, c, d, e) {
      if (Ha(b) && Hk(z)) {
        var f = vo(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = Ao(a[m], f);
              if (n) {
                var p = Kk(n, H.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        po(function () {
          Sn(g, b, c, d);
        });
      }
    },
    uo = function (a) {
      return a.filter(function (b) {
        return mo.test(b.ia);
      });
    },
    Fo = function (a, b) {
      if (Hk(z)) {
        for (var c = vo(b.prefix), d = {}, e = 0; e < a.length; e++)
          no[a[e]] && (d[a[e]] = no[a[e]]);
        po(function () {
          l(d, function (f, g) {
            var h = Kk(c + g, H.cookie, void 0, "ad_storage");
            h.sort(function (t, u) {
              return Bo(u) - Bo(t);
            });
            if (h.length) {
              var m = h[0],
                n = Bo(m),
                p = 0 !== Do(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Do(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              yo(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Go(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Ho = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (bk()) {
        var c = xo();
        if (Go(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          Tn(function () {
            return d;
          }, 3);
          Tn(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Io = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!oo()) return e;
      var f = qo(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          m = f[0].timestamp,
          n = [h.version, Math.round(m / 1e3), h.ia]
            .concat(h.labels || [], [b])
            .join("."),
          p = tn(c, m, !0);
        p.Cb = "ad_storage";
        Tk(a, n, p);
      }
      return e;
    };
  function Jo(a, b) {
    var c = vo(b),
      d = Ao(a, c);
    if (!d) return 0;
    for (var e = qo(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Ko(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Lo = function (a) {
    var b = Math.max(Jo("aw", a), Ko(oo() ? ko() : {}));
    return Math.max(Jo("gb", a), Ko(oo() ? ko("_gac_gb", !0) : {})) > b;
  };
  var Qo = /[A-Z]+/,
    Ro = /\s/,
    So = function (a) {
      if (k(a)) {
        a = Ra(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Qo.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (Ro.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, Z: c + "-" + d[0], K: d };
          }
        }
      }
    },
    Uo = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = So(a[c]);
        d && (b[d.id] = d);
      }
      To(b);
      var e = [];
      l(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function To(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.K[1] && b.push(d.Z);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Vo = function (a, b, c, d) {
    var e = nc(),
      f;
    if (1 === e)
      a: {
        var g = Yh;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = H.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var Xo = function (a, b, c) {
      if (z[a.functionName]) return b.rh && I(b.rh), z[a.functionName];
      var d = Wo();
      z[a.functionName] = d;
      if (a.wf)
        for (var e = 0; e < a.wf.length; e++) z[a.wf[e]] = z[a.wf[e]] || Wo();
      a.Ff && void 0 === z[a.Ff] && (z[a.Ff] = c);
      mc(Vo("https://", "http://", a.Bh), b.rh, b.zl);
      return d;
    },
    Wo = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Yo = {
      functionName: "_googWcmImpl",
      Ff: "_googWcmAk",
      Bh: "www.gstatic.com/wcm/loader.js",
    },
    Zo = {
      functionName: "_gaPhoneImpl",
      Ff: "ga_wpid",
      Bh: "www.gstatic.com/gaphone/loader.js",
    },
    $o = { Bj: "", qk: "5" },
    ap = {
      functionName: "_googCallTrackingImpl",
      wf: [Zo.functionName, Yo.functionName],
      Bh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        ($o.Bj || $o.qk) +
        ".js",
    },
    bp = {},
    cp = function (a, b, c, d) {
      O(22);
      if (c) {
        d = d || {};
        var e = Xo(Yo, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Bb && (f.autoreplace = c);
        e(2, d.Bb, f, c, 0, Sa(), d.options);
      }
    },
    dp = function (a, b, c, d) {
      O(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Sa(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          bp[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length
              ? ((e.adData = { ak: g.K[0], cl: g.K[1] }), (bp[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.Z }), (bp[g.id] = !0)));
        }
        (e.gaData || e.adData) && Xo(ap, d)(d.Bb, e, d.options);
      }
    },
    ep = function () {
      var a = !1;
      return a;
    },
    fp = function (a, b) {
      if (a)
        if (cl()) {
        } else {
          if (k(a)) {
            var c = So(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = S(b, P.g.vi);
          if (f && Ha(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var h = So(f[g]);
              h &&
                (d.push(h),
                (a.id === h.id || (a.id === a.Z && a.Z === h.Z)) && (e = !0));
            }
          }
          if (!d || e) {
            var m = S(b, P.g.vg),
              n;
            if (m) {
              Ha(m) ? (n = m) : (n = [m]);
              var p = S(b, P.g.sg),
                q = S(b, P.g.ug),
                r = S(b, P.g.wg),
                t = S(b, P.g.ui),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) dp(d, n[w], t, { Bb: u, options: r });
                  else if ("AW" === a.prefix && a.K[1])
                    ep()
                      ? dp([a], n[w], t || "US", { Bb: u, options: r })
                      : cp(a.K[0], a.K[1], n[w], { Bb: u, options: r });
                  else if ("UA" === a.prefix)
                    if (ep()) dp([a], n[w], t || "US", { Bb: u });
                    else {
                      var x = a.Z,
                        y = n[w],
                        A = { Bb: u };
                      O(23);
                      if (y) {
                        A = A || {};
                        var B = Xo(Zo, A, x),
                          D = {};
                        void 0 !== A.Bb ? (D.receiver = A.Bb) : (D.replace = y);
                        D.ga_wpid = x;
                        D.destination = y;
                        B(2, Sa(), D);
                      }
                    }
            }
          }
        }
    };
  var gp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.h = c;
    this.m = {};
    this.metadata = Uc(c.eventMetadata || {});
    this.H = !1;
  };
  gp.prototype.copyToHitData = function (a, b) {
    var c = S(this.h, a);
    void 0 !== c ? (this.m[a] = c) : void 0 !== b && (this.m[a] = b);
  };
  var hp = function (a, b, c) {
    var d = Ii(a.target.Z);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function ip(a) {
    return {
      getDestinationId: function () {
        return a.target.Z;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        a.m[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      abort: function () {
        a.H = !0;
      },
      getFromEventContext: function (b) {
        return S(a.h, b);
      },
      Df: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.m);
      },
    };
  }
  var Dp = function (a, b, c, d, e, f, g, h, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.N = d;
      this.m = e;
      this.C = f;
      this.T = g;
      this.B = h;
      this.eventMetadata = m;
      this.R = n;
      this.W = p;
      this.F = q;
    },
    S = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.N[b]) return a.N[b];
      if (void 0 !== a.m[b]) return a.m[b];
      Am && Ep(a, a.C[b], a.T[b]) && (O(71), O(79));
      return void 0 !== a.C[b] ? a.C[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Fp = function (a) {
      function b(g) {
        for (var h = Object.keys(g), m = 0; m < h.length; ++m) c[h[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.N);
      b(a.m);
      b(a.C);
      if (Am)
        for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            O(71);
            O(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Gp = function (a, b, c) {
      function d(m) {
        Tc(m) &&
          l(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.C[b]), d(a.m[b]), d(a.N[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Am) {
        var g = f,
          h = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.T[b]), d(a.m[b]), d(a.N[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Ep(a, e, h)) O(71), O(81);
        f = g;
        e = h;
      }
      return f ? e : void 0;
    },
    Hp = function (a) {
      var b = [P.g.Ic, P.g.Ec, P.g.Fc, P.g.Gc, P.g.Hc, P.g.Jc, P.g.Kc],
        c = {},
        d = !1,
        e = function (h) {
          for (var m = 0; m < b.length; m++)
            void 0 !== h[b[m]] && ((c[b[m]] = h[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.N) || e(a.m)) return c;
      e(a.C);
      if (Am) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.T);
        Ep(a, c, f) && (O(71), O(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Ep = function (a, b, c) {
      if (!Am) return !1;
      try {
        if (b === c) return !1;
        var d = Rc(b);
        if (d !== Rc(c) || !((Tc(b) && Tc(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Ep(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Ep(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        O(72);
      }
      return !1;
    },
    Ip = function (a, b) {
      this.dk = a;
      this.ek = b;
      this.C = {};
      this.Ei = {};
      this.h = {};
      this.N = {};
      this.m = {};
      this.Xd = {};
      this.B = {};
      this.nd = function () {};
      this.pb = function () {};
      this.T = !1;
    },
    Jp = function (a, b) {
      a.C = b;
      return a;
    },
    Kp = function (a, b) {
      a.Ei = b;
      return a;
    },
    Lp = function (a, b) {
      a.h = b;
      return a;
    },
    Mp = function (a, b) {
      a.N = b;
      return a;
    },
    Np = function (a, b) {
      a.m = b;
      return a;
    },
    Op = function (a, b) {
      a.Xd = b;
      return a;
    },
    Pp = function (a, b) {
      a.B = b || {};
      return a;
    },
    Qp = function (a, b) {
      a.nd = b;
      return a;
    },
    Rp = function (a, b) {
      a.pb = b;
      return a;
    },
    Sp = function (a) {
      a.T = !0;
      return a;
    },
    Tp = function (a) {
      return new Dp(
        a.dk,
        a.ek,
        a.C,
        a.Ei,
        a.h,
        a.N,
        a.m,
        a.Xd,
        a.B,
        a.nd,
        a.pb,
        a.T
      );
    };
  function Yp() {
    return "attribution-reporting";
  }
  function Zp(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var $p = !1;
  function aq() {
    if (Zp("join-ad-interest-group") && Fa(fc.joinAdInterestGroup)) return !0;
    $p || (Dl(), ($p = !0));
    return Zp("join-ad-interest-group") && Fa(fc.joinAdInterestGroup);
  }
  function bq(a, b) {
    var c = void 0;
    try {
      c = H.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ta() - d) {
        vb("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          H.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          vb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    oc(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ta() },
      c
    );
  }
  function cq() {
    return "https://td.doubleclick.net";
  }
  var dq = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    eq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    fq = /^\d+\.fls\.doubleclick\.net$/,
    gq = /;gac=([^;?]+)/,
    hq = /;gacgb=([^;?]+)/,
    iq = /;gclaw=([^;?]+)/,
    jq = /;gclgb=([^;?]+)/;
  function kq(a, b) {
    if (fq.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && 2 == c.length && c[1].match(dq)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].ia);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var lq = function (a, b, c) {
    var d = oo() ? ko("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = Io("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { Kk: f ? e.join(";") : "", Jk: kq(d, hq) };
  };
  function mq(a, b, c) {
    if (fq.test(H.location.host)) {
      var d = H.location.href.match(c);
      if (d && 2 == d.length && d[1].match(eq)) return [{ ia: d[1] }];
    } else return qo((a || "_gcl") + b);
    return [];
  }
  var nq = function (a) {
      return mq(a, "_aw", iq)
        .map(function (b) {
          return b.ia;
        })
        .join(".");
    },
    oq = function (a) {
      return mq(a, "_gb", jq)
        .map(function (b) {
          return b.ia;
        })
        .join(".");
    },
    pq = function (a, b) {
      var c = Io(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var qq = function () {
    if (Fa(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var ar = {
    J: {
      Hh: "ads_conversion_hit",
      Pf: "container_execute_start",
      Lh: "container_setup_end",
      Qf: "container_setup_start",
      Kh: "container_execute_end",
      Mh: "container_yield_end",
      Rf: "container_yield_start",
      Bi: "event_execute_end",
      Ci: "event_setup_end",
      Wd: "event_setup_start",
      Di: "ga4_conversion_hit",
      Yd: "page_load",
      lm: "pageview",
      Sb: "snippet_load",
      Oi: "tag_callback_error",
      Pi: "tag_callback_failure",
      Qi: "tag_callback_success",
      Ri: "tag_execute_end",
      Wc: "tag_execute_start",
    },
  };
  var br = !1,
    cr = "L S Y E TC HTC".split(" "),
    dr = ["S", "E"],
    er = ["TS", "TE"];
  var Fr = function (a) {},
    Gr = function (a) {},
    fr = function (a, b, c, d, e, f) {
      var g;
      g = void 0 === g ? !1 : g;
      var h = {};
      return h;
    },
    gr = function (a) {
      var b = !1;
      return b;
    },
    hr = function (a, b) {},
    Hr = function () {
      var a = {};
      return a;
    },
    yr = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Ir = function () {},
    Jr = function (a, b, c) {},
    Kr = function () {
      var a = fr("PAGEVIEW", K.D);
      if (qr(a.entryName, "mark")[0]) {
        var b = Ac();
        b.clearMarks(a.entryName);
        b.clearMeasures("GTM-" + K.D + ":" + ar.J.Yd + ":to:PAGEVIEW");
      }
      var c = fr(ar.J.Yd, K.D);
      gr(a) && hr(a, c);
    };
  var Lr = function (a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var Mr = function (a, b, c) {
    var d = yl(a, "fmt");
    if (b) {
      var e = yl(a, "random"),
        f = yl(a, "label") || "";
      if (!e) return !1;
      var g = gn(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Lr(g, b)) return !1;
    }
    d && 4 != d && (a = Al(a, "rfmt", d));
    var h = Al(a, "fmt", 4);
    mc(
      h,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      H.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var bs = function () {
      this.h = {};
    },
    cs = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    ds = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    fs = function (a, b, c, d) {};
  function hs(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return $i("" + c + b).href;
    }
  }
  function is() {
    return !!Jh.tf && "SGTM_TOKEN" !== Jh.tf.split("@@").join("");
  }
  var ks = function (a, b, c, d) {
      if (!js() && !kl(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + Jh.ka,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var h = is();
        h && (f += "&sign=" + Jh.tf);
        var m = Sh || Uh ? hs(b, e + f) : void 0;
        if (!m) {
          var n = Jh.Ne + e;
          h &&
            gc &&
            g &&
            (n = gc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = Vo("https://", "http://", n + f);
        }
        var p = ll();
        el().container[a] = { state: 1, context: d, parent: p };
        mc(m);
      }
    },
    ls = function (a, b, c) {
      var d;
      if ((d = !js())) {
        var e = el().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (ml())
          (el().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: ll(),
          }),
            O(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Jh.ka +
            "&cx=c";
          is() && (f += "&sign=" + Jh.tf);
          var g = Sh || Uh ? hs(b, f) : void 0;
          g || (g = Vo("https://", "http://", Jh.Ne + f));
          el().destination[a] = { state: 1, context: c, parent: ll() };
          mc(g);
        }
    };
  function js() {
    if (cl()) {
      return !0;
    }
    return !1;
  }
  var ms = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    ns = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    os = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    ps =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    ss = function (a) {
      var b = si("gtm.allowlist") || si("gtm.whitelist");
      b && O(9);
      Qh && (b = ["google", "gtagfl", "lcl", "zone"]);
      qs() &&
        (Qh ? O(116) : O(117),
        rs &&
          ((b = []),
          window.console &&
            window.console.log &&
            window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Za(Qa(b), ns),
        d = si("gtm.blocklist") || si("gtm.blacklist");
      d || ((d = si("tagTypeBlacklist")) && O(3));
      d ? O(8) : (d = []);
      qs() &&
        ((d = Qa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Qa(d).indexOf("google") && O(2);
      var e = d && Za(Qa(d), os),
        f = {};
      return function (g) {
        var h = g && g[ne.Qb];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var m = bi[h] || [],
          n = a(h, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      O(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(h);
          if (t) r = t;
          else {
            var u = Ma(e, m || []);
            u && O(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Ma(e, ps));
        return (f[h] = v);
      };
    },
    rs = !1;
  var qs = function () {
    return ms.test(z.location && z.location.hostname);
  };
  var ts = { initialized: 11, complete: 12, interactive: 13 },
    us = {},
    vs = Object.freeze(((us[P.g.Pa] = !0), us)),
    ws =
      0 <= H.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= H.location.search.indexOf("&gtm_diagnostics="),
    ys = function (a, b, c) {
      if (Am && "config" === a && !(1 < So(b).K.length)) {
        var d,
          e = hc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = Uc(c.C);
        Uc(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var m = xs(d[h], f);
          m.length && (ws && console.log(m), g.push(h));
        }
        if (g.length) {
          if (g.length) {
            var n = b + "*" + g.join(".");
            Jm = Jm ? Jm + "!" + n : "&tdc=" + n;
          }
          vb("TAGGING", ts[H.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function zs(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function xs(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? vs[q] : t;
      },
      f;
    for (f in zs(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        m = e(f, b),
        n = "object" === Rc(h) || "array" === Rc(h),
        p = "object" === Rc(m) || "array" === Rc(m);
      if (n && p) xs(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var As = !1,
    Bs = 0,
    Cs = [];
  function Ds(a) {
    if (!As) {
      var b = H.createEventObject,
        c = "complete" == H.readyState,
        d = "interactive" == H.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        As = !0;
        for (var e = 0; e < Cs.length; e++) I(Cs[e]);
      }
      Cs.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function Es() {
    if (!As && 140 > Bs) {
      Bs++;
      try {
        H.documentElement.doScroll("left"), Ds();
      } catch (a) {
        z.setTimeout(Es, 50);
      }
    }
  }
  var Fs = function (a) {
    As ? a() : Cs.push(a);
  };
  var Hs = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: K.D,
    };
  };
  function Is(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Ks = function (a, b) {
      this.h = !1;
      this.C = [];
      this.N = { tags: [] };
      this.T = !1;
      this.m = this.B = 0;
      Js(this, a, b);
    },
    Ls = function (a, b, c, d) {
      if (Nh.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Tc(d) && (e = Uc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.N.tags.push(e) - 1;
    },
    Ms = function (a, b, c, d) {
      var e = a.N.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Ns = function (a) {
      if (!a.h) {
        for (var b = a.C, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.C.length = 0;
      }
    },
    Js = function (a, b, c) {
      void 0 !== b && a.vf(b);
      c &&
        z.setTimeout(function () {
          return Ns(a);
        }, Number(c));
    };
  Ks.prototype.vf = function (a) {
    var b = this,
      c = Va(function () {
        return I(function () {
          a(K.D, b.N);
        });
      });
    this.h ? c() : this.C.push(c);
  };
  var Os = function (a) {
      a.B++;
      return Va(function () {
        a.m++;
        a.T && a.m >= a.B && Ns(a);
      });
    },
    Ps = function (a) {
      a.T = !0;
      a.m >= a.B && Ns(a);
    };
  var Qs = {},
    Ss = function () {
      return z[Rs()];
    },
    Ts = !1;
  var Us = function (a) {
      z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
      var b = z.GoogleAnalyticsObject;
      if (z[b]) z.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Sa());
        z[b] = c;
      }
      return z[b];
    },
    Vs = function (a) {
      if (bk()) {
        var b = Ss();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Rs() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var Ws = function (a) {},
    Xs = function (a, b) {
      return function () {
        var c = Ss(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function bt(a, b, c, d) {
    var e = Ne[a],
      f = ct(a, b, c, d);
    if (!f) return null;
    var g = Xe(e[ne.Ni], c, []);
    if (g && g.length) {
      var h = g[0];
      f = bt(
        h.index,
        { R: f, W: 1 === h.cj ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function ct(a, b, c, d) {
    function e() {
      if (f[ne.jk]) h();
      else {
        var w = Ye(f, c, []),
          x = w[ne.Cj];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!tk(x[y])) {
              h();
              return;
            }
        var A = Ls(c.Tb, String(f[ne.Qb]), Number(f[ne.ce]), w[ne.kk]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var G = Ta() - J;
            an(c.id, Ne[a], "5");
            Ms(c.Tb, A, "success", G);
            U(70) && Jr(c, f, ar.J.Qi);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var G = Ta() - J;
            an(c.id, Ne[a], "6");
            Ms(c.Tb, A, "failure", G);
            U(70) && Jr(c, f, ar.J.Pi);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        an(c.id, f, "1");
        var D = function () {
          var G = Ta() - J;
          an(c.id, f, "7");
          Ms(c.Tb, A, "exception", G);
          U(70) && Jr(c, f, ar.J.Oi);
          B || ((B = !0), h());
        };
        if (U(70)) {
          var E = fr(ar.J.Wc, K.D, c.id, Number(f[ne.ce]), c.name, um(f));
          gr(E);
        }
        var J = Ta();
        try {
          We(w, { event: c, index: a, type: 1 });
        } catch (G) {
          D(G);
        }
        U(70) && Jr(c, f, ar.J.Ri);
      }
    }
    var f = Ne[a],
      g = b.R,
      h = b.W,
      m = b.terminate;
    if (c.fh(f)) return null;
    var n = Xe(f[ne.Si], c, []);
    if (n && n.length) {
      var p = n[0],
        q = bt(p.index, { R: g, W: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.cj ? m : q;
    }
    if (f[ne.Ji] || f[ne.mk]) {
      var r = f[ne.Ji] ? Oe : c.Wl,
        t = g,
        u = h;
      if (!r[a]) {
        e = Va(e);
        var v = dt(a, r, e);
        g = v.R;
        h = v.W;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function dt(a, b, c) {
    var d = [],
      e = [];
    b[a] = et(d, e, c);
    return {
      R: function () {
        b[a] = ft;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      W: function () {
        b[a] = gt;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function et(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ft(a) {
    a();
  }
  function gt(a, b) {
    b();
  }
  var it = function (a, b) {
      return 1 === arguments.length ? ht("set", a) : ht("set", a, b);
    },
    jt = function (a, b) {
      return 1 === arguments.length ? ht("config", a) : ht("config", a, b);
    },
    kt = function (a, b, c) {
      c = c || {};
      c[P.g.Pb] = a;
      return ht("event", b, c);
    };
  function ht(a) {
    return arguments;
  }
  var lt = function () {
    this.h = [];
    this.m = [];
  };
  lt.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  lt.prototype.listen = function (a) {
    this.m.push(a);
  };
  lt.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  lt.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var nt = function (a, b, c) {
      mt().enqueue(a, b, c);
    },
    pt = function () {
      var a = ot;
      mt().listen(a);
    };
  function mt() {
    var a = Kh.mb;
    a || ((a = new lt()), (Kh.mb = a));
    return a;
  }
  var bu = function (a) {
      var b = Kh.zones;
      return b
        ? b.getIsAllowedFn(gl(), a)
        : function () {
            return !0;
          };
    },
    cu = function (a) {
      var b = Kh.zones;
      return b ? b.isActive(gl(), a) : !0;
    };
  var fu = function (a, b) {
    for (var c = [], d = 0; d < Ne.length; d++)
      if (a[d]) {
        var e = Ne[d];
        var f = Os(b.Tb);
        try {
          var g = bt(d, { R: f, W: f, terminate: f }, b, d);
          if (g) {
            var h = e["function"];
            if (!h) throw "Error: No function name given for function call.";
            var m = Pe[h];
            c.push({
              uj: d,
              mj: (m ? m.priorityOverride || 0 : 0) || Is(e[ne.Qb], 1) || 0,
              execute: g,
            });
          } else du(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(eu);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function eu(a, b) {
    var c,
      d = b.mj,
      e = a.mj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.uj,
        h = b.uj;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function du(a, b) {
    if (Am) {
      var c = function (d) {
        var e = b.fh(Ne[d]) ? "3" : "4",
          f = Xe(Ne[d][ne.Ni], b, []);
        f && f.length && c(f[0].index);
        an(b.id, Ne[d], e);
        var g = Xe(Ne[d][ne.Si], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var iu = !1,
    gu;
  var ou = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (U(70)) {
      var e = fr(ar.J.Wd, K.D, b, void 0, d);
      gr(e);
    }
    if ("gtm.js" === d) {
      if (iu) return !1;
      iu = !0;
    }
    var f,
      g = !1;
    if (cu(b)) f = bu(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      g = !0;
      f = bu(Number.MAX_SAFE_INTEGER);
    }
    $m(b, d);
    var h = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        fh: ss(f),
        Wl: [],
        ij: function () {
          O(6);
          vb("HEALTH", 0);
        },
        Wi: ku(),
        Xi: lu(b),
        Tb: new Ks(function () {
          if (U(70)) {
            var v = fr(ar.J.Bi, K.D, b, void 0, d);
            if (gr(v)) {
              var w = fr(ar.J.Wd, K.D, b, void 0, d);
              hr(v, w);
            }
            if ("gtm.load" === d) {
              var x = fr(ar.J.Kh, K.D);
              if (gr(x)) {
                var y = fr(ar.J.Pf, K.D);
                hr(x, y);
              }
              Ir();
            }
          }
          h && h.apply(h, [].slice.call(arguments, 0));
        }, m),
      },
      p = gf(n);
    g && (p = mu(p));
    if (U(70)) {
      var q = fr(ar.J.Ci, K.D, b, void 0, d);
      if (gr(q)) {
        var r = fr(ar.J.Wd, K.D, b, void 0, d);
        hr(q, r);
      }
    }
    var t = fu(p, n),
      u = !1;
    Ps(n.Tb);
    ("gtm.js" !== d && "gtm.sync" !== d) || Ws(K.D);
    return nu(p, t) || u;
  };
  function lu(a) {
    return function (b) {
      Am && (Yc(b) || cn(a, "input", b));
    };
  }
  function ku() {
    var a = {};
    a.event = xi("event", 1);
    a.ecommerce = xi("ecommerce", 1);
    a.gtm = xi("gtm");
    a.eventModel = xi("eventModel");
    return a;
  }
  function mu(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Ne[c][ne.Qb]);
        if (Mh[d] || void 0 !== Ne[c][ne.nk] || li[d] || Is(d, 2)) b[c] = !0;
      }
    return b;
  }
  function nu(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Ne[c] && !Nh[String(Ne[c][ne.Qb])]) return !0;
    return !1;
  }
  var qu = function (a, b, c, d) {
      pu.push("event", [b, a], c, d);
    },
    ru = function (a, b, c, d) {
      pu.push("get", [a, b], c, d);
    },
    su = function () {
      this.status = 1;
      this.N = {};
      this.h = {};
      this.m = {};
      this.T = null;
      this.C = {};
      this.B = !1;
    },
    tu = function (a, b, c, d) {
      var e = Ta();
      this.type = a;
      this.m = e;
      this.da = b || "";
      this.h = c;
      this.messageContext = d;
    },
    uu = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    vu = function (a, b) {
      var c = So(b);
      return (a.m[c.Z] = a.m[c.Z] || new su());
    },
    wu = function (a, b, c, d) {
      if (d.da) {
        var e = vu(a, d.da),
          f = e.T;
        if (f) {
          var g = Uc(c),
            h = Uc(e.N[d.da]),
            m = Uc(e.C),
            n = Uc(e.h),
            p = Uc(a.B),
            q = {};
          if (Am)
            try {
              q = Uc(pi);
            } catch (v) {
              O(72);
            }
          var r = So(d.da).prefix,
            t = function (v) {
              bn(d.messageContext.eventId, r, v);
              var w = g[P.g.fc];
              w && I(w);
            },
            u = Tp(
              Rp(
                Qp(
                  Pp(
                    Np(
                      Mp(
                        Op(
                          Lp(
                            Kp(
                              Jp(
                                new Ip(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId
                                ),
                                g
                              ),
                              h
                            ),
                            m
                          ),
                          n
                        ),
                        p
                      ),
                      q
                    ),
                    d.messageContext.eventMetadata
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("2");
                    }
                  }
                ),
                function () {
                  if (t) {
                    var v = t;
                    t = void 0;
                    v("3");
                  }
                }
              )
            );
          try {
            bn(d.messageContext.eventId, r, "1"),
              ys(d.type, d.da, u),
              f(d.da, b, d.m, u);
          } catch (v) {
            bn(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  uu.prototype.register = function (a, b, c) {
    var d = vu(this, a);
    3 !== d.status &&
      ((d.T = b), (d.status = 3), c && (Uc(d.h, c), (d.h = c)), this.flush());
  };
  uu.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!So(c)) return;
      if (c) {
        var e = So(c);
        e &&
          1 === vu(this, c).status &&
          ((vu(this, c).status = 2), this.push("require", [{}], e.Z, {}));
      }
      vu(this, c).B && (d.deferrable = !1);
    }
    this.h.push(new tu(a, c, b, d));
    d.deferrable || this.flush();
  };
  uu.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.da || vu(this, f.da).B
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = vu(this, f.da);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.h[0], function (r, t) {
              Uc(ab(r, t), b.B);
            });
            break;
          case "config":
            g = vu(this, f.da);
            e.Db = {};
            l(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  Uc(ab(t, u), r.Db);
                };
              })(e)
            );
            var h = !!e.Db[P.g.Uc];
            delete e.Db[P.g.Uc];
            var m = So(f.da),
              n = m.Z === m.id;
            h || (n ? (g.C = {}) : (g.N[f.da] = {}));
            (g.B && h) || wu(this, P.g.ra, e.Db, f);
            g.B = !0;
            n ? Uc(e.Db, g.C) : (Uc(e.Db, g.N[f.da]), O(70));
            d = !0;
            break;
          case "event":
            g = vu(this, f.da);
            e.Ge = {};
            l(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  Uc(ab(t, u), r.Ge);
                };
              })(e)
            );
            wu(this, f.h[1], e.Ge, f);
            break;
          case "get":
            g = vu(this, f.da);
            var p = {},
              q = ((p[P.g.Oa] = f.h[0]), (p[P.g.cb] = f.h[1]), p);
            wu(this, P.g.Fa, q, f);
        }
        this.h.shift();
        xu(this, f);
      }
      e = { Db: e.Db, Ge: e.Ge };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var xu = function (a, b) {
      if ("require" !== b.type)
        if (b.da)
          for (var c = vu(a, b.da).m[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.m)
                for (var g = f.m[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    yu = function (a, b) {
      var c = pu,
        d = Uc(b);
      Uc(vu(c, a).h, d);
      vu(c, a).h = d;
    },
    pu = new uu();
  var pf;
  var zu = {},
    Au = {},
    Bu = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { Le: d.Le, Ie: d.Ie }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          (d.Le = So(f)),
            d.Le &&
              (Ia(
                hl(),
                (function (p) {
                  return function (q) {
                    return p.Le.Z === q;
                  };
                })(d)
              )
                ? b.push(f)
                : c.push(f));
        else {
          var g = zu[f] || [];
          d.Ie = {};
          g.forEach(
            (function (p) {
              return function (q) {
                return (p.Ie[q] = !0);
              };
            })(d)
          );
          for (var h = gl(), m = 0; m < h.length; m++)
            if (d.Ie[h[m]]) {
              b = b.concat(hl());
              break;
            }
          var n = Au[f] || [];
          n.length && (b = b.concat(n));
        }
      }
      return { vl: b, yl: c };
    },
    Cu = function (a) {
      l(zu, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Du = function (a) {
      l(Au, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Eu = "HA GF G UA AW DC MC".split(" "),
    Fu = !1,
    Gu = !1;
  function Hu(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: mi() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  function Iu(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      1 === a.context.source &&
      0 !== a.parent.ctid.indexOf("GTM-")
    );
  }
  var Ju = void 0,
    Ku = void 0,
    Lu = !1;
  function Mu(a) {
    var b;
    (b = a && a[P.g.Qa]) || (b = pu.B[P.g.Qa]);
    return b;
  }
  var Nu = {
      config: function (a, b) {
        var c = Hu(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Tc(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = So(a[1]);
          if (e) {
            if (!Lu) {
              var f;
              a: {
                if (!K.lf) {
                  var g = il(ll()),
                    h;
                  if (Iu(g))
                    for (var m = g.parent; m; ) {
                      h = m.isDestination;
                      var n = il(m);
                      if (!Iu(n)) {
                        f = { Ll: n, sl: h };
                        break a;
                      }
                      m = n.parent;
                    }
                }
                f = void 0;
              }
              var p = f;
              p && ((Ju = p.Ll), (Ku = p.sl));
              Lu = !0;
            }
            $m(c.eventId, "gtag.config");
            var q = e.Z,
              r = e.id !== q;
            if (r ? -1 === hl().indexOf(q) : -1 === gl().indexOf(q)) {
              if (!U(61) || !d[P.g.fb]) {
                var t = Mu(d);
                r
                  ? ls(q, t, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    })
                  : (void 0 !== Ju && -1 !== Ju.containers.indexOf(q) && O(129),
                    ks(q, t, !0, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    }));
              }
            } else {
              if (Ph && !r && !d[P.g.Uc]) {
                var u = Gu;
                Gu = !0;
                if (u) return;
              }
              Fu || O(43);
              if (!b.noTargetGroup)
                if (r) {
                  Du(e.id);
                  var v = e.id,
                    w = d[P.g.Hd] || "default";
                  w = String(w).split(",");
                  for (var x = 0; x < w.length; x++) {
                    var y = Au[w[x]] || [];
                    Au[w[x]] = y;
                    0 > y.indexOf(v) && y.push(v);
                  }
                } else {
                  Cu(e.id);
                  var A = e.id,
                    B = d[P.g.Hd] || "default";
                  B = B.toString().split(",");
                  for (var D = 0; D < B.length; D++) {
                    var E = zu[B[D]] || [];
                    zu[B[D]] = E;
                    0 > E.indexOf(A) && E.push(A);
                  }
                }
              delete d[P.g.Hd];
              var J = b.eventMetadata || {};
              J.hasOwnProperty("is_external_event") ||
                (J.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = J;
              delete d[P.g.fc];
              var G = r ? [e.id] : hl();
              Ju && (O(128), Ku && O(130));
              for (var N = 0; N < G.length; N++) {
                var Q = Uc(b);
                pu.push("config", [d], G[N], Q);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          O(39);
          var c = Hu(a, b),
            d = a[1];
          "default" === d
            ? pk(a[2])
            : "update" === d
            ? qk(a[2], c)
            : "declare" === d
            ? b.fromContainerExecution && ok(a[2])
            : "core_platform_services" === d && rk(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!Tc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Uc(e)),
            e[P.g.fc] && (g.eventCallback = e[P.g.fc]),
            e[P.g.Cd] && (g.eventTimeout = e[P.g.Cd]));
          var h = Hu(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.Pb];
          void 0 === r &&
            ((r = si(P.g.Pb, 2)), void 0 === r && (r = "default"));
          if (k(r) || Ha(r)) {
            var t = r.toString().replace(/\s+/g, "").split(","),
              u = Bu(t),
              v = u.vl,
              w = u.yl;
            if (w.length)
              for (var x = Mu(q), y = 0; y < w.length; y++) {
                var A = So(w[y]);
                A &&
                  ls(A.Z, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Uo(v);
          } else p = void 0;
          var B = p;
          if (B) {
            $m(m, c);
            for (var D = [], E = 0; E < B.length; E++) {
              var J = B[E],
                G = Uc(b);
              if (-1 !== Eu.indexOf(J.prefix)) {
                var N = Uc(d),
                  Q = G.eventMetadata || {};
                Q.hasOwnProperty("is_external_event") ||
                  (Q.is_external_event = !G.fromContainerExecution);
                G.eventMetadata = Q;
                delete N[P.g.fc];
                qu(c, N, J.id, G);
              }
              D.push(J.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[P.g.Pb] = D.join())
              : delete g.eventModel[P.g.Pb];
            Fu || O(43);
            U(101) &&
              void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Fa(a[3])) {
          var c = So(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Fu || O(43);
            var f = Mu();
            if (
              !Ia(hl(), function (h) {
                return c.Z === h;
              })
            )
              ls(c.Z, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Eu.indexOf(c.prefix)) {
              Hu(a, b);
              var g = {};
              hk(Uc(((g[P.g.Oa] = d), (g[P.g.cb] = e), g)));
              ru(
                d,
                function (h) {
                  I(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Fu = !0;
          var c = Hu(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Fa(a[2])) {
          var b = a[1],
            c = a[2],
            d = pf.m;
          d.h[b] ? d.h[b].push(c) : (d.h[b] = [c]);
          if ((O(74), "all" === a[1])) {
            O(75);
            var e = !1;
            try {
              e = a[2](K.D, "unknown", {});
            } catch (f) {}
            e || O(76);
          }
        } else {
          O(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && Tc(a[1])
          ? (c = Uc(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            Tc(a[2]) || Ha(a[2]) ? (c[a[1]] = Uc(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Hu(a, b),
            e = d.eventId,
            f = d.priorityId;
          Uc(c);
          var g = Uc(c);
          pu.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          U(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Ou = { policy: !0 };
  var Pu = function (a) {
      var b = z[Jh.ka].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Qu = function (a) {
      var b = z[Jh.ka],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Ru = !1,
    Su = [];
  function Tu() {
    if (!Ru) {
      Ru = !0;
      for (var a = 0; a < Su.length; a++) I(Su[a]);
    }
  }
  var Uu = function (a) {
    Ru ? I(a) : Su.push(a);
  };
  var kv = function (a) {
    if (jv(a)) return a;
    this.h = a;
  };
  kv.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var jv = function (a) {
    return !a || "object" !== Rc(a) || Tc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  kv.prototype.getUntrustedMessageValue = kv.prototype.getUntrustedMessageValue;
  var lv = 0,
    mv = {},
    nv = [],
    ov = [],
    pv = !1,
    qv = !1;
  function rv(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var sv = function (a) {
      return z[Jh.ka].push(a);
    },
    tv = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return sv(a);
    },
    uv = function (a, b) {
      var c = Kh[Jh.ka],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function vv(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && vi(e), vi(e, f));
    });
    Zh || (Zh = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = mi()), (a["gtm.uniqueEventId"] = d), vi("gtm.uniqueEventId", d));
    return ou(a);
  }
  function wv(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Na(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function xv() {
    var a;
    if (ov.length) a = ov.shift();
    else if (nv.length) a = nv.shift();
    else return;
    var b;
    var c = a;
    if (pv || !wv(c.message)) b = c;
    else {
      pv = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = mi());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      nv.unshift(h, c);
      if (Am && K.D) {
        var m,
          n = il(ll());
        m = n && n.context;
        var p,
          q = $i(z.location.href);
        p = q.hostname + q.pathname;
        var r = m && m.fromContainerExecution,
          t = m && m.source,
          u = K.D,
          v = K.Gb,
          w = K.lf;
        Lm || (Lm = p);
        Km.push(
          u + ";" + v + ";" + (r ? 1 : 0) + ";" + (t || 0) + ";" + (w ? 1 : 0)
        );
      }
      b = f;
    }
    return b;
  }
  function yv() {
    for (var a = !1, b; !qv && (b = xv()); ) {
      qv = !0;
      delete pi.eventModel;
      ri();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) qv = !1;
      else {
        e.fromContainerExecution && wi();
        try {
          if (Fa(d))
            try {
              d.call(ti);
            } catch (x) {}
          else if (Ha(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = si(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Na(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var r = Nu[d[0]];
                  if (r && (!e.fromContainerExecution || !Ou[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && O(101);
            } else p = d;
            if (p) {
              var t = vv(p, e);
              a = t || a;
              q && t && O(113);
            }
          }
        } finally {
          e.fromContainerExecution && ri(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = mv[String(u)] || [], w = 0; w < v.length; w++)
              ov.push(zv(v[w]));
            v.length && ov.sort(rv);
            delete mv[String(u)];
            u > lv && (lv = u);
          }
          qv = !1;
        }
      }
    }
    return !a;
  }
  function Av() {
    if (U(70)) {
      var a = fr(ar.J.Pf, K.D);
      gr(a);
      if (Bv()) {
        var b = fr(ar.J.Mh, K.D);
        if (gr(b)) {
          var c = fr(ar.J.Rf, K.D);
          hr(b, c);
        }
      }
    }
    var d = yv();
    try {
      Pu(K.D);
    } catch (e) {}
    return d;
  }
  function ot(a) {
    if (lv < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      mv[b] = mv[b] || [];
      mv[b].push(a);
    } else
      ov.push(zv(a)),
        ov.sort(rv),
        I(function () {
          qv || yv();
        });
  }
  function zv(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Cv = function () {
      function a(g) {
        var h = {};
        if (jv(g)) {
          var m = g;
          g = jv(m) ? m.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return { message: g, messageContext: h };
      }
      var b = hc(Jh.ka, []),
        c = (Kh[Jh.ka] = Kh[Jh.ka] || {});
      !0 === c.pruned && O(83);
      mv = mt().get();
      pt();
      Fs(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var g = {};
          b.push(((g.event = "gtm.dom"), g));
        }
      });
      Uu(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var g = {};
          b.push(((g.event = "gtm.load"), g));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var g;
        if (0 < Kh.SANDBOXED_JS_SEMAPHORE) {
          g = [];
          for (var h = 0; h < arguments.length; h++)
            g[h] = new kv(arguments[h]);
        } else g = [].slice.call(arguments, 0);
        var m = g.map(function (r) {
          return a(r);
        });
        nv.push.apply(nv, m);
        var n = d.apply(b, g),
          p = Math.max(100, Number("1000") || 300);
        if (this.length > p)
          for (O(4), c.pruned = !0; this.length > p; ) this.shift();
        var q = "boolean" !== typeof n || n;
        return yv() && q;
      };
      var e = b.slice(0).map(function (g) {
        return a(g);
      });
      nv.push.apply(nv, e);
      if (Bv()) {
        if (U(70)) {
          var f = fr(ar.J.Rf, K.D);
          gr(f);
        }
        I(Av);
      }
    },
    Bv = function () {
      var a = !0;
      return a;
    };
  function Dv(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ta();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Ev(a) {
    return a && 0 === a.indexOf("pending:") ? Dv(a.substr(8)) : !1;
  }
  var Se = {};
  Se.kf = new String("undefined");
  var Ov = function (a) {
    this.h = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Se.kf ? b : a[d]);
      return c.join("");
    };
  };
  Ov.prototype.toString = function () {
    return this.h("undefined");
  };
  Ov.prototype.valueOf = Ov.prototype.toString;
  Se.rk = Ov;
  Se.Jg = {};
  Se.Ak = function (a) {
    return new Ov(a);
  };
  var Pv = {};
  Se.Jl = function (a, b) {
    var c = mi();
    Pv[c] = [a, b];
    return c;
  };
  Se.Zi = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = Pv[c];
      if (d && "function" === typeof d[b]) d[b]();
      Pv[c] = void 0;
    };
  };
  Se.bl = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  Se.El = function (a) {
    if (a === Se.kf) return a;
    var b = mi();
    Se.Jg[b] = a;
    return 'google_tag_manager["' + K.D + '"].macro(' + b + ")";
  };
  Se.xl = function (a, b, c) {
    a instanceof Se.rk && ((a = a.h(Se.Jl(b, c))), (b = Da));
    return { Xk: a, R: b };
  };
  var Qv = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": xc(a, "className"),
        "gtm.elementId": a["for"] || sc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || xc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        xc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Rv = function (a) {
      Kh.hasOwnProperty("autoEventsSettings") || (Kh.autoEventsSettings = {});
      var b = Kh.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Sv = function (a, b, c) {
      Rv(a)[b] = c;
    },
    Tv = function (a, b, c, d) {
      var e = Rv(a),
        f = Ua(e, b, d);
      e[b] = c(f);
    },
    Uv = function (a, b, c) {
      var d = Rv(a);
      return Ua(d, b, c);
    },
    Vv = function (a) {
      return "string" === typeof a ? a : String(mi());
    };
  var Wv = ["input", "select", "textarea"],
    Xv = ["button", "hidden", "image", "reset", "submit"],
    Yv = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > Wv.indexOf(b) ||
        ("input" === b && 0 <= Xv.indexOf(a.type.toLowerCase()))
        ? !1
        : !0;
    },
    Zv = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : H.getElementById(a.form)
        : vc(a, ["form"], 100);
    },
    $v = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Yv(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var aw = !!z.MutationObserver,
    bw = void 0,
    cw = function (a) {
      if (!bw) {
        var b = function () {
          var c = H.body;
          if (c)
            if (aw)
              new MutationObserver(function () {
                for (var e = 0; e < bw.length; e++) I(bw[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              qc(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  I(function () {
                    d = !1;
                    for (var e = 0; e < bw.length; e++) I(bw[e]);
                  }));
              });
            }
        };
        bw = [];
        H.body ? b() : I(b);
      }
      bw.push(a);
    };
  var nw = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((Ta() - e) * g.playbackRate) / 1e3 : 0;
      e = Ta();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, h, m) {
        var n = a(),
          p = n.Wg,
          q =
            void 0 !== m
              ? Math.round(m)
              : void 0 !== h
              ? Math.round(n.Wg * h)
              : Math.round(n.aj),
          r =
            void 0 !== h
              ? Math.round(100 * h)
              : 0 >= p
              ? 0
              : Math.round((q / p) * 100),
          t = H.hidden ? !1 : 0.5 <= Mi(c);
        d();
        var u = void 0;
        void 0 !== b && (u = [b]);
        var v = Qv(c, "gtm.video", u);
        v["gtm.videoProvider"] = "youtube";
        v["gtm.videoStatus"] = g;
        v["gtm.videoUrl"] = n.url;
        v["gtm.videoTitle"] = n.title;
        v["gtm.videoDuration"] = Math.round(p);
        v["gtm.videoCurrentTime"] = Math.round(q);
        v["gtm.videoElapsedTime"] = Math.round(f);
        v["gtm.videoPercent"] = r;
        v["gtm.videoVisible"] = t;
        return v;
      },
      qj: function () {
        e = Ta();
      },
      Xc: function () {
        d();
      },
    };
  };
  var ow = z.clearTimeout,
    pw = z.setTimeout,
    V = function (a, b, c, d) {
      if (cl()) {
        b && I(b);
      } else return mc(a, b, c, d);
    },
    qw = function () {
      return new Date();
    },
    rw = function () {
      return z.location.href;
    },
    sw = function (a) {
      return Yi($i(a), "fragment");
    },
    tw = function (a) {
      return Zi($i(a));
    },
    uw = function (a, b) {
      return si(a, b || 2);
    },
    vw = function (a, b, c) {
      return b ? tv(a, b, c) : sv(a);
    },
    ww = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    xw = function (a, b, c) {
      return Kk(a, b, void 0 === c ? !0 : !!c);
    },
    yw = function (a, b, c) {
      return 0 === Tk(a, b, c);
    },
    zw = function (a, b) {
      if (cl()) {
        b && I(b);
      } else oc(a, b);
    },
    Aw = function (a) {
      return !!Uv(a, "init", !1);
    },
    Bw = function (a) {
      Sv(a, "init", !0);
    },
    Cw = function (a, b, c) {
      Am && (Yc(a) || cn(c, b, a));
    };

  var Dw = Se.xl;
  function $w(a, b) {
    function c(g) {
      var h = $i(g),
        m = Yi(h, "protocol"),
        n = Yi(h, "host", !0),
        p = Yi(h, "port"),
        q = Yi(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function ax(a) {
    return bx(a) ? 1 : 0;
  }
  function bx(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Uc(a, {});
        Uc({ arg1: c[d], any_of: void 0 }, e);
        if (ax(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return Pf(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Lf.length; g++) {
                var h = Lf[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Mf(b, c);
      case "_eq":
        return Qf(b, c);
      case "_ge":
        return Rf(b, c);
      case "_gt":
        return Tf(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Sf(b, c);
      case "_lt":
        return Uf(b, c);
      case "_re":
        return Of(b, c, a.ignore_case);
      case "_sw":
        return Vf(b, c);
      case "_um":
        return $w(b, c);
    }
    return !1;
  }
  function cx(a, b) {
    var c = this;
  }
  cx.O = "addConsentListener";
  var dx;
  var ex = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (dx)
        try {
          a[b]();
        } catch (c) {
          O(77);
        }
      else a[b]();
  };
  function fx(a, b, c) {
    var d = this,
      e;
    return e;
  }
  fx.M = "internal.addDataLayerEventListener";
  function gx(a, b, c) {}
  gx.O = "addDocumentEventListener";
  function hx(a, b, c, d) {}
  hx.O = "addElementEventListener";
  function ix(a) {}
  ix.O = "addEventCallback";
  function mx(a) {}
  mx.M = "internal.addFormAbandonmentListener";
  var nx = {},
    ox = [],
    px = {},
    qx = 0,
    rx = 0;
  function yx(a, b) {}
  yx.M = "internal.addFormInteractionListener";
  function Fx(a, b) {}
  Fx.M = "internal.addFormSubmitListener";
  function Kx(a) {}
  Kx.M = "internal.addGaSendListener";
  var Lx = {},
    Mx = [];
  var Tx = function (a, b) {};
  Tx.M = "internal.addHistoryChangeListener";
  function Ux(a, b, c) {}
  Ux.O = "addWindowEventListener";
  function Vx(a, b) {
    return !0;
  }
  Vx.O = "aliasInWindow";
  function Wx(a, b, c) {}
  Wx.M = "internal.appendRemoteConfigParameter";
  function Xx() {
    var a = 2;
    return a;
  }
  function Yx(a, b) {
    var c;
    L(F(this), ["path:!string"], [a]);
    M(this, "access_globals", "execute", a);
    for (
      var d = a.split("."), e = z, f = e[d[0]], g = 1;
      f && g < d.length;
      g++
    )
      if (((e = f), (f = f[d[g]]), e === z || e === H)) return;
    if ("function" !== Rc(f)) return;
    for (var h = Xx(), m = [], n = 1; n < arguments.length; n++)
      m.push(Wc(arguments[n], this.h, h));
    var p = (0, this.h.N)(f, e, m);
    c = Vc(p, this.h, h);
    void 0 === c && void 0 !== p && O(45);
    return c;
  }
  Yx.O = "callInWindow";
  function Zx(a) {}
  Zx.O = "callLater";
  function $x(a) {}
  $x.M = "callOnDomReady";
  function ay(a) {}
  ay.M = "callOnWindowLoad";
  function by(a) {
    var b;
    return b;
  }
  by.M = "internal.computeGtmParameter";
  function cy(a, b) {
    var c;
    L(F(this), ["key:!string", "dataLayerVersion:?number"], arguments),
      M(this, "read_data_layer", a),
      (c = 2 !== (b || 2) ? si(a, 1) : ui(a, [z, H]));
    var d = Vc(c, this.h, Xx());
    void 0 === d && void 0 !== c && O(45);
    return d;
  }
  cy.O = "copyFromDataLayer";
  function dy(a) {
    var b;
    L(F(this), ["path:!string"], arguments);
    M(this, "access_globals", "read", a);
    var c = a.split("."),
      d = $a(c, [z, H]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = Vc(e, this.h, Xx());
    void 0 === b && void 0 !== e && O(45);
    return b;
  }
  dy.O = "copyFromWindow";
  function ey(a, b) {
    var c;
    return c;
  }
  ey.M = "internal.copyPreHit";
  function fy(a, b) {
    var c = null,
      d = Xx();
    return Vc(c, this.h, d);
  }
  fy.O = "createArgumentsQueue";
  function gy(a) {
    var b;
    return Vc(b, this.h, Xx());
  }
  gy.O = "createQueue";
  function hy(a) {
    if (!a) return {};
    var b = a.Gk;
    return Hs(b.type, b.index, b.name);
  }
  function iy(a) {
    return a ? { originatingEntity: hy(a) } : {};
  }
  function jy(a) {}
  jy.M = "internal.declareConsentState";
  var ky = {},
    ly = [],
    my = {},
    ny = 0,
    oy = 0;
  function uy(a, b) {
    var c = this;
    return b;
  }
  uy.M = "internal.enableAutoEventOnFormInteraction";
  function zy(a, b) {
    var c = this;
    return b;
  }
  zy.M = "internal.enableAutoEventOnFormSubmit";
  function Ey() {
    var a = this;
  }
  Ey.M = "internal.enableAutoEventOnGaSend";
  var Fy = {},
    Gy = [];
  function Ny(a, b) {
    var c = this;
    return b;
  }
  Ny.M = "internal.enableAutoEventOnHistoryChange";
  function Ry(a, b) {
    var c = this;
    return b;
  }
  Ry.M = "internal.enableAutoEventOnLinkClick";
  var Sy, Ty;
  function bz(a, b) {
    var c = this;
    return b;
  }
  bz.M = "internal.enableAutoEventOnScroll";
  var bc = ca(["data-gtm-yt-inspected-"]),
    cz = ["www.youtube.com", "www.youtube-nocookie.com"],
    dz,
    ez = !1;
  function oz(a, b) {
    var c = this;
    return b;
  }
  oz.M = "internal.enableAutoEventOnYouTubeActivity";
  var pz;
  function qz(a) {
    var b = !1;
    return b;
  }
  qz.M = "internal.evaluateMatchingRules";
  function Az(a, b) {
    var c = !1;
    return c;
  }
  Az.M = "internal.evaluatePredicates";
  var Bz = function (a) {
    var b;
    return b;
  };
  function Cz(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  Cz.O = "getCookieValues";
  function Dz() {
    return zi();
  }
  Dz.M = "internal.getCountryCode";
  function Ez() {
    var a = [];
    return Vc(a);
  }
  Ez.M = "internal.getDestinationIds";
  function Fz(a) {
    var b = null;
    return b;
  }
  Fz.O = "getElementById";
  var Gz = {};
  Gz.enableAdsConversionValidation = U(83);
  Gz.enableAdsHistoryChangeEvents = U(36);
  Gz.enableAlwaysSendFormStart = U(38);
  Gz.enableCcdAutoRedaction = U(92);
  Gz.enableCcdEmForm = U(82);
  Gz.enableCcdEventEditingAndCreation = U(26);
  Gz.enableCcdPreAutoPiiDetection = U(49);
  Gz.enableCcdUserData = U(16);
  Gz.enableEesPagePath = U(43);
  Gz.enableEuidAutoMode = U(37);
  Gz.enableGa4OnoRemarketing = U(34);
  Gz.enableGaGamWindowSet = U(67);
  Gz.includeQueryInEesPagePath = U(57);
  Gz.pixieSetCorePlatformServices = U(105);
  Gz.useEnableAutoEventOnFormApis = U(91);
  Gz.autoPiiEligible = Di();
  function Hz() {
    return Vc(Gz);
  }
  Hz.M = "internal.getFlags";
  function Iz(a, b) {
    var c;
    return c;
  }
  Iz.M = "internal.getProductSettingsParameter";
  function Jz(a, b) {
    var c;
    return c;
  }
  Jz.O = "getQueryParameters";
  function Kz(a, b) {
    var c;
    return c;
  }
  Kz.O = "getReferrerQueryParameters";
  function Lz(a) {
    var b = "";
    return b;
  }
  Lz.O = "getReferrerUrl";
  function Mz() {
    return Ai();
  }
  Mz.M = "internal.getRegionCode";
  function Nz(a, b) {
    var c;
    return c;
  }
  Nz.M = "internal.getRemoteConfigParameter";
  function Oz(a) {
    var b = "";
    return b;
  }
  Oz.O = "getUrl";
  function Pz() {
    M(this, "get_user_agent");
    return fc.userAgent;
  }
  Pz.O = "getUserAgent";
  function cA() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var dA = function () {
      var a = cA();
      a.hid = a.hid || Ka();
      return a.hid;
    },
    eA = function (a, b) {
      var c = cA();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var BA = function () {
      var a = !0;
      (tm(7) && tm(9) && tm(10)) || (a = !1);
      return a;
    },
    CA = function () {
      var a = !0;
      (tm(3) && tm(4)) || (a = !1);
      return a;
    };
  var cB = window,
    dB = document,
    eB = function (a) {
      var b = cB._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        dB.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === cB["ga-disable-" + a])
      )
        return !0;
      try {
        var c = cB.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Ek("AMP_TOKEN", String(dB.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return dB.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function kB(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[P.g.Ra] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var tB = function (a, b) {};
  function sB(a, b) {
    var c = function () {};
    return c;
  }
  function uB(a, b, c) {}
  var nC = function (a, b) {
      if (!b.F) {
        var c = S(b, P.g.Oa),
          d = S(b, P.g.cb),
          e = S(b, c);
        if (void 0 === e) {
          var f = void 0;
          kC.hasOwnProperty(c)
            ? (f = kC[c])
            : lC.hasOwnProperty(c) && (f = lC[c]);
          1 === f && (f = mC(c));
          k(f)
            ? Ss()(function () {
                var g = Ss().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    oC = function (a, b) {
      var c = a[P.g.Mb],
        d = b + ".",
        e = a[P.g.V] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[P.g.vb];
      e = String(e).replace(/\s+/g, "").split(",");
      var h = Ss();
      h(d + "require", "linker");
      h(d + "linker:autoLink", e, f, g);
    },
    sC = function (a, b, c) {
      if (bk() && (!c.F || !pC[a])) {
        var d = !tk(P.g.U),
          e = function (f) {
            var g,
              h,
              m = Ss(),
              n = qC(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.F || rC(b, n.createOnlyFields)) {
              c.F &&
                ((g = "gtm" + mi()),
                (h = n.createOnlyFields),
                n.gtmTrackerName && (h.name = g));
              m(function () {
                var t = m.getByName(b);
                t && (p = t.get("clientId"));
                c.F || m.remove(b);
              });
              m("create", a, c.F ? h : n.createOnlyFields);
              d &&
                tk(P.g.U) &&
                ((d = !1),
                m(function () {
                  var t = Ss().getByName(c.F ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.F
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&sst.gcut"] = Gh[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&sst.gcut"] = Gh[f])),
                    t.set(n.fieldsToSet),
                    c.F
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.F &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        Bk(function () {
          return e(P.g.U);
        }, P.g.U);
        Bk(function () {
          return e(P.g.I);
        }, P.g.I);
        c.F && (pC[a] = !0);
      }
    },
    tC = function (a, b) {
      is() && b && (a[P.g.Lb] = b);
    },
    CC = function (a, b, c) {
      function d() {
        var G = S(c, P.g.ac);
        h(function () {
          if (!c.F && Tc(G)) {
            var N = u.fieldsToSend,
              Q = m().getByName(n),
              ea;
            for (ea in G)
              if (
                G.hasOwnProperty(ea) &&
                /^(dimension|metric)\d+$/.test(ea) &&
                void 0 != G[ea]
              ) {
                var na = Q.get(mC(G[ea]));
                uC(N, ea, na);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: G });
        }
      }
      var f = a,
        g = "/scripts/analytics.js",
        h = c.F ? Us(S(c, "gaFunctionName")) : Us();
      if (Fa(h)) {
        var m = Ss,
          n;
        c.F
          ? (n = S(c, "name") || S(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (G) {
            var N = [].slice.call(arguments, 0);
            N[0] = n ? n + "." + N[0] : "" + N[0];
            h.apply(window, N);
          },
          q = function (G) {
            var N = function (ia, ja) {
                for (var T = 0; ja && T < ja.length; T++) p(ia, ja[T]);
              },
              Q = c.F,
              ea = Q ? vC(u) : wC(b, c);
            if (ea) {
              var na = {};
              tC(na, G);
              p("require", "ec", "ec.js", na);
              Q && ea.Tg && p("set", "&cu", ea.Tg);
              var X = ea.action;
              if (Q || "impressions" === X)
                if ((N("ec:addImpression", ea.gj), !Q)) return;
              if ("promo_click" === X || "promo_view" === X || (Q && ea.ze)) {
                var R = ea.ze;
                N("ec:addPromo", R);
                if (R && 0 < R.length && "promo_click" === X) {
                  Q ? p("ec:setAction", X, ea.jb) : p("ec:setAction", X);
                  return;
                }
                if (!Q) return;
              }
              "promo_view" !== X &&
                "impressions" !== X &&
                (N("ec:addProduct", ea.sc), p("ec:setAction", X, ea.jb));
            }
          },
          r = function (G) {
            if (G) {
              var N = {};
              if (Tc(G))
                for (var Q in xC) xC.hasOwnProperty(Q) && yC(xC[Q], Q, G[Q], N);
              tC(N, x);
              p("require", "linkid", N);
            }
          },
          t = function () {
            if (cl()) {
            } else {
              var G = S(c, P.g.si);
              G &&
                (p("require", G, { dataLayer: Jh.ka }), p("require", "render"));
            }
          },
          u = qC(n, b, c),
          v = function (G, N, Q) {
            Q && (N = "" + N);
            u.fieldsToSend[G] = N;
          };
        !c.F &&
          rC(n, u.createOnlyFields) &&
          (h(function () {
            m() && m().remove(n);
          }),
          (zC[n] = !1));
        h("create", f, u.createOnlyFields);
        if (u.createOnlyFields[P.g.Lb] && !c.F) {
          var w =
            Sh || Uh ? hs(u.createOnlyFields[P.g.Lb], "/analytics.js") : void 0;
          w && (g = w);
        }
        var x = c.F ? u.fieldsToSet[P.g.Lb] : u.createOnlyFields[P.g.Lb];
        if (x) {
          var y = c.F ? u.fieldsToSet[P.g.Ed] : u.createOnlyFields[P.g.Ed];
          y && !zC[n] && ((zC[n] = !0), h(Xs(n, y)));
        }
        c.F
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[P.g.ya];
        A && A[P.g.V] && oC(A, n);
        p("set", u.fieldsToSet);
        if (c.F) {
          if (u.enableLinkId) {
            var B = {};
            tC(B, x);
            p("require", "linkid", "linkid.js", B);
          }
          bk() && sC(f, n, c);
        }
        if (b === P.g.Xb)
          if (c.F) {
            e();
            if (u.remarketingLists) {
              var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: D });
            }
            q(x);
            p("send", "pageview");
            u.createOnlyFields._useUp && Vs(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === P.g.ra
            ? (t(),
              fp(f, c),
              S(c, P.g.ib) && (Ho(["aw", "dc"]), Vs(n + ".")),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              sC(f, n, c))
            : b === P.g.Fa
            ? nC(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.F
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", Oa(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.F) ||
              ("track_social" === b && c.F
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.F || AC[b]) && q(x),
                  c.F && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", Oa(u.value))),
              p("send", u.fieldsToSend));
        if (!BC && !c.F) {
          BC = !0;
          var E = function () {
              c.W();
            },
            J = function () {
              m().loaded || E();
            };
          cl() ? I(J) : mc(g, J, E);
        }
      } else I(c.W);
    },
    DC = function (a, b, c, d) {
      Ck(
        function () {
          CC(a, b, d);
        },
        [P.g.U, P.g.I]
      );
    },
    FC = function (a) {
      function b(e) {
        function f(h, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              g[h] = e[p];
              break;
            }
          }
        }
        var g = Uc(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;
          else {
            for (var h = "", m = 0; m < EC.length; m++)
              void 0 !== e[EC[m]] && (h && (h += "/"), (h += e[EC[m]]));
            h && (g.category = h);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Tc(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    GC = function (a) {
      return tk(a);
    },
    HC = !1;
  var BC,
    zC = {},
    pC = {},
    IC = {},
    JC = Object.freeze(
      ((IC.page_hostname = 1),
      (IC[P.g.aa] = 1),
      (IC[P.g.rb] = 1),
      (IC[P.g.Ma] = 1),
      (IC[P.g.Ca] = 1),
      (IC[P.g.Na] = 1),
      (IC[P.g.Zb] = 1),
      (IC[P.g.Mc] = 1),
      (IC[P.g.Ha] = 1),
      (IC[P.g.ab] = 1),
      (IC[P.g.ja] = 1),
      (IC[P.g.Nb] = 1),
      (IC[P.g.Da] = 1),
      (IC[P.g.wb] = 1),
      IC)
    ),
    KC = {},
    kC = Object.freeze(
      ((KC.client_storage = "storage"),
      (KC.sample_rate = 1),
      (KC.site_speed_sample_rate = 1),
      (KC.store_gac = 1),
      (KC.use_amp_client_id = 1),
      (KC[P.g.Ya] = 1),
      (KC[P.g.wa] = "storeGac"),
      (KC[P.g.Ma] = 1),
      (KC[P.g.Ca] = 1),
      (KC[P.g.Na] = 1),
      (KC[P.g.Zb] = 1),
      (KC[P.g.Mc] = 1),
      (KC[P.g.ab] = 1),
      KC)
    ),
    LC = {},
    MC = Object.freeze(
      ((LC._cs = 1),
      (LC._useUp = 1),
      (LC.allowAnchor = 1),
      (LC.allowLinker = 1),
      (LC.alwaysSendReferrer = 1),
      (LC.clientId = 1),
      (LC.cookieDomain = 1),
      (LC.cookieExpires = 1),
      (LC.cookieFlags = 1),
      (LC.cookieName = 1),
      (LC.cookiePath = 1),
      (LC.cookieUpdate = 1),
      (LC.legacyCookieDomain = 1),
      (LC.legacyHistoryImport = 1),
      (LC.name = 1),
      (LC.sampleRate = 1),
      (LC.siteSpeedSampleRate = 1),
      (LC.storage = 1),
      (LC.storeGac = 1),
      (LC.useAmpClientId = 1),
      (LC._cd2l = 1),
      LC)
    ),
    NC = Object.freeze({ anonymize_ip: 1 }),
    OC = {},
    lC = Object.freeze(
      ((OC.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (OC.app_id = 1),
      (OC.app_installer_id = 1),
      (OC.app_name = 1),
      (OC.app_version = 1),
      (OC.description = "exDescription"),
      (OC.fatal = "exFatal"),
      (OC.language = 1),
      (OC.page_hostname = "hostname"),
      (OC.transport_type = "transport"),
      (OC[P.g.sa] = "currencyCode"),
      (OC[P.g.qg] = 1),
      (OC[P.g.ja] = "location"),
      (OC[P.g.Nb] = "page"),
      (OC[P.g.Da] = "referrer"),
      (OC[P.g.wb] = "title"),
      (OC[P.g.cf] = 1),
      (OC[P.g.za] = 1),
      OC)
    ),
    PC = {},
    QC = Object.freeze(
      ((PC.content_id = 1),
      (PC.event_action = 1),
      (PC.event_category = 1),
      (PC.event_label = 1),
      (PC.link_attribution = 1),
      (PC.name = 1),
      (PC[P.g.ya] = 1),
      (PC[P.g.pg] = 1),
      (PC[P.g.Pa] = 1),
      (PC[P.g.fa] = 1),
      PC)
    ),
    RC = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    EC = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    SC = {},
    xC = Object.freeze(
      ((SC.levels = 1), (SC[P.g.Ca] = "duration"), (SC[P.g.Zb] = 1), SC)
    ),
    TC = {},
    UC = Object.freeze(
      ((TC.anonymize_ip = 1),
      (TC.fatal = 1),
      (TC.send_page_view = 1),
      (TC.store_gac = 1),
      (TC.use_amp_client_id = 1),
      (TC[P.g.wa] = 1),
      (TC[P.g.qg] = 1),
      TC)
    ),
    yC = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (UC[b] && (c = Pa(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[mC(b)] = c;
        else if (k(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    mC = function (a) {
      return a && k(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    VC = {},
    AC = Object.freeze(
      ((VC.checkout_progress = 1),
      (VC.select_content = 1),
      (VC.set_checkout_option = 1),
      (VC[P.g.Ac] = 1),
      (VC[P.g.Bc] = 1),
      (VC[P.g.Vb] = 1),
      (VC[P.g.Cc] = 1),
      (VC[P.g.Hb] = 1),
      (VC[P.g.Wb] = 1),
      (VC[P.g.Ib] = 1),
      (VC[P.g.Ka] = 1),
      (VC[P.g.Dc] = 1),
      (VC[P.g.La] = 1),
      VC)
    ),
    WC = {},
    XC = Object.freeze(
      ((WC.checkout_progress = 1),
      (WC.set_checkout_option = 1),
      (WC[P.g.Uf] = 1),
      (WC[P.g.Vf] = 1),
      (WC[P.g.Ac] = 1),
      (WC[P.g.Bc] = 1),
      (WC[P.g.Wf] = 1),
      (WC[P.g.Vb] = 1),
      (WC[P.g.Ka] = 1),
      (WC[P.g.Dc] = 1),
      (WC[P.g.Xf] = 1),
      WC)
    ),
    YC = {},
    ZC = Object.freeze(
      ((YC.generate_lead = 1),
      (YC.login = 1),
      (YC.search = 1),
      (YC.select_content = 1),
      (YC.share = 1),
      (YC.sign_up = 1),
      (YC.view_search_results = 1),
      (YC[P.g.Cc] = 1),
      (YC[P.g.Hb] = 1),
      (YC[P.g.Wb] = 1),
      (YC[P.g.Ib] = 1),
      (YC[P.g.La] = 1),
      YC)
    ),
    $C = function (a) {
      var b = "general";
      XC[a]
        ? (b = "ecommerce")
        : ZC[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    aD = {},
    bD = Object.freeze(
      ((aD.view_search_results = 1),
      (aD[P.g.Hb] = 1),
      (aD[P.g.Ib] = 1),
      (aD[P.g.La] = 1),
      aD)
    ),
    uC = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    cD = function (a) {
      if (Ha(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    qC = function (a, b, c) {
      var d = function (Q) {
          return S(c, Q);
        },
        e = {},
        f = {},
        g = {},
        h = {},
        m = cD(d(P.g.ji));
      !c.F && m && uC(f, "exp", m);
      g["&gtm"] = pl(!0);
      U(69) && !c.F && (g._no_slc = !0);
      bk() && (h._cs = GC);
      var n = d(P.g.ac);
      if (!c.F && Tc(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && uC(f, p, q);
          }
      for (var r = !c.F, t = Fp(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.F) {
          var w = d(v);
          RC.hasOwnProperty(v)
            ? (e[v] = w)
            : MC.hasOwnProperty(v)
            ? (h[v] = w)
            : (g[v] = w);
        } else {
          var x = void 0;
          x = v !== P.g.ba ? d(v) : Gp(c, v);
          if (QC.hasOwnProperty(v)) yC(QC[v], v, x, e);
          else if (NC.hasOwnProperty(v)) yC(NC[v], v, x, g);
          else if (lC.hasOwnProperty(v)) yC(lC[v], v, x, f);
          else if (kC.hasOwnProperty(v)) yC(kC[v], v, x, h);
          else if (/^(dimension|metric|content_group)\d+$/.test(v))
            yC(1, v, x, f);
          else if (v === P.g.ba) {
            if (!HC) {
              var y = db(x);
              y && (f["&did"] = y);
            }
            var A = void 0,
              B = void 0;
            b === P.g.ra
              ? (A = db(Gp(c, v), "."))
              : ((A = db(Gp(c, v, 1), ".")), (B = db(Gp(c, v, 2), ".")));
            A && (f["&gdid"] = A);
            B && (f["&edid"] = B);
          } else
            v === P.g.Ha && 0 > t.indexOf(P.g.Zb) && (h.cookieName = x + "_ga");
          U(96) &&
            JC[v] &&
            (c.m.hasOwnProperty(v) ||
              (b === P.g.ra && c.h.hasOwnProperty(v))) &&
            (r = !1);
        }
      }
      U(96) && r && (f["&jsscut"] = "1");
      (!1 !== d(P.g.Oe) && !1 !== d(P.g.rb) && BA()) ||
        (g.allowAdFeatures = !1);
      (!1 !== d(P.g.aa) && CA()) || (g.allowAdPersonalizationSignals = !1);
      !c.F && d(P.g.ib) && (h._useUp = !0);
      if (c.F) {
        h.name = h.name || e.gtmTrackerName;
        var D = g.hitCallback;
        g.hitCallback = function () {
          Fa(D) && D();
          c.R();
        };
      } else {
        uC(h, "cookieDomain", "auto");
        uC(g, "forceSSL", !0);
        uC(e, "eventCategory", $C(b));
        bD[b] && uC(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? uC(e, "eventLabel", d(P.g.pg))
          : "search" === b || "view_search_results" === b
          ? uC(e, "eventLabel", d(P.g.zi))
          : "select_content" === b && uC(e, "eventLabel", d(P.g.ei));
        var E = e[P.g.ya] || {},
          J = E[P.g.jc];
        J || (0 != J && E[P.g.V])
          ? (h.allowLinker = !0)
          : !1 === J && uC(h, "useAmpClientId", !1);
        f.hitCallback = c.R;
        h.name = a;
      }
      bk() &&
        ((g["&gcs"] = uk()),
        U(106) && (g["&gcd"] = yk()),
        tk(P.g.U) || (h.storage = "none"),
        tk(P.g.I) || ((g.allowAdFeatures = !1), (h.storeGac = !1)));
      var G = S(c, P.g.Qa) || d(P.g.Lb),
        N = d(P.g.Ed);
      G && (c.F || (h[P.g.Lb] = G), (h._cd2l = !0));
      N && !c.F && (h[P.g.Ed] = N);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e;
    },
    vC = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Tg = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.gj = "impressions" === b.translateIfKeyEquals ? FC(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.ze = "promoView" === b.translateIfKeyEquals ? FC(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.ze = "promoClick" === b.translateIfKeyEquals ? FC(f) : f;
        c.jb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var h = b[g].products;
          c.sc = "products" === b.translateIfKeyEquals ? FC(h) : h;
          c.jb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    wC = function (a, b) {
      function c(u) {
        return {
          id: d(P.g.ma),
          affiliation: d(P.g.ag),
          revenue: d(P.g.fa),
          tax: d(P.g.Ue),
          shipping: d(P.g.Nc),
          coupon: d(P.g.cg),
          list: d(P.g.Te) || d(P.g.yd) || u,
        };
      }
      for (
        var d = function (u) {
            return S(b, u);
          },
          e = d(P.g.ca),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][P.g.Te] || e[g][P.g.yd]);
        g++
      );
      var h = d(P.g.ac);
      if (Tc(h))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in h)
            h.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != h[p] &&
              uC(n, p, n[h[p]]);
        }
      var q = null,
        r = d(P.g.ii);
      if (a === P.g.Ka || a === P.g.Dc) q = { action: a, jb: c(), sc: FC(e) };
      else if (a === P.g.Ac) q = { action: "add", jb: c(), sc: FC(e) };
      else if (a === P.g.Bc) q = { action: "remove", jb: c(), sc: FC(e) };
      else if (a === P.g.La) q = { action: "detail", jb: c(f), sc: FC(e) };
      else if (a === P.g.Hb) q = { action: "impressions", gj: FC(e) };
      else if (a === P.g.Ib) q = { action: "promo_view", ze: FC(r) || FC(e) };
      else if (("select_content" === a && r && 0 < r.length) || a === P.g.Wb)
        q = { action: "promo_click", ze: FC(r) || FC(e) };
      else if ("select_content" === a || a === P.g.Cc)
        q = {
          action: "click",
          jb: { list: d(P.g.Te) || d(P.g.yd) || f },
          sc: FC(e),
        };
      else if (a === P.g.Vb || "checkout_progress" === a) {
        var t = { step: a === P.g.Vb ? 1 : d(P.g.Se), option: d(P.g.Re) };
        q = { action: "checkout", sc: FC(e), jb: Uc(c(), t) };
      } else
        "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            jb: { step: d(P.g.Se), option: d(P.g.Re) },
          });
      q && (q.Tg = d(P.g.sa));
      return q;
    },
    dD = {},
    rC = function (a, b) {
      var c = dD[a];
      dD[a] = Uc(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var eD = sB;
  function gD(a, b, c) {
    var d = this;
  }
  gD.M = "internal.gtagConfig";
  function hD() {
    var a = {};
    return a;
  }
  function jD(a, b) {}
  jD.O = "gtagSet";
  function kD(a, b) {}
  kD.O = "injectHiddenIframe";
  var lD = {};
  function nD(a, b, c, d) {}
  var oD = Object.freeze({ dl: 1, id: 1 }),
    pD = {};
  function qD(a, b, c, d) {}
  nD.O = "injectScript";
  qD.M = "internal.injectScript";
  function rD(a) {
    var b = !0;
    return b;
  }
  rD.O = "isConsentGranted";
  var sD = function () {
    var a = Fg(function (b) {
      this.h.h.log("error", b);
    });
    a.O = "JSON";
    return a;
  };
  var tD = function (a) {
    this.containerId = a;
  };
  function uD(a, b) {
    var c = this,
      d = null;
    return d;
  }
  uD.M = "internal.loadGoogleTag";
  var vD = function () {
      return !1;
    },
    wD = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var xD = ["textContent", "value", "tagName", "children", "childElementCount"];
  function yD(a) {
    var b;
    return b;
  }
  yD.M = "internal.locateUserData";
  function AD() {
    try {
      M(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = Wc(a[b], this.h);
    console.log.apply(console, a);
  }
  AD.O = "logToConsole";
  function BD(a) {
    var b = void 0;
    return b;
  }
  BD.O = "parseUrl";
  function CD(a) {}
  CD.M = "internal.processAsNewEvent";
  function DD(a, b) {
    var c = !1;
    return c;
  }
  DD.O = "queryPermission";
  function ED() {
    var a = "";
    return a;
  }
  ED.O = "readCharacterSet";
  function FD() {
    var a = "";
    return a;
  }
  FD.O = "readTitle";
  function GD(a, b) {
    var c = this;
  }
  GD.M = "internal.registerCcdCallback";
  var HD = Object.freeze(["config", "event", "get", "set"]);
  function ID(a, b, c) {}
  ID.M = "internal.registerGtagCommandListener";
  function JD(a, b) {
    var c = !1;
    return c;
  }
  JD.M = "internal.removeDataLayerEventListener";
  function KD() {}
  KD.O = "resetDataLayer";
  function LD(a, b, c, d) {}
  LD.M = "internal.sendGtagEvent";
  function MD(a, b, c) {}
  MD.O = "sendPixel";
  function ND(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  ND.O = "setCookie";
  function OD(a, b) {}
  OD.O = "setCorePlatformServices";
  function PD(a) {}
  PD.O = "setDefaultConsentState";
  function QD(a, b) {}
  QD.M = "internal.setDelegatedConsentType";
  function RD(a, b, c) {
    return !1;
  }
  RD.O = "setInWindow";
  function SD(a, b, c) {}
  SD.M = "internal.setProductSettingsParameter";
  function TD(a, b, c) {}
  TD.M = "internal.setRemoteConfigParameter";
  function UD(a, b, c, d) {
    var e = this;
  }
  UD.O = "sha256";
  function VD(a, b, c) {}
  VD.M = "internal.sortRemoteConfigParameters";
  var WD = {},
    XD = {};
  WD.O = "templateStorage";
  WD.getItem = function (a) {
    var b = null;
    return b;
  };
  WD.setItem = function (a, b) {};
  WD.removeItem = function (a) {};
  WD.clear = function () {};
  var YD = function (a) {
    var b;
    return b;
  };
  function ZD(a) {}
  ZD.O = "updateConsentState";
  var $D = function () {
    var a = new Pg(),
      b = function (d) {
        return Rg(a, d.M, d);
      },
      c = function (d) {
        return a.add(d.O, d);
      };
    c(cx);
    c(ix);
    c(Vx);
    c(Yx);
    c(Zx);
    c(cy);
    c(dy);
    c(fy);
    c(sD());
    c(gy);
    c(Cz);
    c(Jz);
    c(Kz);
    c(Lz);
    c(Oz);
    c(jD);
    c(kD);
    c(nD);
    c(rD);
    c(AD);
    c(BD);
    c(DD);
    c(ED);
    c(FD);
    c(MD);
    c(ND);
    c(PD);
    c(RD);
    c(UD);
    c(WD);
    c(ZD);
    a.add("Math", pg());
    a.add("Object", Ng);
    a.add("TestHelper", Sg());
    a.add("assertApi", lg);
    a.add("assertThat", mg);
    a.add("decodeUri", rg);
    a.add("decodeUriComponent", sg);
    a.add("encodeUri", tg);
    a.add("encodeUriComponent", ug);
    a.add("fail", Ag);
    a.add("generateRandom", Bg);
    a.add("getContainerVersion", Cg);
    a.add("getTimestamp", Dg);
    a.add("getTimestampMillis", Dg);
    a.add("getType", Eg);
    a.add("makeInteger", Gg);
    a.add("makeNumber", Hg);
    a.add("makeString", Ig);
    a.add("makeTableMap", Jg);
    a.add("mock", Mg);
    a.add("fromBase64", Bz, !("atob" in z));
    a.add("localStorage", wD, !vD());
    a.add("toBase64", YD, !("btoa" in z));
    b(fx);
    b(yx);
    b(Fx);
    b(Kx);
    b(Tx);
    b(Wx);
    b(ay);
    b(ey);
    b(qg);
    b(jy);
    b(uy);
    b(zy);
    b(Ey);
    b(Ny);
    b(Ry);
    b(bz);
    b(oz);
    b(vg);
    b(qz);
    b(Dz);
    b(Ez);
    b(Hz);
    b(Iz);
    b(Mz);
    b(Nz);
    b(gD);
    b(qD);
    b(uD);
    b(yD);
    b(CD);
    b(GD);
    b(ID);
    b(JD);
    b(LD);
    b(QD);
    b(SD);
    b(TD);
    b(VD);
    b(Tg);
    Rg(a, "internal.GtagSchema", hD());

    U(105) && c(OD);
    return function (d) {
      var e;
      if (a.h.hasOwnProperty(d)) e = a.get(d, this);
      else {
        var f;
        if ((f = a.m.hasOwnProperty(d))) {
          var g = !1,
            h = this.h.h;
          if (h) {
            var m = h.oe();
            if (m) {
              0 !== m.indexOf("__cvt_") && (g = !0);
            }
          } else g = !0;
          f = g;
        }
        if (f) {
          var n = a.m.hasOwnProperty(d) ? a.m[d] : void 0;
          e = n;
        } else throw Error(d + " is not a valid API name.");
      }
      return e;
    };
  };
  var aE = function () {
      return !1;
    },
    bE = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var cE;
  function dE() {
    var a = cE;
    return function (b, c, d) {
      var e = d && d.event;
      eE(c);
      var f = new jb();
      l(c, function (q, r) {
        var t = Vc(r);
        void 0 === t && void 0 !== r && O(44);
        f.set(q, t);
      });
      a.h.h.C = df();
      var g = {
        xk: qf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        vf:
          void 0 !== e
            ? function (q) {
                return e.Tb.vf(q);
              }
            : void 0,
        oe: function () {
          return b;
        },
        log: function () {},
        Gk: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (aE()) {
        var h = bE(),
          m = void 0,
          n = void 0;
        g.Xa = {
          Ch: [],
          de: {},
          kb: function (q, r, t) {
            1 === r && (m = q);
            7 === r && (n = t);
            h(q, r, t);
          },
          oh: Kg(),
        };
        g.log = function (q, r) {
          if (m) {
            var t = Array.prototype.slice.call(arguments, 1);
            h(m, 4, { level: q, source: n, message: t });
          }
        };
      }
      var p = me(a, g, [b, f]);
      a.h.h.C = void 0;
      p instanceof ra && "return" === p.h && (p = p.m);
      return Wc(p);
    };
  }
  function eE(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Fa(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    Fa(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function fE() {
    cE.h.h.N = function (a, b, c) {
      Kh.SANDBOXED_JS_SEMAPHORE = Kh.SANDBOXED_JS_SEMAPHORE || 0;
      Kh.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Kh.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function gE(a) {
    void 0 !== a &&
      l(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          bi[e] = bi[e] || [];
          bi[e].push(b);
        }
      });
  }
  var jE = encodeURI,
    Y = encodeURIComponent,
    tE = function (a, b, c) {
      pc(a, b, c);
    },
    uE = function (a, b) {
      if (!a) return !1;
      var c = Yi($i(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    vE = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { o: {} };
  (Z.o.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.s = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.o.f = ["google"]),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.s = "f";
        Z.__f.isVendorTemplate = !0;
        Z.__f.priorityOverride = 0;
        Z.__f.isInfrastructure = !1;
      })(function (a) {
        var b = uw("gtm.referrer", 1) || H.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Yi(
                $i(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : tw(String(b))
          : String(b);
      });
    })();
  (Z.o.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.s = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var m = c[h],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!k(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          X: a,
        };
      });
    })();
  (Z.o.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.s = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : uw("gtm.url", 1)) || rw();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return tw(String(c));
        var e = $i(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? Ha(h)
                ? (n = h)
                : (n = String(h).replace(/\s+/g, "").split(","))
              : (n = [String(h)]);
            for (var p = 0; p < n.length; p++) {
              var q = Yi(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Yi(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.o.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.s = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = uw(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Cw(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.o.ytl = ["google"]),
    (function () {
      function a() {
        var u = Math.round(1e9 * Math.random()) + "";
        return H.getElementById(u) ? a() : u;
      }
      function b(u, v) {
        if (!u) return !1;
        for (var w = 0; w < p.length; w++)
          if (0 <= u.indexOf("//" + p[w] + "/" + v)) return !0;
        return !1;
      }
      function c(u, v) {
        var w = u.getAttribute("src");
        if (b(w, "embed/")) {
          if (0 < w.indexOf("enablejsapi=1")) return !0;
          if (v) {
            var x = u.setAttribute,
              y;
            var A = -1 !== w.indexOf("?") ? "&" : "?";
            if (-1 < w.indexOf("origin=")) y = w + A + "enablejsapi=1";
            else {
              if (!r) {
                var B = W("document");
                r = B.location.protocol + "//" + B.location.hostname;
                B.location.port && (r += ":" + B.location.port);
              }
              y = w + A + "enablejsapi=1&origin=" + encodeURIComponent(r);
            }
            x.call(u, "src", y);
            return !0;
          }
        }
        return !1;
      }
      function d(u, v) {
        if (
          !u.getAttribute("data-gtm-yt-inspected-" + v.lb) &&
          (u.setAttribute("data-gtm-yt-inspected-" + v.lb, "true"), c(u, v.me))
        ) {
          u.id || (u.id = a());
          var w = W("YT"),
            x = w.get(u.id);
          x || (x = new w.Player(u.id));
          var y = f(x, v),
            A = {},
            B;
          for (B in y)
            (A.ld = B),
              y.hasOwnProperty(A.ld) &&
                x.addEventListener(
                  A.ld,
                  (function (D) {
                    return function (E) {
                      return y[D.ld](E.data);
                    };
                  })(A)
                ),
              (A = { ld: A.ld });
        }
      }
      function e(u) {
        I(function () {
          function v() {
            for (
              var x = w.getElementsByTagName("iframe"), y = x.length, A = 0;
              A < y;
              A++
            )
              d(x[A], u);
          }
          var w = W("document");
          v();
          cw(v);
        });
      }
      function f(u, v) {
        var w, x;
        function y() {
          ea = nw(
            function () {
              return {
                url: R,
                title: ia,
                Wg: X,
                aj: u.getCurrentTime(),
                playbackRate: ja,
              };
            },
            v.lb,
            u.getIframe()
          );
          X = 0;
          ia = R = "";
          ja = 1;
          return A;
        }
        function A(Ca) {
          switch (Ca) {
            case q.PLAYING:
              X = Math.round(u.getDuration());
              R = u.getVideoUrl();
              if (u.getVideoData) {
                var Ja = u.getVideoData();
                ia = Ja ? Ja.title : "";
              }
              ja = u.getPlaybackRate();
              v.Rg ? vw(ea.createEvent("start")) : ea.Xc();
              na = m(v.xh, v.wh, u.getDuration());
              return B(Ca);
            default:
              return A;
          }
        }
        function B() {
          T = u.getCurrentTime();
          Ea = qw().getTime();
          ea.qj();
          Q();
          return D;
        }
        function D(Ca) {
          var Ja;
          switch (Ca) {
            case q.ENDED:
              return J(Ca);
            case q.PAUSED:
              Ja = "pause";
            case q.BUFFERING:
              var bb = u.getCurrentTime() - T;
              Ja =
                1 < Math.abs(((qw().getTime() - Ea) / 1e3) * ja - bb)
                  ? "seek"
                  : Ja || "buffering";
              u.getCurrentTime() && (v.Qg ? vw(ea.createEvent(Ja)) : ea.Xc());
              N();
              return E;
            case q.UNSTARTED:
              return y(Ca);
            default:
              return D;
          }
        }
        function E(Ca) {
          switch (Ca) {
            case q.ENDED:
              return J(Ca);
            case q.PLAYING:
              return B(Ca);
            case q.UNSTARTED:
              return y(Ca);
            default:
              return E;
          }
        }
        function J() {
          for (; x; ) {
            var Ca = w;
            ow(x);
            Ca();
          }
          v.Pg && vw(ea.createEvent("complete", 1));
          return y(q.UNSTARTED);
        }
        function G() {}
        function N() {
          x && (ow(x), (x = 0), (w = G));
        }
        function Q() {
          if (na.length && 0 !== ja) {
            var Ca = -1,
              Ja;
            do {
              Ja = na[0];
              if (Ja.Aa > u.getDuration()) return;
              Ca = (Ja.Aa - u.getCurrentTime()) / ja;
              if (0 > Ca && (na.shift(), 0 === na.length)) return;
            } while (0 > Ca);
            w = function () {
              x = 0;
              w = G;
              0 < na.length &&
                na[0].Aa === Ja.Aa &&
                (na.shift(), vw(ea.createEvent("progress", Ja.ye, Ja.Be)));
              Q();
            };
            x = pw(w, 1e3 * Ca);
          }
        }
        var ea,
          na = [],
          X,
          R,
          ia,
          ja,
          T,
          Ea,
          Xa = y(q.UNSTARTED);
        x = 0;
        w = G;
        return {
          onStateChange: function (Ca) {
            Xa = Xa(Ca);
          },
          onPlaybackRateChange: function (Ca) {
            T = u.getCurrentTime();
            Ea = qw().getTime();
            ea.Xc();
            ja = Ca;
            N();
            Q();
          },
        };
      }
      function g(u) {
        for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
          var A = parseInt(v[y], 10);
          isNaN(A) || 100 < A || 0 > A || x.push(A / 100);
        }
        x.sort(function (B, D) {
          return B - D;
        });
        return x;
      }
      function h(u) {
        for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
          var A = parseInt(v[y], 10);
          isNaN(A) || 0 > A || x.push(A);
        }
        x.sort(function (B, D) {
          return B - D;
        });
        return x;
      }
      function m(u, v, w) {
        var x = u.map(function (B) {
          return { Aa: B, Be: B, ye: void 0 };
        });
        if (!v.length) return x;
        var y = v.map(function (B) {
          return { Aa: B * w, Be: void 0, ye: B };
        });
        if (!x.length) return y;
        var A = x.concat(y);
        A.sort(function (B, D) {
          return B.Aa - D.Aa;
        });
        return A;
      }
      function n(u) {
        var v = !!u.vtp_captureStart,
          w = !!u.vtp_captureComplete,
          x = !!u.vtp_capturePause,
          y = g(u.vtp_progressThresholdsPercent + ""),
          A = h(u.vtp_progressThresholdsTimeInSeconds + ""),
          B = !!u.vtp_fixMissingApi;
        if (v || w || x || y.length || A.length) {
          var D = {
              Rg: v,
              Pg: w,
              Qg: x,
              wh: y,
              xh: A,
              me: B,
              lb: void 0 === u.vtp_uniqueTriggerId ? "" : u.vtp_uniqueTriggerId,
            },
            E = W("YT"),
            J = function () {
              e(D);
            };
          I(u.vtp_gtmOnSuccess);
          if (E) E.ready && E.ready(J);
          else {
            var G = W("onYouTubeIframeAPIReady");
            ww("onYouTubeIframeAPIReady", function () {
              G && G();
              J();
            });
            I(function () {
              for (
                var N = W("document"),
                  Q = N.getElementsByTagName("script"),
                  ea = Q.length,
                  na = 0;
                na < ea;
                na++
              ) {
                var X = Q[na].getAttribute("src");
                if (b(X, "iframe_api") || b(X, "player_api")) return;
              }
              for (
                var R = N.getElementsByTagName("iframe"), ia = R.length, ja = 0;
                ja < ia;
                ja++
              )
                if (!t && c(R[ja], D.me)) {
                  V("https://www.youtube.com/iframe_api");
                  t = !0;
                  break;
                }
            });
          }
        } else I(u.vtp_gtmOnSuccess);
      }
      var p = ["www.youtube.com", "www.youtube-nocookie.com"],
        q = {
          UNSTARTED: -1,
          ENDED: 0,
          PLAYING: 1,
          PAUSED: 2,
          BUFFERING: 3,
          CUED: 5,
        },
        r,
        t = !1;
      (function (u) {
        Z.__ytl = u;
        Z.__ytl.s = "ytl";
        Z.__ytl.isVendorTemplate = !0;
        Z.__ytl.priorityOverride = 0;
        Z.__ytl.isInfrastructure = !1;
      })(function (u) {
        u.vtp_triggerStartOption
          ? n(u)
          : Fs(function () {
              n(u);
            });
      });
    })();

  (Z.o.aev = ["google"]),
    (function () {
      function a(r, t, u, v, w) {
        w || (w = "element");
        var x = t + "." + u,
          y;
        if (n.hasOwnProperty(x)) y = n[x];
        else {
          var A = r[w];
          if (A && ((y = v(A)), (n[x] = y), p.push(x), 35 < p.length)) {
            var B = p.shift();
            delete n[B];
          }
        }
        return y;
      }
      function b(r, t, u) {
        var v = r[q[t]];
        return void 0 !== v ? v : u;
      }
      function c(r, t) {
        if (!r) return !1;
        var u = d(rw());
        Ha(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [u], w = 0; w < t.length; w++) {
          var x = t[w];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (B) {
                continue;
              }
            else x = x.domain;
          var y = d(r);
          if (x instanceof RegExp) {
            if (x.test(y)) return !1;
          } else {
            var A = x;
            if (0 != A.length) {
              if (0 <= y.indexOf(A)) return !1;
              v.push(d(A));
            }
          }
        }
        return !uE(r, v);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return Yi($i(r), "HOST", !0);
      }
      function e(r, t, u, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(t, u, "FORM." + r, g);
            return void 0 === w ? v : w;
          case "INTERACTED_FIELD_ID":
            return h(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return h(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return h(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var x = t.interactedFormFieldPosition;
            return void 0 === x ? v : x;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = t.interactSequenceNumber;
            return void 0 === y ? v : y;
          default:
            return v;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return sc(r, "value");
          case "button":
            return tc(r);
          default:
            return null;
        }
      }
      function g(r) {
        if ("form" === r.tagName.toLowerCase() && r.elements) {
          for (var t = 0, u = 0; u < r.elements.length; u++)
            Yv(r.elements[u]) && t++;
          return t;
        }
      }
      function h(r, t, u) {
        var v = r.interactedFormField;
        return (v && sc(v, t)) || u;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Z.__aev = r;
        Z.__aev.s = "aev";
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0;
        Z.__aev.isInfrastructure = !1;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          u = r.vtp_defaultValue,
          v = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var x = w.element;
            return (x && x.tagName) || u;
          case "TEXT":
            return a(w, t, v, tc) || u;
          case "URL":
            var y;
            a: {
              var A = String(w.elementUrl || u || ""),
                B = $i(A),
                D = String(r.vtp_component || "URL");
              switch (D) {
                case "URL":
                  y = A;
                  break a;
                case "IS_OUTBOUND":
                  y = c(A, r.vtp_affiliatedDomains);
                  break a;
                default:
                  y = Yi(
                    B,
                    D,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var E;
            if (void 0 === r.vtp_attribute) E = b(w, v, u);
            else {
              var J = w.element;
              E = (J && sc(J, r.vtp_attribute)) || u || "";
            }
            return E;
          case "MD":
            var G = r.vtp_mdValue,
              N = a(w, t, "MD", jw);
            return G && N ? mw(N, G) || u : N || u;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
          default:
            var Q = b(w, v, u);
            Cw(Q, "aev", r.vtp_gtmEventId);
            return Q;
        }
      });
    })();
  (Z.o.read_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_data_layer = b;
        Z.__read_data_layer.s = "read_data_layer";
        Z.__read_data_layer.isVendorTemplate = !0;
        Z.__read_data_layer.priorityOverride = 0;
        Z.__read_data_layer.isInfrastructure = !1;
      })(function (b) {
        var c = b.vtp_keyPatterns || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!k(f)) throw d(e, {}, "Keys must be strings.");
            try {
              if (Kf(f, c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid key filter.");
            }
            throw d(
              e,
              {},
              "Prohibited read from data layer variable: " + f + "."
            );
          },
          X: a,
        };
      });
    })();
  (Z.o.fsl = []),
    (function () {
      function a() {
        var e = W("document"),
          f = c(),
          g = HTMLFormElement.prototype.submit;
        qc(
          e,
          "click",
          function (h) {
            var m = h.target;
            if (
              m &&
              (m = vc(m, ["button", "input"], 100)) &&
              ("submit" == m.type || "image" == m.type) &&
              m.name &&
              sc(m, "value")
            ) {
              var n;
              m.form
                ? m.form.tagName
                  ? (n = m.form)
                  : (n = H.getElementById(m.form))
                : (n = vc(m, ["form"], 100));
              n && f.store(n, m);
            }
          },
          !1
        );
        qc(
          e,
          "submit",
          function (h) {
            var m = h.target;
            if (!m) return h.returnValue;
            var n = h.defaultPrevented || !1 === h.returnValue,
              p = b(m) && !n,
              q = f.get(m),
              r = !0;
            if (
              d(
                m,
                function () {
                  if (r) {
                    var t;
                    q &&
                      ((t = e.createElement("input")),
                      (t.type = "hidden"),
                      (t.name = q.name),
                      (t.value = q.value),
                      m.appendChild(t));
                    g.call(m);
                    t && m.removeChild(t);
                  }
                },
                n,
                p,
                q
              )
            )
              r = !1;
            else
              return (
                n ||
                  (h.preventDefault && h.preventDefault(),
                  (h.returnValue = !1)),
                !1
              );
            return h.returnValue;
          },
          !1
        );
        HTMLFormElement.prototype.submit = function () {
          var h = this,
            m = b(h),
            n = !0;
          d(
            h,
            function () {
              n && g.call(h);
            },
            !1,
            m
          ) && (g.call(h), (n = !1));
        };
      }
      function b(e) {
        var f = e.target;
        return f && "_self" !== f && "_parent" !== f && "_top" !== f ? !1 : !0;
      }
      function c() {
        var e = [],
          f = function (g) {
            return Ia(e, function (h) {
              return h.form === g;
            });
          };
        return {
          store: function (g, h) {
            var m = f(g);
            m ? (m.button = h) : e.push({ form: g, button: h });
          },
          get: function (g) {
            var h = f(g);
            return h ? h.button : null;
          },
        };
      }
      function d(e, f, g, h, m) {
        var n = Uv("fsl", g ? "nv.mwt" : "mwt", 0),
          p;
        p = g ? Uv("fsl", "nv.ids", []) : Uv("fsl", "ids", []);
        if (!p.length) return !0;
        var q = Qv(e, "gtm.formSubmit", p),
          r = e.action;
        r && r.tagName && (r = e.cloneNode(!1).action);
        q["gtm.elementUrl"] = r;
        O(121);
        "https://www.facebook.com/tr/" === r && O(122);
        if (U(79) && "https://www.facebook.com/tr/" === r) return !0;
        m && (q["gtm.formSubmitElement"] = m);
        if (h && n) {
          if (!vw(q, uv(f, n), n)) return !1;
        } else vw(q, function () {}, n || 2e3);
        return !0;
      }
      (function (e) {
        Z.__fsl = e;
        Z.__fsl.s = "fsl";
        Z.__fsl.isVendorTemplate = !0;
        Z.__fsl.priorityOverride = 0;
        Z.__fsl.isInfrastructure = !1;
      })(function (e) {
        var f = e.vtp_waitForTags,
          g = e.vtp_checkValidation,
          h = Number(e.vtp_waitForTagsTimeout);
        if (!h || 0 >= h) h = 2e3;
        var m = e.vtp_uniqueTriggerId || "0";
        if (f) {
          var n = function (q) {
            return Math.max(h, q);
          };
          Tv("fsl", "mwt", n, 0);
          g || Tv("fsl", "nv.mwt", n, 0);
        }
        var p = function (q) {
          q.push(m);
          return q;
        };
        Tv("fsl", "ids", p, []);
        g || Tv("fsl", "nv.ids", p, []);
        Aw("fsl") || (a(), Bw("fsl"));
        I(e.vtp_gtmOnSuccess);
      });
    })();

  (Z.o.lcl = []),
    (function () {
      function a() {
        var c = W("document"),
          d = 0,
          e = function (f) {
            var g = f.target;
            if (
              g &&
              3 !== f.which &&
              !(f.gh || (f.timeStamp && f.timeStamp === d))
            ) {
              d = f.timeStamp;
              g = vc(g, ["a", "area"], 100);
              if (!g) return f.returnValue;
              var h = f.defaultPrevented || !1 === f.returnValue,
                m = Uv("lcl", h ? "nv.mwt" : "mwt", 0),
                n;
              n = h ? Uv("lcl", "nv.ids", []) : Uv("lcl", "ids", []);
              if (n.length) {
                var p = Qv(g, "gtm.linkClick", n);
                if (b(f, g, c) && !h && m && g.href) {
                  var q = !!Ia(
                      String(xc(g, "rel") || "").split(" "),
                      function (v) {
                        return "noreferrer" === v.toLowerCase();
                      }
                    ),
                    r = W((xc(g, "target") || "_self").substring(1)),
                    t = !0,
                    u = uv(function () {
                      var v;
                      if ((v = t && r)) {
                        var w;
                        a: if (q) {
                          var x;
                          try {
                            x = new MouseEvent(f.type, { bubbles: !0 });
                          } catch (y) {
                            if (!c.createEvent) {
                              w = !1;
                              break a;
                            }
                            x = c.createEvent("MouseEvents");
                            x.initEvent(f.type, !0, !0);
                          }
                          x.gh = !0;
                          f.target.dispatchEvent(x);
                          w = !0;
                        } else w = !1;
                        v = !w;
                      }
                      v && (r.location.href = xc(g, "href"));
                    }, m);
                  if (vw(p, u, m)) t = !1;
                  else
                    return (
                      f.preventDefault && f.preventDefault(),
                      (f.returnValue = !1)
                    );
                } else vw(p, function () {}, m || 2e3);
                return !0;
              }
            }
          };
        qc(c, "click", e, !1);
        qc(c, "auxclick", e, !1);
      }
      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
          return !1;
        var f = xc(d, "href"),
          g = f.indexOf("#"),
          h = xc(d, "target");
        if ((h && "_self" !== h && "_parent" !== h && "_top" !== h) || 0 === g)
          return !1;
        if (0 < g) {
          var m = tw(f),
            n = tw(e.location);
          return m !== n;
        }
        return !0;
      }
      (function (c) {
        Z.__lcl = c;
        Z.__lcl.s = "lcl";
        Z.__lcl.isVendorTemplate = !0;
        Z.__lcl.priorityOverride = 0;
        Z.__lcl.isInfrastructure = !1;
      })(function (c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2e3;
        var g = c.vtp_uniqueTriggerId || "0";
        if (d) {
          var h = function (n) {
            return Math.max(f, n);
          };
          Tv("lcl", "mwt", h, 0);
          e || Tv("lcl", "nv.mwt", h, 0);
        }
        var m = function (n) {
          n.push(g);
          return n;
        };
        Tv("lcl", "ids", m, []);
        e || Tv("lcl", "nv.ids", m, []);
        Aw("lcl") || (a(), Bw("lcl"));
        I(c.vtp_gtmOnSuccess);
      });
    })();

  (Z.o.ua = ["google"]),
    (function () {
      function a(m, n) {
        for (var p in m)
          if (!h[p] && m.hasOwnProperty(p)) {
            var q = g[p] ? Pa(m[p]) : m[p];
            "anonymizeIp" != p || q || (q = void 0);
            n[p] = q;
          }
      }
      function b(m) {
        var n = {};
        m.vtp_gaSettings &&
          Uc(vE(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
        Uc(vE(m.vtp_fieldsToSet, "fieldName", "value"), n);
        Pa(n.urlPassthrough) && (n._useUp = !0);
        m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
        return n;
      }
      function c(m, n) {
        return void 0 === n ? n : m(n);
      }
      function d(m, n, p) {}
      function e(m, n) {
        if (!f) {
          var p = m.vtp_useDebugVersion
            ? "u/analytics_debug.js"
            : "analytics.js";
          m.vtp_useInternalVersion &&
            !m.vtp_useDebugVersion &&
            (p = "internal/" + p);
          f = !0;
          var q = m.vtp_gtmOnFailure,
            r = Sh || Uh ? hs(n._x_19, "/analytics.js") : void 0,
            t = Vo("", "", "/scripts/" + p, n && !!n.forceSSL);
          V(
            "analytics.js" === p && r ? r : t,
            function () {
              var u = Ss();
              (u && u.loaded) || q();
            },
            q
          );
        }
      }
      var f,
        g = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        h = { urlPassthrough: !0 };
      (function (m) {
        Z.__ua = m;
        Z.__ua.s = "ua";
        Z.__ua.isVendorTemplate = !0;
        Z.__ua.priorityOverride = 0;
        Z.__ua.isInfrastructure = !1;
      })(function (m) {
        function n() {
          if (
            m.vtp_doubleClick ||
            "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType
          )
            v.displayfeatures = !0;
        }
        var p = {},
          q = {},
          r = {};
        if (m.vtp_gaSettings) {
          var t = m.vtp_gaSettings;
          Uc(vE(t.vtp_contentGroup, "index", "group"), p);
          Uc(vE(t.vtp_dimension, "index", "dimension"), q);
          Uc(vE(t.vtp_metric, "index", "metric"), r);
          var u = Uc(t);
          u.vtp_fieldsToSet = void 0;
          u.vtp_contentGroup = void 0;
          u.vtp_dimension = void 0;
          u.vtp_metric = void 0;
          m = Uc(m, u);
        }
        Uc(vE(m.vtp_contentGroup, "index", "group"), p);
        Uc(vE(m.vtp_dimension, "index", "dimension"), q);
        Uc(vE(m.vtp_metric, "index", "metric"), r);
        var v = b(m),
          w = String(m.vtp_trackingId || ""),
          x = "",
          y = "",
          A = "";
        m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName
          ? "" !== m.vtp_trackerName && ((A = m.vtp_trackerName), (y = A + "."))
          : ((A = "gtm" + mi()), (y = A + "."));
        var B = function (ja, T) {
          for (var Ea in T) T.hasOwnProperty(Ea) && (v[ja + Ea] = T[Ea]);
        };
        B("contentGroup", p);
        B("dimension", q);
        B("metric", r);
        m.vtp_enableEcommerce &&
          ((x = m.vtp_gtmCachedValues.event),
          (v.gtmEcommerceData = d(m, v, x)));
        if ("TRACK_EVENT" === m.vtp_trackType)
          (x = "track_event"),
            n(),
            (v.eventCategory = String(m.vtp_eventCategory)),
            (v.eventAction = String(m.vtp_eventAction)),
            (v.eventLabel = c(String, m.vtp_eventLabel)),
            (v.value = c(Oa, m.vtp_eventValue));
        else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
          if (
            ((x = P.g.Xb),
            n(),
            "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
              m.vtp_advertisingFeaturesType && (v.remarketingLists = !0),
            m.vtp_autoLinkDomains)
          ) {
            var D = {};
            D[P.g.V] = m.vtp_autoLinkDomains;
            D.use_anchor = m.vtp_useHashAutoLink;
            D[P.g.vb] = m.vtp_decorateFormsAutoLink;
            v[P.g.ya] = D;
          }
        } else
          "TRACK_SOCIAL" === m.vtp_trackType
            ? ((x = "track_social"),
              (v.socialNetwork = String(m.vtp_socialNetwork)),
              (v.socialAction = String(m.vtp_socialAction)),
              (v.socialTarget = String(m.vtp_socialActionTarget)))
            : "TRACK_TIMING" == m.vtp_trackType &&
              ((x = "timing_complete"),
              (v.eventCategory = String(m.vtp_timingCategory)),
              (v.timingVar = String(m.vtp_timingVar)),
              (v.value = Oa(m.vtp_timingValue)),
              (v.eventLabel = c(String, m.vtp_timingLabel)));
        m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
        m.vtp_enableLinkId && (v.enableLinkId = !0);
        var E = {};
        a(v, E);
        v.name || (E.gtmTrackerName = A);
        E.gaFunctionName = m.vtp_functionName;
        void 0 !== m.vtp_nonInteraction &&
          (E.nonInteraction = m.vtp_nonInteraction);
        var J = Tp(
          Sp(
            Rp(
              Qp(
                Jp(new Ip(m.vtp_gtmEventId, m.vtp_gtmPriorityId), E),
                m.vtp_gtmOnSuccess
              ),
              m.vtp_gtmOnFailure
            )
          )
        );
        DC(w, x, Date.now(), J);
        var G = Us(m.vtp_functionName);
        if (Fa(G)) {
          var N = function (ja) {
            var T = [].slice.call(arguments, 0);
            T[0] = y + T[0];
            G.apply(window, T);
          };
          if ("TRACK_TRANSACTION" == m.vtp_trackType) {
          } else if ("DECORATE_LINK" == m.vtp_trackType) {
          } else if ("DECORATE_FORM" == m.vtp_trackType) {
          } else if ("TRACK_DATA" == m.vtp_trackType) {
          }
          e(m, v);
        } else I(m.vtp_gtmOnFailure);
      });
    })();
  (Z.o.gas = ["google"]),
    (function () {
      (function (a) {
        Z.__gas = a;
        Z.__gas.s = "gas";
        Z.__gas.isVendorTemplate = !0;
        Z.__gas.priorityOverride = 0;
        Z.__gas.isInfrastructure = !1;
      })(function (a) {
        var b = Uc(a),
          c = b;
        c[ne.Qb] = null;
        c[ne.Ig] = null;
        var d = (b = c);
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        void 0 !== e &&
          (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
          delete d.vtp_cookieDomain);
        return b;
      });
    })();

  (Z.o.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.s = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = "all" !== c && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          X: a,
        };
      });
    })();
  (Z.o.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.s = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
        Z.__get.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = kt(String(b.streamId), d, c);
        nt(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  (Z.o.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var h = e.shift(),
                m = a(d, e, f, g);
              if (
                "SCRIPT" == String(h.nodeName).toUpperCase() &&
                "text/gtmscript" == h.type
              ) {
                var n = H.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = h.id;
                n.text = h.text || h.textContent || h.innerHTML || "";
                h.charset && (n.charset = h.charset);
                var p = h.getAttribute("data-gtmsrc");
                p && ((n.src = p), ic(n, m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                h.innerHTML &&
                0 <= h.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var q = []; h.firstChild; )
                  q.push(h.removeChild(h.firstChild));
                d.insertBefore(h, null);
                a(h, q, m, g)();
              } else d.insertBefore(h, null), m();
            } else f();
          } catch (r) {
            I(g);
          }
        };
      }
      function b(d) {
        if (H.body) {
          var e = d.vtp_gtmOnFailure,
            f = Dw(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.Xk,
            h = f.R;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, h, e) : a(H.body, uc(g), h, e)();
        } else
          pw(function () {
            b(d);
          }, 200);
      }
      Z.__html = b;
      Z.__html.s = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
    })();

  var EF = {};
  (EF.macro = function (a) {
    if (Se.Jg.hasOwnProperty(a)) return Se.Jg[a];
  }),
    (EF.onHtmlSuccess = Se.Zi(!0)),
    (EF.onHtmlFailure = Se.Zi(!1));
  EF.dataLayer = ti;
  EF.callback = function (a) {
    ai.hasOwnProperty(a) && Fa(ai[a]) && ai[a]();
    delete ai[a];
  };
  EF.bootstrap = 0;
  EF._spx = !1;
  function FF() {
    Kh[K.D] = Kh[K.D] || EF;
    K.Gb && (Kh["ctid_" + K.Gb] = EF);
    jl();
    ml() ||
      l(nl(), function (a, b) {
        ls(a, b.transportUrl, b.context);
        O(92);
      });
    Wa(bi, Z.o);
    Te();
    Ue = hf;
  }
  (function (a) {
    function b() {
      m = H.documentElement.getAttribute("data-tag-assistant-present");
      Dv(m) && (h = g.Zj);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (H.referrer) {
        var d = $i(H.referrer);
        c = "cct.google" === Xi(d, "host");
      }
      if (!c) {
        var e = Kk("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        mc("https://cct.google/taggy/agent.js"));
    }
    if (Wh) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Qh ? ((v = "OGT"), (w = "GTAG")) : Wh && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            mc(
              "https://" +
                Jh.Ne +
                "/debug/bootstrap?id=" +
                K.D +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                pl()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: gc,
              containerProduct: v,
              debug: !1,
              id: K.D,
              destinations: hl(),
            },
          };
          y.data.resume = function () {
            a();
          };
          Jh.Dj && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { im: 1, bk: 2, pk: 3, Fj: 4, Zj: 5 },
        h = void 0,
        m = void 0,
        n = Yi(z.location, "query", !1, void 0, "gtm_debug");
      Dv(n) && (h = g.bk);
      if (!h && H.referrer) {
        var p = $i(H.referrer);
        "tagassistant.google.com" === Xi(p, "host") && (h = g.pk);
      }
      if (!h) {
        var q = Kk("__TAG_ASSISTANT");
        q.length && q[0].length && (h = g.Fj);
      }
      h || b();
      if (!h && Ev(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            h && gc ? f(h) : a();
          },
          t = !1;
        qc(
          H,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else h && gc ? f(h) : a();
    }
  })(function () {
    if (U(70)) {
      var a = fr(ar.J.Qf, K.D);
      gr(a);
    }
    Fj().m();
    qm();
    if (K.Gb ? Kh["ctid_" + K.Gb] : Kh[K.D]) {
      var b = Kh.zones;
      b && b.unregisterChild(gl());
    } else {
      for (
        var c = data.resource || {}, d = c.macros || [], e = 0;
        e < d.length;
        e++
      )
        Ke.push(d[e]);
      for (var f = c.tags || [], g = 0; g < f.length; g++) Ne.push(f[g]);
      for (var h = c.predicates || [], m = 0; m < h.length; m++) Me.push(h[m]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], r = {}, t = 0; t < q.length; t++)
          r[q[t][0]] = Array.prototype.slice.call(q[t], 1);
        Le.push(r);
      }
      Pe = Z;
      Qe = ax;
      pf = new of();
      var u = data.sandboxed_scripts,
        v = data.security_groups,
        w = data.infra,
        x = data.runtime || [],
        y = data.runtime_lines;
      cE = new ke();
      fE();
      Je = dE();
      var A = cE,
        B = $D();
      mb(A.h, "require", B);
      for (var D = 0; D < x.length; D++) {
        var E = x[D];
        if (!Ha(E) || 3 > E.length) {
          if (0 === E.length) continue;
          break;
        }
        y && y[D] && y[D].length && af(E, y[D]);
        try {
          cE.execute(E);
        } catch (Fc) {}
      }
      if (void 0 !== u)
        for (var J = ["sandboxedScripts"], G = 0; G < u.length; G++) {
          var N = u[G].replace(/^_*/, "");
          bi[N] = J;
        }
      gE(v);
      if (void 0 !== w) for (var Q = 0; Q < w.length; Q++) li[w[Q]] = !0;
      FF();
      if (U(102)) {
        for (
          var ea = yi["7"], na = ea ? ea.split("|") : [], X = {}, R = 0;
          R < na.length;
          R++
        )
          X[na[R]] = !0;
        for (var ia = 0; ia < lk.length; ia++) {
          var ja = lk[ia],
            T = X[ja] ? "granted" : "denied";
          Mj().implicit(ja, T);
        }
      }
      Cv();
      As = !1;
      Bs = 0;
      if (
        ("interactive" == H.readyState && !H.createEventObject) ||
        "complete" == H.readyState
      )
        Ds();
      else {
        qc(H, "DOMContentLoaded", Ds);
        qc(H, "readystatechange", Ds);
        if (H.createEventObject && H.documentElement.doScroll) {
          var Ea = !0;
          try {
            Ea = !z.frameElement;
          } catch (Fc) {}
          Ea && Es();
        }
        qc(z, "load", Ds);
      }
      Ru = !1;
      "complete" === H.readyState ? Tu() : qc(z, "load", Tu);
      Am && z.setInterval(Em, 864e5);
      vb("HEALTH", 1);
      $h = Ta();
      EF.bootstrap = $h;
      if (U(70)) {
        var bb = fr(ar.J.Lh, K.D);
        if (gr(bb)) {
          var Ec = fr(ar.J.Qf, K.D);
          hr(bb, Ec);
        }
      }
    }
  });
})();
