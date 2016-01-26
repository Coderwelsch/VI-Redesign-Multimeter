/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '\'Helvetica Neue\'': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "lib/Chart.min.js",
            "lib/jquery.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background',
                            type: 'image',
                            rect: ['0px', '0px', '543px', '800px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"iPad%20Mini%203-4%20Space%20Gray.svg",'0px','0px']
                        },
                        {
                            id: 'Content',
                            symbolName: 'Content',
                            type: 'rect',
                            rect: ['15', '76', '514', '647', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '543px', '800px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '514px', '647px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Background_Rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,31,31,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.6', '0.6']],
                            rect: ['191', '396px', '133', '105', 'auto', 'auto'],
                            id: 'Boot_Animation',
                            symbolName: 'Boot_Animation',
                            opacity: '1',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1.4', '1.4']],
                            rect: ['0px', '0px', '516', '649', 'auto', 'auto'],
                            id: 'System',
                            symbolName: 'System',
                            opacity: '0',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '514px', '647px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "Boot": 0,
                        "Loaded": 5000
                    },
                    data: [
                        [
                            "eid106",
                            "left",
                            6000,
                            0,
                            "linear",
                            "${System}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            5000,
                            1000,
                            "easeInOutQuad",
                            "${Boot_Animation}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            5000,
                            1000,
                            "easeInOutQuad",
                            "${Boot_Animation}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid107",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${System}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            5000,
                            1000,
                            "easeInOutQuad",
                            "${System}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleX",
                            5000,
                            1000,
                            "easeInOutQuad",
                            "${System}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            5000,
                            1000,
                            "easeInOutQuad",
                            "${Boot_Animation}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "scaleY",
                            5000,
                            1000,
                            "easeInOutQuad",
                            "${System}",
                            '1.4',
                            '1'
                        ]
                    ]
                }
            },
            "Loading_Wheel": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            id: 'Loading_Wheel',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/loading13.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${Loading_Wheel}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "Multimeter_Touch_Label": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '0px', '133px', '24px', 'auto', 'auto'],
                            id: 'Headline',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">MULTIMETER</span></p>',
                            align: 'center',
                            font: ['\'Helvetica Neue\'', [24, ''], 'rgba(0,0,0,1)', '100', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '19px', '133px', '32px', 'auto', 'auto'],
                            id: 'Subline',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(189, 189, 189); font-size: 14px;\">Touch</span></p>',
                            align: 'center',
                            font: ['\'Helvetica Neue\'', [24, ''], 'rgba(119,119,119,1.00)', '100', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '51px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Boot_Animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Loading_Wheel',
                            symbolName: 'Loading_Wheel',
                            rect: ['44px', '-109px', '44', '44', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            rect: ['0px', '-55px', '133', '51', 'auto', 'auto'],
                            id: 'Multimeter_Touch_Label',
                            symbolName: 'Multimeter_Touch_Label',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '105px']
                        }
                    }
                },
                timeline: {
                    duration: 2090.1699039471,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "opacity",
                            1000,
                            964,
                            "easeInOutQuad",
                            "${Loading_Wheel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "top",
                            1126,
                            964,
                            "easeInOutQuad",
                            "${Multimeter_Touch_Label}",
                            '54px',
                            '-55px'
                        ],
                        [
                            "eid8",
                            "top",
                            1000,
                            964,
                            "easeInOutQuad",
                            "${Loading_Wheel}",
                            '0px',
                            '-109px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1126,
                            964,
                            "easeInOutQuad",
                            "${Multimeter_Touch_Label}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "System": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '514px', '647px', 'auto', 'auto'],
                            id: 'System',
                            stroke: [1, 'rgba(203,16,16,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,31,31,1.00)']
                        },
                        {
                            rect: ['243px', '0', '514', '647', 'auto', 'auto'],
                            id: 'Menu_Item_View',
                            symbolName: 'Menu_Item_View',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            rect: ['1px', '16', '514', '614', 'auto', 'auto'],
                            id: 'Menu_View',
                            symbolName: 'Menu_View',
                            opacity: '1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '516px', '649px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "Show_Item_View": 1000
                    },
                    data: [
                        [
                            "eid95",
                            "opacity",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_Item_View}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "scaleX",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_Item_View}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid70",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Menu_View}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid69",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_View}",
                            '1px',
                            '-243px'
                        ],
                        [
                            "eid73",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Menu_View}",
                            '1',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_View}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Menu_View}",
                            '1',
                            '1'
                        ],
                        [
                            "eid65",
                            "scaleY",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_View}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Menu_View}",
                            '1',
                            '1'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_View}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid88",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_Item_View}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid94",
                            "scaleY",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_Item_View}",
                            '1.4',
                            '1'
                        ]
                    ]
                }
            },
            "Temperature_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            rect: ['8px', '8px', '45px', '45px', 'auto', 'auto'],
                            id: 'Icon_Thermometer',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/thermometer48.svg', '0px', '0px']
                        },
                        {
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Label',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(43, 150, 211);\">Grad Celsius</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            id: 'Right_Angle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Resistance_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(43, 150, 211);\">Widerstand</span></p>',
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '6px', '45px', '45px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 42px;\">Ω</span></p>',
                            font: ['\'Helvetica Neue\'', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            id: 'Right_Angle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Capacity_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(43, 150, 211);\">Kapazität</span></p>',
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '6px', '45px', '45px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 42px;\">F</span></p>',
                            font: ['\'Helvetica Neue\'', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            id: 'Right_Angle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Ampere_DC_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(43, 150, 211);\">Ampere (Gleichstrom)</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '0px', '45px', '45px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy2',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 42px;\">A</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['\'Helvetica Neue\'', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            id: 'Right_Angle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['14px', '45px', '32px', '3px', 'auto', 'auto'],
                            fill: ['rgba(43,150,211,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6Copy',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['14px', '51px', '8px', '3px', 'auto', 'auto'],
                            fill: ['rgba(43,150,211,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6Copy2',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['26px', '51px', '8px', '3px', 'auto', 'auto'],
                            fill: ['rgba(43,150,211,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6Copy3',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['38px', '51px', '8px', '3px', 'auto', 'auto'],
                            fill: ['rgba(43,150,211,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Ampere_AC_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(43, 150, 211);\">Ampere (Wechselstrom)</span></p>',
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '0px', '45px', '45px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 42px;\">A</span></p>',
                            font: ['\'Helvetica Neue\'', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '23px', '45px', '29px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 42px;\">~</span></p>',
                            font: ['\'Helvetica Neue\'', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            id: 'Right_Angle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Volt_DC_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(43, 150, 211);\">Volt (Gleichstrom)</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '0px', '45px', '45px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy2',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 42px;\">V</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['\'Helvetica Neue\'', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            id: 'Right_Angle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['14px', '45px', '32px', '3px', 'auto', 'auto'],
                            fill: ['rgba(43,150,211,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6Copy',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['14px', '51px', '8px', '3px', 'auto', 'auto'],
                            fill: ['rgba(43,150,211,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6Copy2',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['26px', '51px', '8px', '3px', 'auto', 'auto'],
                            fill: ['rgba(43,150,211,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6Copy3',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['38px', '51px', '8px', '3px', 'auto', 'auto'],
                            fill: ['rgba(43,150,211,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Volt_AC_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(43, 150, 211);\">Volt (Wechselstrom)</span></p>',
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '0px', '45px', '45px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 42px;\">V</span></p>',
                            font: ['\'Helvetica Neue\'', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '23px', '45px', '29px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 42px;\">~</span></p>',
                            font: ['\'Helvetica Neue\'', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            id: 'Right_Angle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "hFE_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(43, 150, 211);\">Gleichspannungsverstärkung</span></p>',
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '10px', '45px', '45px', 'auto', 'auto'],
                            align: 'center',
                            id: 'LabelCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(43, 150, 211); font-size: 24px;\">hFE</span></p>',
                            font: ['\'Helvetica Neue\'', [31, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            id: 'Right_Angle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Settings_Item": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Item_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '470px', '62px', 'auto', 'auto'],
                            fill: ['rgba(41,38,38,1.00)']
                        },
                        {
                            rect: ['11px', '12px', '38px', '38px', 'auto', 'auto'],
                            id: 'Icon_Thermometer',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/settings56.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['58px', '17px', '367px', '32px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: left;\"><span style=\"color: rgb(255, 255, 255);\">Einstellungen</span></p>',
                            font: ['\'Helvetica Neue\'', [28, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            fi: [0, 0, 2, 10, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Right_Angle',
                            filter: [0, 0, 2, 10, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['426px', '15px', '32px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1px', '0px', '470px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(41,38,38,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '470px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Menu_View": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '514px', '32px', 'auto', 'auto'],
                            font: ['\'Helvetica Neue\'', [20, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">Messgerät wählen:</span></p>',
                            id: 'Headline',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'Temperature_Item',
                            symbolName: 'Temperature_Item',
                            rect: ['19px', '40px', '470', '62', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Settings_Item',
                            symbolName: 'Settings_Item',
                            rect: ['19px', '552px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Resistance_Item',
                            symbolName: 'Resistance_Item',
                            rect: ['19px', '103px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Capacity_Item',
                            symbolName: 'Capacity_Item',
                            rect: ['19px', '166px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'hFE_Item',
                            symbolName: 'hFE_Item',
                            rect: ['19px', '481px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Ampere_DC_Item',
                            symbolName: 'Ampere_DC_Item',
                            rect: ['19px', '229px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Ampere_AC_Item',
                            symbolName: 'Ampere_AC_Item',
                            rect: ['21px', '292px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Volt_DC_Item',
                            symbolName: 'Volt_DC_Item',
                            rect: ['19px', '355px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Volt_AC_Item',
                            symbolName: 'Volt_AC_Item',
                            rect: ['19px', '418px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '514px', '614px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid51",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${hFE_Item}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid53",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Settings_Item}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid45",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ampere_AC_Item}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ampere_DC_Item}",
                            '229px',
                            '229px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Volt_AC_Item}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid39",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Resistance_Item}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid43",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ampere_DC_Item}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid52",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${hFE_Item}",
                            '481px',
                            '481px'
                        ],
                        [
                            "eid40",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Resistance_Item}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Volt_DC_Item}",
                            '355px',
                            '355px'
                        ],
                        [
                            "eid41",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Capacity_Item}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid47",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Volt_DC_Item}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid42",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Capacity_Item}",
                            '166px',
                            '166px'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Volt_AC_Item}",
                            '418px',
                            '418px'
                        ],
                        [
                            "eid46",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ampere_AC_Item}",
                            '292px',
                            '292px'
                        ],
                        [
                            "eid54",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Settings_Item}",
                            '552px',
                            '552px'
                        ]
                    ]
                }
            },
            "Menu_Item_View": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            id: 'View_Background',
                            stroke: [1, 'rgba(203,16,16,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,31,31,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '519', '641', 'auto', 'auto'],
                            id: 'Menu_Item_View_Content',
                            symbolName: 'Menu_Item_View_Content',
                            opacity: '1',
                            type: 'rect'
                        },
                        {
                            rect: ['243px', '0px', '514', '647', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Definition_View',
                            symbolName: 'Definition_View',
                            opacity: '0',
                            transform: [[], [], [], ['1.4', '1.4']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '514px', '647px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "Show_Definition_View": 1000
                    },
                    data: [
                        [
                            "eid147",
                            "scaleX",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_Item_View_Content}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid153",
                            "opacity",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_Item_View_Content}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Definition_View}",
                            '243px',
                            '0px'
                        ],
                        [
                            "eid148",
                            "scaleY",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_Item_View_Content}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Definition_View}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Definition_View}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid130",
                            "top",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Definition_View}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid137",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Menu_Item_View_Content}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid151",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Menu_Item_View_Content}",
                            '0px',
                            '-244px'
                        ],
                        [
                            "eid138",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Menu_Item_View_Content}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid150",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Menu_Item_View_Content}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid111",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Definition_View}",
                            '0',
                            '0'
                        ],
                        [
                            "eid114",
                            "opacity",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${Definition_View}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "Button_Element": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Btn_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(101,101,101,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '13px', '100%', '57.8%', 'auto', 'auto'],
                            align: 'center',
                            id: 'Label',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 36px;\">Label</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['\'Helvetica Neue\'', [36, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            id: 'Click_Area',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(101,101,101,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '129px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Navigation_Button_Back": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['-1']],
                            type: 'image',
                            id: 'Go_Back_Btn',
                            rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(31,152,225,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">​Zurück</p>',
                            align: 'left',
                            rect: ['28px', '3px', '69px', '14px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Navigation_Button_Fore": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['71px', '0px', '22px', '22px', 'auto', 'auto'],
                            id: 'Go_Back_BtnCopy',
                            transform: [[], [], [], ['1', '-1']],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/right138.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '3px', '69px', '14px', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​Definition</p>',
                            align: 'right',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(31,152,225,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '93px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Definition_View": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '514px', '647px', 'auto', 'auto'],
                            id: 'View_BackgroundCopy',
                            stroke: [1, 'rgba(203,16,16,1.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(33,31,31,1.00)']
                        },
                        {
                            rect: ['0px', '42px', '514px', '605px', 'auto', 'auto'],
                            id: 'Definition_Content',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Navigation_Button_Back',
                            symbolName: 'Navigation_Button_Back',
                            cursor: 'pointer',
                            rect: ['8px', '11px', null, null, 'auto', 'auto']
                        },
                        {
                            id: 'Head',
                            type: 'group',
                            rect: ['198', '11px', '119', '23', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['22px', '0px', '97px', '23px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['\'Helvetica Neue\'', [20, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Headline',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">Wikipedia</span></p>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                id: 'wikipedia',
                                type: 'image',
                                rect: ['0px', '1px', '22px', '22px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/wikipedia.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '514px', '647px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid194",
                            "left",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${Navigation_Button_Back}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid193",
                            "top",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${Navigation_Button_Back}",
                            '11px',
                            '11px'
                        ]
                    ]
                }
            },
            "Menu_Item_View_Content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['3px', '6px', '514px', '32px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">Messung</span></p>',
                            id: 'Headline',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['\'Helvetica Neue\'', [20, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['0px', '38px', '524px', '191px', 'auto', 'auto'],
                            id: 'Value_Background',
                            stroke: [1, 'rgb(203, 16, 16)', 'none'],
                            type: 'rect',
                            fill: ['rgba(54,50,50,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['26px', '55px', '469px', '162px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(235, 219, 219); font-size: 150px;\">000,00​</span></p>',
                            id: 'Value_Display',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['\'Helvetica Neue\'', [150, 'px'], 'rgba(235,219,219,1.00)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['26px', '50px', '469px', '22px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 14px; color: rgb(180, 165, 165);\">Messwert</span></p>',
                            id: 'Value_Label',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['\'Helvetica Neue\'', [20, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'group',
                            id: 'Graph_Element',
                            rect: ['0px', '294px', '524px', '353px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '100%', '353px', 'auto', 'auto'],
                                id: 'Graph_Background',
                                stroke: [1, 'rgb(203, 16, 16)', 'none'],
                                type: 'rect',
                                fill: ['rgba(54,50,50,1.00)']
                            },
                            {
                                rect: ['22px', '42px', '469px', '285px', 'auto', 'auto'],
                                id: 'Graph_Container',
                                stroke: [1, 'rgb(203, 16, 16)', 'none'],
                                type: 'rect',
                                fill: ['rgba(246,246,246,0.00)']
                            },
                            {
                                type: 'text',
                                rect: ['23px', '10px', '469px', '22px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 14px; color: rgb(180, 165, 165);\">Messgraph</span></p>',
                                id: 'Graph_Label',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                font: ['\'Helvetica Neue\'', [20, 'px'], 'rgba(0,0,0,1)', '100', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'Button_200',
                            symbolName: 'Button_Element',
                            rect: ['1px', '229px', '129', '64', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Button_2K',
                            symbolName: 'Button_Element',
                            rect: ['131px', '229px', '129', '64', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Button_200K',
                            symbolName: 'Button_Element',
                            rect: ['261px', '229px', '129', '64', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Button_2M',
                            symbolName: 'Button_Element',
                            rect: ['391px', '229px', '129', '64', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Show_Definition_Btn',
                            symbolName: 'Navigation_Button_Fore',
                            cursor: 'pointer',
                            rect: ['422px', '8px', '93', '22', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Go_Back_Btn',
                            symbolName: 'Navigation_Button_Back',
                            cursor: 'pointer',
                            rect: ['8px', '8px', '97', '22', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '100%']
                        }
                    }
                },
                timeline: {
                    duration: 952,
                    autoPlay: true,
                    data: [
                        [
                            "eid190",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Show_Definition_Btn}",
                            '422px',
                            '422px'
                        ],
                        [
                            "eid184",
                            "top",
                            952,
                            0,
                            "linear",
                            "${Button_2K}",
                            '229px',
                            '229px'
                        ],
                        [
                            "eid180",
                            "top",
                            952,
                            0,
                            "linear",
                            "${Show_Definition_Btn}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid182",
                            "top",
                            952,
                            0,
                            "linear",
                            "${Go_Back_Btn}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid183",
                            "top",
                            952,
                            0,
                            "linear",
                            "${Button_2M}",
                            '229px',
                            '229px'
                        ],
                        [
                            "eid185",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Button_2M}",
                            '391px',
                            '391px'
                        ],
                        [
                            "eid188",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Button_200K}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid187",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Button_2K}",
                            '131px',
                            '131px'
                        ],
                        [
                            "eid181",
                            "top",
                            952,
                            0,
                            "linear",
                            "${Button_200K}",
                            '229px',
                            '229px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Multimeter_edgeActions.js");
})("EDGE-68749657");
