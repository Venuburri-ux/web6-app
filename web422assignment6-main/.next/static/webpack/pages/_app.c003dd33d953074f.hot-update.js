"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,Form,Nav,NavDropdown,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Button,Container,Form,Nav,NavDropdown,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.mjs\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./store.js\");\n/* harmony import */ var _lib_authenticate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/authenticate */ \"./lib/authenticate.js\");\n/* harmony import */ var _lib_userData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/userData */ \"./lib/userData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MainNav = ()=>{\n    _s();\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [searchHistory, setSearchHistory] = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_4__.searchHistoryAtom);\n    const [searchField, setSearchField] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedToken = (0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_5__.readToken)();\n        console.log(\"Saved Token:\", savedToken);\n        setToken(savedToken);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Token State Updated:\", token);\n    }, [\n        token\n    ]);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const queryString = \"title=true&q=\".concat(searchField);\n        try {\n            const updatedHistory = await (0,_lib_userData__WEBPACK_IMPORTED_MODULE_6__.addToHistory)(queryString);\n            setSearchHistory(updatedHistory);\n        } catch (err) {\n            console.error(\"Failed to update search history:\", err);\n        }\n        router.push(\"/artwork?\".concat(queryString));\n        setIsExpanded(false);\n    };\n    const handleInputChange = (event)=>{\n        setSearchField(event.target.value);\n    };\n    const toggleNavbar = ()=>{\n        setIsExpanded(!isExpanded);\n    };\n    const closeNavbar = ()=>{\n        setIsExpanded(false);\n    };\n    const logout = ()=>{\n        setIsExpanded(false);\n        (0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_5__.removeToken)();\n        setToken(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Navbar, {\n        expanded: isExpanded,\n        fixed: \"top\",\n        className: \"navbar-dark bg-primary\",\n        expand: \"lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Navbar.Brand, {\n                    href: \"/\",\n                    children: \"Venu Burri\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Navbar.Toggle, {\n                    onClick: toggleNavbar\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Navbar.Collapse, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Nav, {\n                            className: \"mr-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    passHref: true,\n                                    legacyBehavior: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Nav.Link, {\n                                        onClick: closeNavbar,\n                                        active: router.pathname === \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/search\",\n                                    passHref: true,\n                                    legacyBehavior: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Nav.Link, {\n                                        onClick: closeNavbar,\n                                        active: router.pathname === \"/search\",\n                                        children: \"Advanced Search\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        \"\\xa0\",\n                        token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                            onSubmit: handleSubmit,\n                            className: \"d-flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Form.Control, {\n                                    type: \"text\",\n                                    placeholder: \"Search\",\n                                    name: \"search\",\n                                    value: searchField,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    type: \"submit\",\n                                    variant: \"outline-success\",\n                                    className: \"btn btn-outline-success\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined),\n                        \"\\xa0\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Nav, {\n                            children: token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NavDropdown, {\n                                title: token.userName,\n                                id: \"basic-nav-dropdown\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/favourites\",\n                                        passHref: true,\n                                        legacyBehavior: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NavDropdown.Item, {\n                                            onClick: closeNavbar,\n                                            active: router.pathname === \"/favourites\",\n                                            children: \"Favourites\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/history\",\n                                        passHref: true,\n                                        legacyBehavior: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NavDropdown.Item, {\n                                            onClick: closeNavbar,\n                                            active: router.pathname === \"/history\",\n                                            children: \"Search History\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NavDropdown.Item, {\n                                        onClick: logout,\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Nav, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/login\",\n                                        passHref: true,\n                                        legacyBehavior: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Nav.Link, {\n                                            onClick: closeNavbar,\n                                            active: router.pathname === \"/login\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/register\",\n                                        passHref: true,\n                                        legacyBehavior: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_Form_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Nav.Link, {\n                                            onClick: closeNavbar,\n                                            active: router.pathname === \"/register\",\n                                            children: \"Register\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\venuc\\\\Downloads\\\\param's-web6\\\\web422assignment6-main\\\\components\\\\MainNav.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainNav, \"YX3BoVs1OiajW4wgDad9jb7LBSA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        jotai__WEBPACK_IMPORTED_MODULE_7__.useAtom\n    ];\n});\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5OYXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQzRDO0FBQ3ZEO0FBQ0c7QUFDWTtBQUNnQjtBQUNkO0FBRTlDLE1BQU1lLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNrQixPQUFPQyxTQUFTLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNb0IsU0FBU2xCLHNEQUFTQTtJQUN4QixNQUFNLENBQUNtQixlQUFlQyxpQkFBaUIsR0FBR1osOENBQU9BLENBQUNDLHFEQUFpQkE7SUFDbkUsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0IsYUFBYVosNERBQVNBO1FBQzVCYSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRjtRQUM1Qk4sU0FBU007SUFDWCxHQUFHLEVBQUU7SUFFTHhCLGdEQUFTQSxDQUFDO1FBQ1J5QixRQUFRQyxHQUFHLENBQUMsd0JBQXdCVDtJQUN0QyxHQUFHO1FBQUNBO0tBQU07SUFFVixNQUFNVSxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLGNBQWMsZ0JBQTRCLE9BQVpSO1FBQ3BDLElBQUk7WUFDRixNQUFNUyxpQkFBaUIsTUFBTWxCLDJEQUFZQSxDQUFDaUI7WUFDMUNULGlCQUFpQlU7UUFDbkIsRUFBRSxPQUFPQyxLQUFLO1lBQ1pQLFFBQVFRLEtBQUssQ0FBQyxvQ0FBb0NEO1FBQ3BEO1FBQ0FiLE9BQU9lLElBQUksQ0FBQyxZQUF3QixPQUFaSjtRQUN4QmQsY0FBYztJQUNoQjtJQUVBLE1BQU1tQixvQkFBb0IsQ0FBQ1A7UUFDekJMLGVBQWVLLE1BQU1RLE1BQU0sQ0FBQ0MsS0FBSztJQUNuQztJQUVBLE1BQU1DLGVBQWU7UUFDbkJ0QixjQUFjLENBQUNEO0lBQ2pCO0lBRUEsTUFBTXdCLGNBQWM7UUFDbEJ2QixjQUFjO0lBQ2hCO0lBRUEsTUFBTXdCLFNBQVM7UUFDYnhCLGNBQWM7UUFDZEwsOERBQVdBO1FBQ1hPLFNBQVM7UUFDVEMsT0FBT2UsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ2hDLHVIQUFNQTtRQUFDdUMsVUFBVTFCO1FBQVkyQixPQUFNO1FBQU1DLFdBQVU7UUFBeUJDLFFBQU87a0JBQ2xGLDRFQUFDdEMsMEhBQVNBOzs4QkFDUiw4REFBQ0osdUhBQU1BLENBQUMyQyxLQUFLO29CQUFDQyxNQUFLOzhCQUFJOzs7Ozs7OEJBQ3ZCLDhEQUFDNUMsdUhBQU1BLENBQUM2QyxNQUFNO29CQUFDQyxTQUFTVjs7Ozs7OzhCQUN4Qiw4REFBQ3BDLHVIQUFNQSxDQUFDK0MsUUFBUTs7c0NBQ2QsOERBQUM5QyxvSEFBR0E7NEJBQUN3QyxXQUFVOzs4Q0FDYiw4REFBQ25DLGtEQUFJQTtvQ0FBQ3NDLE1BQUs7b0NBQUlJLFFBQVE7b0NBQUNDLGNBQWM7OENBQ3BDLDRFQUFDaEQsb0hBQUdBLENBQUNLLElBQUk7d0NBQUN3QyxTQUFTVDt3Q0FBYWEsUUFBUWpDLE9BQU9rQyxRQUFRLEtBQUs7a0RBQUs7Ozs7Ozs7Ozs7O2dDQUVsRXBDLHVCQUNDLDhEQUFDVCxrREFBSUE7b0NBQUNzQyxNQUFLO29DQUFVSSxRQUFRO29DQUFDQyxjQUFjOzhDQUMxQyw0RUFBQ2hELG9IQUFHQSxDQUFDSyxJQUFJO3dDQUFDd0MsU0FBU1Q7d0NBQWFhLFFBQVFqQyxPQUFPa0MsUUFBUSxLQUFLO2tEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHdkU7d0JBRUxwQyx1QkFDQyw4REFBQ2IscUhBQUlBOzRCQUFDa0QsVUFBVTNCOzRCQUFjZ0IsV0FBVTs7OENBQ3RDLDhEQUFDdkMscUhBQUlBLENBQUNtRCxPQUFPO29DQUFDQyxNQUFLO29DQUFPQyxhQUFZO29DQUFTQyxNQUFLO29DQUFTckIsT0FBT2Y7b0NBQWFxQyxVQUFVeEI7Ozs7Ozs4Q0FDM0YsOERBQUM1Qix1SEFBTUE7b0NBQUNpRCxNQUFLO29DQUFTSSxTQUFRO29DQUFrQmpCLFdBQVU7OENBQTBCOzs7Ozs7Ozs7Ozs7d0JBRXRGO3NDQUVGLDhEQUFDeEMsb0hBQUdBO3NDQUNEYyxzQkFDQyw4REFBQ1osNEhBQVdBO2dDQUFDd0QsT0FBTzVDLE1BQU02QyxRQUFRO2dDQUFFQyxJQUFHOztrREFDckMsOERBQUN2RCxrREFBSUE7d0NBQUNzQyxNQUFLO3dDQUFjSSxRQUFRO3dDQUFDQyxjQUFjO2tEQUM5Qyw0RUFBQzlDLDRIQUFXQSxDQUFDMkQsSUFBSTs0Q0FBQ2hCLFNBQVNUOzRDQUFhYSxRQUFRakMsT0FBT2tDLFFBQVEsS0FBSztzREFBZTs7Ozs7Ozs7Ozs7a0RBRXJGLDhEQUFDN0Msa0RBQUlBO3dDQUFDc0MsTUFBSzt3Q0FBV0ksUUFBUTt3Q0FBQ0MsY0FBYztrREFDM0MsNEVBQUM5Qyw0SEFBV0EsQ0FBQzJELElBQUk7NENBQUNoQixTQUFTVDs0Q0FBYWEsUUFBUWpDLE9BQU9rQyxRQUFRLEtBQUs7c0RBQVk7Ozs7Ozs7Ozs7O2tEQUVsRiw4REFBQ2hELDRIQUFXQSxDQUFDMkQsSUFBSTt3Q0FBQ2hCLFNBQVNSO2tEQUFROzs7Ozs7Ozs7OzswREFHckMsOERBQUNyQyxvSEFBR0E7O2tEQUNGLDhEQUFDSyxrREFBSUE7d0NBQUNzQyxNQUFLO3dDQUFTSSxRQUFRO3dDQUFDQyxjQUFjO2tEQUN6Qyw0RUFBQ2hELG9IQUFHQSxDQUFDSyxJQUFJOzRDQUFDd0MsU0FBU1Q7NENBQWFhLFFBQVFqQyxPQUFPa0MsUUFBUSxLQUFLO3NEQUFVOzs7Ozs7Ozs7OztrREFFeEUsOERBQUM3QyxrREFBSUE7d0NBQUNzQyxNQUFLO3dDQUFZSSxRQUFRO3dDQUFDQyxjQUFjO2tEQUM1Qyw0RUFBQ2hELG9IQUFHQSxDQUFDSyxJQUFJOzRDQUFDd0MsU0FBU1Q7NENBQWFhLFFBQVFqQyxPQUFPa0MsUUFBUSxLQUFLO3NEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTM0Y7R0FuR012Qzs7UUFHV2Isa0RBQVNBO1FBQ2tCUSwwQ0FBT0E7OztLQUo3Q0s7QUFxR04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluTmF2LmpzP2VmODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBGb3JtLCBOYXZEcm9wZG93biwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUF0b20gfSBmcm9tICdqb3RhaSc7XG5pbXBvcnQgeyBzZWFyY2hIaXN0b3J5QXRvbSB9IGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHsgcmVtb3ZlVG9rZW4sIHJlYWRUb2tlbiB9IGZyb20gJ0AvbGliL2F1dGhlbnRpY2F0ZSc7XG5pbXBvcnQgeyBhZGRUb0hpc3RvcnkgfSBmcm9tICdAL2xpYi91c2VyRGF0YSc7XG5cbmNvbnN0IE1haW5OYXYgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzZWFyY2hIaXN0b3J5LCBzZXRTZWFyY2hIaXN0b3J5XSA9IHVzZUF0b20oc2VhcmNoSGlzdG9yeUF0b20pO1xuICBjb25zdCBbc2VhcmNoRmllbGQsIHNldFNlYXJjaEZpZWxkXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkVG9rZW4gPSByZWFkVG9rZW4oKTtcbiAgICBjb25zb2xlLmxvZyhcIlNhdmVkIFRva2VuOlwiLCBzYXZlZFRva2VuKTtcbiAgICBzZXRUb2tlbihzYXZlZFRva2VuKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUb2tlbiBTdGF0ZSBVcGRhdGVkOlwiLCB0b2tlbik7XG4gIH0sIFt0b2tlbl0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBgdGl0bGU9dHJ1ZSZxPSR7c2VhcmNoRmllbGR9YDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXBkYXRlZEhpc3RvcnkgPSBhd2FpdCBhZGRUb0hpc3RvcnkocXVlcnlTdHJpbmcpO1xuICAgICAgc2V0U2VhcmNoSGlzdG9yeSh1cGRhdGVkSGlzdG9yeSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHNlYXJjaCBoaXN0b3J5OicsIGVycik7XG4gICAgfVxuICAgIHJvdXRlci5wdXNoKGAvYXJ0d29yaz8ke3F1ZXJ5U3RyaW5nfWApO1xuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VhcmNoRmllbGQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoKSA9PiB7XG4gICAgc2V0SXNFeHBhbmRlZCghaXNFeHBhbmRlZCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VOYXZiYXIgPSAoKSA9PiB7XG4gICAgc2V0SXNFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgIHJlbW92ZVRva2VuKCk7XG4gICAgc2V0VG9rZW4obnVsbCk7XG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE5hdmJhciBleHBhbmRlZD17aXNFeHBhbmRlZH0gZml4ZWQ9XCJ0b3BcIiBjbGFzc05hbWU9XCJuYXZiYXItZGFyayBiZy1wcmltYXJ5XCIgZXhwYW5kPVwibGdcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5WZW51IEJ1cnJpPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXtjbG9zZU5hdmJhcn0gYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wifT5Ib21lPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHt0b2tlbiAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VhcmNoXCIgcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9e2Nsb3NlTmF2YmFyfSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvc2VhcmNoXCJ9PkFkdmFuY2VkIFNlYXJjaDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAge3Rva2VuICYmIChcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBuYW1lPVwic2VhcmNoXCIgdmFsdWU9e3NlYXJjaEZpZWxkfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPlNlYXJjaDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgIHt0b2tlbiA/IChcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXt0b2tlbi51c2VyTmFtZX0gaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Zhdm91cml0ZXNcIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9e2Nsb3NlTmF2YmFyfSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvZmF2b3VyaXRlc1wifT5GYXZvdXJpdGVzPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hpc3RvcnlcIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIG9uQ2xpY2s9e2Nsb3NlTmF2YmFyfSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvaGlzdG9yeVwifT5TZWFyY2ggSGlzdG9yeTwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXtjbG9zZU5hdmJhcn0gYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xvZ2luXCJ9PkxvZ2luPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9e2Nsb3NlTmF2YmFyfSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcmVnaXN0ZXJcIn0+UmVnaXN0ZXI8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5hdmJhciIsIk5hdiIsIkZvcm0iLCJOYXZEcm9wZG93biIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsIkxpbmsiLCJ1c2VBdG9tIiwic2VhcmNoSGlzdG9yeUF0b20iLCJyZW1vdmVUb2tlbiIsInJlYWRUb2tlbiIsImFkZFRvSGlzdG9yeSIsIk1haW5OYXYiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsInRva2VuIiwic2V0VG9rZW4iLCJyb3V0ZXIiLCJzZWFyY2hIaXN0b3J5Iiwic2V0U2VhcmNoSGlzdG9yeSIsInNlYXJjaEZpZWxkIiwic2V0U2VhcmNoRmllbGQiLCJzYXZlZFRva2VuIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWVyeVN0cmluZyIsInVwZGF0ZWRIaXN0b3J5IiwiZXJyIiwiZXJyb3IiLCJwdXNoIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZ2dsZU5hdmJhciIsImNsb3NlTmF2YmFyIiwibG9nb3V0IiwiZXhwYW5kZWQiLCJmaXhlZCIsImNsYXNzTmFtZSIsImV4cGFuZCIsIkJyYW5kIiwiaHJlZiIsIlRvZ2dsZSIsIm9uQ2xpY2siLCJDb2xsYXBzZSIsInBhc3NIcmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhY3RpdmUiLCJwYXRobmFtZSIsIm9uU3VibWl0IiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJvbkNoYW5nZSIsInZhcmlhbnQiLCJ0aXRsZSIsInVzZXJOYW1lIiwiaWQiLCJJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainNav.js\n"));

/***/ })

});