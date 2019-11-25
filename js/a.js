(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    494: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(680)
          , o = r(546);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(668);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    504: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(r(58))
          , o = i(r(185));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = r(25)
          , s = r(8);
        t.default = {
            isMemberShipValid: function(e) {
                return 0 !== (0,
                n.default)(e).length && (0 === a.get(e, "expired", 1) && 0 < a.get(e, "expiredTime", 0) && (new Date).getTime() < 1e3 * a.get(e, "expiredTime", 0))
            },
            canReceiveMemberCard: function(e) {
                return s.inDevelopment() && console.log(e),
                !1
            },
            canBookFreeReading: function(e) {
                var t = e.bookInfo
                  , r = e.memberCardSummary;
                return this.isMemberShipValid(r) && (o.default.isSupportMemberShip(t) || -1 < a.get(r, "freeBookIds", []).indexOf(t.bookId))
            },
            discountToChinese: function(e) {
                var t = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
                  , r = 100 - e;
                return r <= 0 ? "" : r < 10 ? t[0] + t[r] + "折" : r < 100 ? r % 10 == 0 ? t[r / 10] + "折" : t[r / 10] + t[r % 10] + "折" : ""
            }
        }
    },
    546: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(547)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    547: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Y(r(184))
          , R = Y(r(269))
          , T = Y(r(277))
          , o = Y(r(131))
          , s = Y(r(186))
          , u = Y(r(58))
          , d = Y(r(626))
          , h = Y(r(508))
          , i = Y(r(130))
          , f = K(r(57))
          , p = K(r(124))
          , a = r(59)
          , l = Y(r(185))
          , c = Y(r(504))
          , g = Y(r(40))
          , _ = Y(r(548))
          , C = Y(r(636))
          , m = Y(r(637))
          , v = Y(r(639))
          , E = Y(r(641))
          , b = Y(r(646))
          , k = Y(r(648))
          , I = Y(r(650))
          , S = Y(r(271))
          , A = r(61)
          , D = Y(A)
          , y = Y(r(126))
          , w = Y(r(652))
          , P = Y(r(654))
          , B = Y(r(656))
          , N = Y(r(543))
          , L = Y(r(658))
          , O = Y(r(661))
          , x = Y(r(663))
          , M = Y(r(32))
          , H = Y(r(41))
          , U = Y(r(42))
          , F = Y(r(43))
          , $ = Y(r(44))
          , W = Y(r(665))
          , j = Y(r(125))
          , G = Y(r(187))
          , q = Y(r(192));
        function K(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e,
            t
        }
        function Y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Q = r(8)
          , V = r(25)
          , z = r(128)
          , X = "reader"
          , J = "book";
        t.default = {
            name: X,
            components: {
                ReaderLoginGuide: B.default,
                ReaderBottomSettingPanel: I.default,
                ReaderBottomBar: k.default,
                ReaderMemberCardTips: O.default,
                PayChapterDialog: P.default,
                PayWholeBookDialog: w.default,
                Loading: y.default,
                BackgroundMask: S.default,
                ReaderTopBar: b.default,
                ReaderCatalog: E.default,
                ReaderBookInfo: v.default,
                ReaderControls: m.default,
                CustomStyle: C.default
            },
            asyncData: function(e) {
                var t = e.store
                  , r = e.user
                  , n = e.envConfig;
                t.registerModule(X, (0,
                d.default)()),
                t.registerModule(J, (0,
                h.default)());
                var o = t.state.route.params.infoId
                  , i = z.parseReaderInfoId(o)
                  , a = i.bookId;
                t.commit(p.UPDATE_INIT_BOOK_ID, a);
                var s = i.chapterUid
                  , c = s ? parseInt(s) : 0
                  , l = Q.hasLogin(r);
                return t.dispatch(f.FETCH_READER_INIT_DATA, {
                    initChapterUid: c,
                    envConfig: n,
                    isLogin: l
                }).then(function() {
                    var e = t.state[X].bookInfo;
                    0 < (0,
                    u.default)(e).length && (t.commit(p.UPDATE_PAGE_TITLE, e.title + "-" + e.author + "-微信读书"),
                    2 === e.ispub ? t.commit(p.UPDATE_PAGE_KEYWORDS, [e.title, e.author, e.category, e.title + "免费小说", e.title + "更新", "免费小说", "小说下载"].join(",")) : t.commit(p.UPDATE_PAGE_KEYWORDS, [e.title, e.author, e.category, "免费小说", e.publisher].join(",")),
                    t.commit(p.UPDATE_PAGE_DESCRIPTION, e.intro)),
                    t.commit(p.UPDATE_READER_PAGE_SERVER_TIMESTAMP, parseInt((new Date).getTime() / 1e3))
                })
            },
            created: function() {
                if (Q.isEnvClient) {
                    this.$store.registerModule(X, (0,
                    d.default)(), {
                        preserveState: !0
                    }),
                    this.$store.registerModule(J, (0,
                    h.default)(), {
                        preserveState: !0
                    });
                    var e = (new Date).getTime();
                    this.$store.commit(p.UPDATE_READER_PAGE_CLIENT_TIMESTAMP, parseInt(e / 1e3)),
                    (0,
                    N.default)(),
                    function() {
                        if (Q.isEnvClient) {
                            var t = new (M.default.extend(x.default))({});
                            M.default.prototype.$footerNote = t,
                            M.default.prototype.$showFooterNote = function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                t.$el && t.$el.parentNode || (t.$mount(document.createElement("div")),
                                document.body.appendChild(t.$el)),
                                t.show(e)
                            }
                        }
                    }(),
                    (0,
                    L.default)(),
                    ["dragstart"].forEach(function(e) {
                        document.addEventListener(e, function(e) {
                            e.preventDefault()
                        }, !1)
                    });
                    var t = V.throttle(this.handleClickPrevChapter, 500)
                      , r = V.throttle(this.handleClickNextChapter, 500);
                    document.addEventListener("keydown", function(e) {
                        switch ((e = e || window.event).keyCode) {
                        case 37:
                            t();
                            break;
                        case 39:
                            r()
                        }
                    })
                }
            },
            mounted: function() {
                var n = this;
                if (Q.isEnvClient) {
                    var r = this;
                    this.$nextTick(function() {
                        var e = this;
                        g.default.handleElementScrollEvent(window, null, function() {
                            r.$footerNote.hide(),
                            r.tryToHideMenu(),
                            r.isShowBottomSettingPanel && (r.isShowBottomSettingPanel = !1)
                        });
                        var t = document.documentElement;
                        t && t.addEventListener("click", function() {
                            e.tryToHideMenu()
                        })
                    });
                    var o = V.throttle(r.resizeToReCollect, 1e3);
                    window.onresize = V.debounce(function() {
                        var e = r.$refs.renderTargetContainerSibling;
                        if (e) {
                            var t = e.offsetWidth;
                            r.lastPreRenderWidth !== t && o(t)
                        }
                    }, 200);
                    var t = +new Date;
                    this.$store.dispatch(f.FETCH_READER_CHAPTER_CONTENT).then(function() {
                        return n.waitForPreRender().then(function() {
                            if (Q.inDevelopment()) {
                                var e = +new Date;
                                console.log("mounted 耗费是时间 = ", e - t, "毫秒")
                            }
                            return n.collectPreRenderInfos()
                        }).then(function() {
                            var e = n.currentChapter
                              , t = n.progress
                              , r = V.get(t, "book.chapterUid", 0);
                            return e && e.chapterUid === r && n.scrollTo({
                                chapterOffset: V.get(t, "book.chapterOffset", 0)
                            }),
                            {
                                success: !0
                            }
                        })
                    }, function(e) {
                        return e
                    }).then(function(e) {
                        e && e.success && (n.hasLogin && n.$store.dispatch(f.UPDATE_READER_LOCAL_LAST_CHAPTER),
                        n.setupProgressReportOnDomReady(),
                        n.requestMemberCardPriceIfNeeded(),
                        n.checkIfShowMemberCardFreeReadingTips(),
                        n.handleLoginPendingActions(),
                        n.checkIfNeedRequestLoginQRCode())
                    }).catch(function(e) {
                        console.log("Error in FETCH_READER_CHAPTER_CONTENT", e)
                    }),
                    this.autoSearchOnClientMounted(),
                    this.logOnClientMounted()
                }
            },
            beforeDestroy: function() {
                this.reportTimer && clearTimeout(this.reportTimer)
            },
            destroyed: function() {
                this.$store.unregisterModule(X),
                this.$store.unregisterModule(J)
            },
            data: function() {
                return {
                    hasSetupProgressReport: !1,
                    reportTimer: null,
                    isShowPayWholeDialog: !1,
                    isShowPayChapterDialog: !1,
                    isShowBottomSettingPanel: !1,
                    lastPreRenderWidth: 0,
                    afterRenderResultObject: {},
                    chapterContentHighLightBgHtml: "",
                    hasFetchMemberCardPrice: !1,
                    buyMemberCardButtonLine1: "无限卡 19元/月 · 全场书籍免费读",
                    buyMemberCardButtonLine2: "",
                    loginGuideQRCodeImg: "",
                    isLoginGetUidError: !1,
                    isLoginGetInfoError: !1,
                    isLoginQRCodeLoading: !1,
                    autoLoadLoginQRCodeCount: 1,
                    isBalanceNeedAuth: !1
                }
            },
            methods: {
                tryToHideMenu: function() {
                    var e = this.$refs.reader_top_bar;
                    e && e.isMenuShowing && e.handleHideMenu()
                },
                onClickLogout: function() {
                    return this.$store.dispatch(f.FETCH_LOGOUT).then(function(e) {
                        e && 1 === e.success && window.location.reload()
                    })
                },
                onClickShelf: function() {
                    this.saveReportInfo("Nav_Shelf"),
                    (0,
                    i.default)("/web/shelf")
                },
                waitForPreRender: function() {
                    var n = this;
                    return new s.default(function(a) {
                        function r() {
                            var e = n.$refs.renderTargetContainerSibling
                              , t = n.$refs.preRenderContainer;
                            if (e && t) {
                                var o = t.getElementsByTagName("img")
                                  , i = o.length;
                                0 < i ? function() {
                                    var e = void 0
                                      , t = Math.max(4e3, Math.min(1e4, 400 * i));
                                    e = setTimeout(function() {
                                        e = null,
                                        a()
                                    }, t);
                                    for (var r = i, n = 0; n < i; n++)
                                        o[n].onload = function() {
                                            0 === --r && e && (clearTimeout(e),
                                            a())
                                        }
                                }() : a();
                                var r = e.offsetWidth;
                                n.lastPreRenderWidth = r,
                                t.style.width = r + "px"
                            } else
                                a()
                        }
                        n.$nextTick(function() {
                            var e = n.$refs.renderTargetContainerSibling
                              , t = n.$refs.preRenderContainer;
                            e && t ? r() : n.$nextTick(function() {
                                r()
                            })
                        })
                    }
                    )
                },
                collectPreRenderInfos: function() {
                    var i = this
                      , a = this;
                    return new s.default(function(e) {
                        var t = a.$refs.preRenderContainer;
                        a.afterRenderResultObject = W.default.collect(t, i.bookId);
                        var r = a.afterRenderResultObject.randomHtml.join("")
                          , n = a.afterRenderResultObject.decoration.map(function(e) {
                            return e.html
                        }).join("")
                          , o = "<style>" + a.afterRenderResultObject.customStyle.join(" ") + "</style>" + r + n;
                        a.$store.commit(p.UPDATE_READER_CHAPTER_CONTENT_TARGET_HTML, o),
                        a.$store.commit(p.UPDATE_READER_CONTENT_STATE, "DONE"),
                        a.$nextTick(function() {
                            a.afterRenderResultObject.rootHeight <= 0 && console.log("render rootHeight error !!!"),
                            a.$refs.renderTargetContent.style.height = a.afterRenderResultObject.rootHeight + "px",
                            e()
                        })
                    }
                    ).then(function() {
                        a.bindVideoEvent(),
                        a.bindFooterNoteEvent()
                    })
                },
                resizeToReCollect: function(e) {
                    var r = this
                      , n = this;
                    "PRERENDER" !== this.chapterContentState && (this.$store.commit(p.UPDATE_READER_CONTENT_STATE, "PRERENDER"),
                    this.$nextTick(function() {
                        r.lastPreRenderWidth = e,
                        r.$refs.preRenderContainer.style.width = e + "px";
                        var t = +new Date;
                        return r.waitForPreRender().then(function() {
                            if (Q.inDevelopment()) {
                                var e = +new Date;
                                console.log("waitForPreRender 耗费是时间 = ", e - t, "毫秒")
                            }
                            return n.collectPreRenderInfos()
                        })
                    }))
                },
                bindVideoEvent: function() {
                    var r = document.querySelectorAll("video");
                    if (0 < r.length)
                        for (var e = function(e) {
                            var t = r[e];
                            t.removeEventListener("click", null),
                            t.addEventListener("click", function() {
                                0 < t.currentTime && !t.paused && !t.ended && 2 < t.readyState ? t.pause() : (t.parentNode && t.parentNode.classList.add("wr_video_playing"),
                                t.play())
                            }),
                            t.onended = function() {
                                t.parentNode && t.parentNode.classList.remove("wr_video_playing")
                            }
                            ,
                            t.onpause = function() {
                                t.parentNode && t.parentNode.classList.remove("wr_video_playing")
                            }
                        }, t = 0; t < r.length; t++)
                            e(t)
                },
                bindFooterNoteEvent: function() {
                    var r = this
                      , n = document.querySelectorAll(".js_readerFooterNote");
                    if (0 < n.length)
                        for (var e = function(e) {
                            var t = n[e];
                            t.removeEventListener("click", null),
                            t.addEventListener("click", function() {
                                var e = t.getAttribute("data-wr-footernote");
                                e && 0 < e.length && r.$showFooterNote({
                                    text: e,
                                    node: t
                                })
                            })
                        }, t = 0; t < n.length; t++)
                            e(t)
                },
                handleClickShelfButtonInBookInfo: function() {
                    return this.reportClientBusiness({
                        itemName: "Web_Reader_FirstPage_AddClk"
                    }),
                    this.handleClickShelfButton()
                },
                handleClickShelfButtonOnTopBar: function() {
                    return this.reportClientBusiness({
                        itemName: "Web_Reader_TopAddClk"
                    }),
                    this.handleClickShelfButton()
                },
                handleClickShelfButton: function() {
                    if (this.hasLogin) {
                        if (!this.isInShelf)
                            return this.$store.dispatch(f.FETCH_READER_ADD_SHELF)
                    } else
                        this.$showLoginDialog({
                            bottomTitle: "扫码登录微信读书",
                            bottomSubTitle: "在书架随时阅读本书"
                        })
                },
                handleClickReceiveMemberCardButton: function() {
                    this.isPhone ? this.downloadApp() : this.receiveMemberCard()
                },
                handleClickNextChapter: function() {
                    var e = this.getChapterWithIdxOffset(1);
                    if (e)
                        return this.changeChapter({
                            chapterUid: e.chapterUid
                        })
                },
                handleClickPrevChapter: function() {
                    var e = this.getChapterWithIdxOffset(-1);
                    if (e)
                        return this.changeChapter({
                            chapterUid: e.chapterUid
                        })
                },
                handleClickFirstChapter: function() {
                    var e = this.chapterInfos;
                    if (e && 0 < e.length) {
                        var t = e[0];
                        return this.hideCatalog(),
                        this.changeChapter({
                            chapterUid: t.chapterUid
                        })
                    }
                },
                handleClickChapter: function(e) {
                    if (e)
                        return this.hideCatalog(),
                        this.changeChapter({
                            chapterUid: e
                        })
                },
                changeChapter: function(t) {
                    var r = this;
                    return this.$store.dispatch(f.CHANGE_READER_CHAPTER, {
                        chapterUid: t.chapterUid
                    }).then(function() {
                        return r.waitForPreRender().then(function() {
                            return r.collectPreRenderInfos()
                        }).then(function() {
                            return {
                                success: !0
                            }
                        })
                    }, function(e) {
                        if (e && e.isCustomError)
                            switch (e.reason) {
                            case "currentChapter":
                                r.clearHighLightDom(),
                                t.searchItem ? r.highLightDomsAndScrollTo(t.searchItem) : t.scrollTo && r.scrollTo(t.scrollTo);
                                break;
                            case "forceReload":
                                window.location.reload();
                                break;
                            case "sessionTimeout":
                                r.handleSessionTimeout()
                            }
                        else
                            console.error("changeChapter-UnexpectedError:", e);
                        return e
                    }).then(function(e) {
                        if (e && e.success)
                            return r.clearHighLightDom(),
                            t.searchItem ? r.highLightDomsAndScrollTo(t.searchItem) : t.scrollTo && r.scrollTo(t.scrollTo),
                            r.checkIfShowMemberCardFreeReadingTips(),
                            r.checkIfNeedRequestLoginQRCode(),
                            r.reportReadingProgress()
                    })
                },
                reloadCurrentChapter: function() {
                    var t = this;
                    return this.$store.dispatch(f.RELOAD_READER_CURRENT_CHAPTER).then(function() {
                        return t.waitForPreRender().then(function() {
                            return t.collectPreRenderInfos()
                        }).then(function() {
                            return {
                                success: !0
                            }
                        })
                    }, function(e) {
                        if (e && e.isCustomError)
                            switch (e.reason) {
                            case "forceReload":
                                window.location.reload();
                                break;
                            case "sessionTimeout":
                                t.handleSessionTimeout()
                            }
                        else
                            console.error("reloadCurrentChapter-UnexpectedError:", e);
                        return e
                    })
                },
                onAfterLoginToGetMemberCard: function() {
                    D.default.setSessionStorage(A.KEY_READER_LOGIN_PENDING_ACTION, (0,
                    o.default)({
                        toFreeRead: 1
                    })),
                    window.location.reload()
                },
                showCatalog: function() {
                    this.$refs.readerCatalog.show(),
                    this.isShowAutoSearchHint && this.$store.commit(p.UPDATE_READER_IS_SHOW_AUTO_SEARCH_HINT, !1)
                },
                hideCatalog: function() {
                    this.$refs.readerCatalog.close()
                },
                toggleCatalog: function() {
                    this.$refs.readerCatalog.toggle()
                },
                handleClickControls: function(e) {
                    switch (e) {
                    case "catalog":
                        return this.reportClientBusiness({
                            itemName: "Web_Reader_ContentClk"
                        }),
                        this.showCatalog();
                    case "dark":
                        return this.$store.dispatch(f.TOGGLE_THEME, {
                            isWhite: !1
                        });
                    case "white":
                        return this.reportClientBusiness({
                            itemName: "Web_Reader_LightClk"
                        }),
                        this.$store.dispatch(f.TOGGLE_THEME, {
                            isWhite: !0
                        });
                    case "download":
                        return this.downloadAppToRead();
                    case "prev":
                        return this.handleClickPrevChapter();
                    case "next":
                        return this.handleClickNextChapter()
                    }
                },
                toggleBottomSettingPanel: function() {
                    this.isShowBottomSettingPanel = !this.isShowBottomSettingPanel
                },
                handleClickBottomBarItem: function(e) {
                    switch (e) {
                    case "shelf":
                        return this.handleClickShelfButton();
                    case "catalog":
                        return this.isShowBottomSettingPanel && (this.isShowBottomSettingPanel = !1),
                        this.toggleCatalog();
                    case "setting":
                        return this.$refs.readerCatalog && this.$refs.readerCatalog.isShowing() && this.hideCatalog(),
                        this.toggleBottomSettingPanel()
                    }
                },
                handleClickBottomSettingPanelItem: function(e) {
                    switch (e) {
                    case "white":
                        return this.reportClientBusiness({
                            itemName: "Web_Reader_LightClk"
                        }),
                        this.$store.dispatch(f.TOGGLE_THEME, {
                            isWhite: !0
                        });
                    case "dark":
                        return this.$store.dispatch(f.TOGGLE_THEME, {
                            isWhite: !1
                        });
                    case "download":
                        (0,
                        H.default)(function(e) {
                            e ? (0,
                            F.default)({
                                openUrl: (0,
                                $.default)("", {})
                            }) : (0,
                            U.default)()
                        })
                    }
                },
                doSearch: function(e) {
                    return e.isLoadMore || this.reportClientBusiness({
                        itemName: "Web_Reader_Search"
                    }),
                    this.$store.dispatch(f.FETCH_READER_SEARCH, e)
                },
                enterSearch: function() {
                    return this.$store.commit(p.UPDATE_READER_IS_IN_SEARCH, !0)
                },
                exitSearch: function() {
                    this.$store.commit(p.CLEAR_READER_SEARCH_RESULT),
                    this.$store.commit(p.UPDATE_READER_IS_IN_SEARCH, !1)
                },
                handleClickSearchItem: function(e) {
                    return this.hideCatalog(),
                    this.reportClientBusiness({
                        itemName: "Web_Reader_Search_ResultClk"
                    }),
                    this.changeChapter({
                        chapterUid: e.chapterUid,
                        searchItem: e
                    })
                },
                clearHighLightDom: function() {
                    this.chapterContentHighLightBgHtml = "",
                    (0,
                    T.default)(document.querySelectorAll(".wr_highlight_char")).forEach(function(e) {
                        e.classList.remove("wr_highlight_char")
                    })
                },
                highLightDomsAndScrollTo: function(e) {
                    if (e) {
                        var t = e.absStart
                          , r = e.absEnd
                          , n = e.keywordStart
                          , o = e.keyword || [];
                        if (e.abstract && !(r <= t || n < t || r < n)) {
                            var i = this.getAfterRenderObjectContents()
                              , a = this.findObjsInOffsetRange(i, t, r)
                              , s = a.length
                              , c = [];
                            if (0 < s)
                                for (var l = 0, u = null, d = 0, h = []; l < s; ) {
                                    var f = a[l];
                                    if (parseInt(f.offset) < n)
                                        l++;
                                    else {
                                        var p = f.text;
                                        if (p && 0 !== p.length) {
                                            if (u)
                                                u.indexOf(p) === d ? (d += p.length,
                                                h.push(f)) : (u = null,
                                                d = 0,
                                                h = []);
                                            else
                                                for (var g = 0; g < o.length; g++) {
                                                    var _ = o[g];
                                                    if (0 === _.indexOf(p)) {
                                                        u = _,
                                                        d = p.length,
                                                        h.push(f);
                                                        break
                                                    }
                                                }
                                            u && 0 < u.length && u.length === d && (c.push.apply(c, (0,
                                            R.default)(h)),
                                            h = []),
                                            l++
                                        } else
                                            l++
                                    }
                                }
                            var C = this.getContentRectsByContentObjs(i, a);
                            if (0 < C.length) {
                                var m = "";
                                C.forEach(function(e) {
                                    m += '<div class="wr_highlight_bg" style="left:' + e.x + "px;top:" + e.y + "px;width:" + e.w + "px;height:" + e.h + 'px;"></div>'
                                }),
                                this.chapterContentHighLightBgHtml = m
                            } else
                                this.chapterContentHighLightBgHtml = "";
                            (0,
                            T.default)(document.querySelectorAll(".wr_highlight_char")).forEach(function(e) {
                                e.classList.remove("wr_highlight_char")
                            });
                            for (var v = 0; v < c.length; v++) {
                                var E = c[v]
                                  , b = document.querySelector("[data-wr-id=" + E.id + "]");
                                b && b.classList.add("wr_highlight_char")
                            }
                            this.$nextTick(function() {
                                if (0 < C.length) {
                                    var e = document.querySelector(".wr_highlight_bg");
                                    if (e) {
                                        var t = e.offsetTop + e.offsetParent.offsetTop - 40 - 72;
                                        0 < t && window.scrollTo(0, t)
                                    }
                                }
                            })
                        }
                    }
                },
                scrollTo: function(e) {
                    if (e) {
                        var t = e.chapterOffset;
                        if (t && 0 < t) {
                            var r = this.getAfterRenderObjectContents()
                              , n = this.findObjsInOffsetRange(r, t, t + 1);
                            if (n && 0 < n.length) {
                                var o = n[0]
                                  , i = document.querySelector("[data-wr-id=" + o.id + "]");
                                if (i) {
                                    var a = i.offsetTop + i.offsetParent.offsetTop - 40 - 72;
                                    0 < a && window.scrollTo(0, a)
                                }
                            }
                        }
                    }
                },
                getAfterRenderObjectContents: function() {
                    return V.get(this.afterRenderResultObject, "content", [])
                },
                findFirstObjIndexContainingText: function(e) {
                    for (var t = 0; t < e.length; ) {
                        var r = e[t];
                        if (r.text && 0 < r.text.length)
                            return t;
                        t++
                    }
                    return -1
                },
                findFirstObjIdxBelowTop: function(e, t) {
                    for (var r = 0; r < e.length; ) {
                        var n = e[r].rect;
                        if (n.y + n.h > t)
                            return r;
                        r++
                    }
                    return -1
                },
                getContentStringFromObjIdx: function(e, t, r) {
                    for (var n = ""; t < e.length && n.length < r; ) {
                        n += e[t].text || "",
                        t++
                    }
                    return n
                },
                findObjsInOffsetRange: function(e, t, r) {
                    for (var n = [], o = !1, i = 0; i < e.length; i++) {
                        var a = e[i]
                          , s = parseInt(a.offset);
                        if (o) {
                            if (!(t < s && s < r))
                                break;
                            n.push(a)
                        } else
                            t <= s && s < r && (n.push(a),
                            o = !0)
                    }
                    return n
                },
                getContentRectsByContentObjs: function(e, t) {
                    var r = []
                      , n = void 0;
                    return t.forEach(function(e) {
                        var t = e.rect;
                        n && (function(e, t) {
                            return (e.y - t.y) * (e.y + e.h - t.y - t.h) <= 0
                        }(n, t) || function(e, t) {
                            var r = Math.min(e.y, t.y)
                              , n = Math.max(e.y + e.h, t.y + t.h);
                            return e.h + t.h - n + r >= Math.min(e.h, t.h) / 2
                        }(n, t)) ? function(e, t) {
                            e.x = Math.min(e.x, t.x),
                            e.y = Math.min(e.y, t.y),
                            e.w = e.w + t.w;
                            var r = Math.max(e.y + e.h, t.y + t.h);
                            e.h = r - e.y
                        }(n, t) : (n = {
                            x: t.x,
                            y: t.y,
                            w: t.w,
                            h: t.h
                        },
                        r.push(n))
                    }),
                    r
                },
                reportEnterReading: function() {
                    var t = this;
                    if (this.needReportReadingProgress) {
                        var e = ""
                          , r = 0
                          , n = this.getAfterRenderObjectContents()
                          , o = this.findFirstObjIndexContainingText(n);
                        return -1 !== o && (r = parseInt(n[o].offset),
                        e = this.getContentStringFromObjIdx(n, o, 20)),
                        this.$store.dispatch(f.FETCH_READER_ENTER_BOOK_READ, {
                            firstDomOffset: r,
                            firstDomSummaryText: e
                        }).then(function(e) {
                            e && 1 === e.sessionTimeout && t.handleSessionTimeout()
                        })
                    }
                },
                reportReadingProgress: function() {
                    var t = this;
                    if (this.needReportReadingProgress)
                        return this.$store.dispatch(f.FETCH_READER_BOOK_READ, {
                            retryCount: 1,
                            progressData: this.computeProgressData()
                        }).then(function(e) {
                            e && 1 === e.sessionTimeout ? t.handleSessionTimeout() : t.startReportTimer()
                        }).catch(function(e) {
                            console.error("[chantlog] Reader.vue-reportReadingProgress", "err", e),
                            t.startReportTimer()
                        })
                },
                clearReportTimer: function() {
                    this.reportTimer && clearTimeout(this.reportTimer)
                },
                startReportTimer: function() {
                    this.clearReportTimer(),
                    this.reportTimer = setTimeout(this.reportReadingProgress, 3e4)
                },
                computeProgressData: function() {
                    if (!l.default.isSupportReaderProgress(this.bookInfo))
                        return null;
                    var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    if (void 0 === e || e < 0)
                        return null;
                    var t = this.$refs.renderTargetContainer;
                    if (!t)
                        return console.log("Reader-computeProgressData", "renderTargetContainer is undefined"),
                        null;
                    var r = e + 72 - t.offsetTop
                      , n = this.getAfterRenderObjectContents()
                      , o = this.findFirstObjIdxBelowTop(n, r);
                    if (-1 === o)
                        return console.log("Reader-computeProgressData", "obj idx === -1"),
                        null;
                    var i = n[o];
                    return {
                        offset: parseInt(i.offset),
                        content: this.getContentStringFromObjIdx(n, o, 20)
                    }
                },
                showConfirmAuthDialog: function() {
                    var e = this;
                    this.$showConfirmAuthDialog({
                        requireVid: this.user.vid
                    }, function() {
                        e.isBalanceNeedAuth = !1,
                        e.$store.dispatch(f.FETCH_READER_BALANCE)
                    })
                },
                showPayDialog: function() {
                    var r = this;
                    this.hasLogin ? (this.$store.dispatch(f.FETCH_READER_BALANCE).then(function(e) {
                        var t = (0,
                        q.default)(e);
                        return t && -12013 === t.errCode && (r.isBalanceNeedAuth = !0,
                        r.showConfirmAuthDialog()),
                        e
                    }),
                    l.default.isBuyUnitWholeBook(this.bookInfo) ? (this.isShowPayWholeDialog = !0,
                    this.$nextTick(function() {
                        r.$refs.payWholeBookDialog.showDialog()
                    })) : (this.isShowPayChapterDialog = !0,
                    this.$nextTick(function() {
                        r.$refs.payChapterDialog.showDialog(r.currentChapter.chapterUid)
                    }))) : this.isPhone && this.downloadApp()
                },
                hidePayDialog: function() {
                    l.default.isBuyUnitWholeBook(this.bookInfo) ? this.$refs.payWholeBookDialog.closeDialog() : this.$refs.payChapterDialog.closeDialog()
                },
                payWholeBook: function() {
                    var r = this;
                    if (l.default.isBuyUnitWholeBook(this.bookInfo)) {
                        if (this.isBalanceNeedAuth)
                            return void this.showConfirmAuthDialog();
                        var e = this.balance.iOS > this.balance.Android ? "ios" : "android"
                          , t = V.get(this.bookInfo, "price", 0);
                        if (this.hasMemberCardDiscount)
                            t = t * (100 - V.get(this.bookInfo, "mcardDiscount", 0)) / 100;
                        if (t <= (this.balance.iOS > this.balance.Android ? this.balance.iOS : this.balance.Android))
                            return this.$store.dispatch(f.FETCH_READER_BUY_BOOK, {
                                pf: e,
                                price: t,
                                isMCard: this.hasMemberCard
                            }).then(function(e) {
                                var t = V.get(e, "errCode", 0);
                                -12013 === t ? r.showConfirmAuthDialog() : -2010 === t || -2012 === t || -2013 === t ? r.handleSessionTimeout() : -2281 === t ? (void 0 !== V.get(e, "info.price") && r.$store.commit(p.UPDATE_READER_BOOK_INFO_PRICE, V.get(e, "info.price")),
                                void 0 !== V.get(e, "info.payType") && r.$store.commit(p.UPDATE_READER_BOOK_INFO_PAY_TYPE, V.get(e, "info.payType")),
                                r.$toast("书籍价格已更新，请重新购买")) : 1 === V.get(e, "succ", 0) ? (r.$toast("购买成功"),
                                r.hidePayDialog(),
                                r.$store.dispatch(f.FETCH_READER_ADD_SHELF),
                                r.$store.dispatch(f.FETCH_READER_BOOK_INFO, {
                                    envConfig: {},
                                    isLogin: !0
                                }),
                                r.$store.dispatch(f.RELOAD_READER_CHAPTER_INFOS, {
                                    isLogin: !0
                                }),
                                r.reloadCurrentChapter()) : r.$toast("购买失败，请重试")
                            });
                        this.hidePayDialog(),
                        this.downloadAppToAccount()
                    }
                },
                payChapter: function(e) {
                    var r = this
                      , n = e.chapterIds
                      , t = e.totalPrice
                      , o = e.isAutoPay;
                    if (!l.default.isBuyUnitWholeBook(this.bookInfo)) {
                        var i = _.default.formatChapterUids(n);
                        if (0 === i.length)
                            return;
                        if (this.isBalanceNeedAuth)
                            return void this.showConfirmAuthDialog();
                        var a = this.balance.iOS > this.balance.Android ? "ios" : "android";
                        if (t <= (this.balance.iOS > this.balance.Android ? this.balance.iOS : this.balance.Android))
                            return this.$store.dispatch(f.FETCH_READER_BUY_CHAPTERS, {
                                pf: a,
                                chapterIds: i,
                                totalPrice: t,
                                isAutoPay: o,
                                isMCard: this.hasMemberCard
                            }).then(function(e) {
                                var t = V.get(e, "errCode", 0);
                                -12013 === t ? r.showConfirmAuthDialog() : -2010 === t || -2012 === t || -2013 === t ? r.handleSessionTimeout() : -2281 === t ? r.$toast("书籍价格已更新，请刷新后重试") : 1 === V.get(e, "succ", 0) ? (r.$toast("购买成功"),
                                r.hidePayDialog(),
                                r.$store.dispatch(f.FETCH_READER_ADD_SHELF),
                                r.$store.dispatch(f.RELOAD_READER_CHAPTER_INFOS, {
                                    isLogin: !0
                                }).then(function() {
                                    if (-1 !== n.indexOf(V.get(r.currentChapter, "chapterUid")))
                                        return r.reloadCurrentChapter()
                                })) : r.$toast("购买失败，请重试")
                            });
                        this.hidePayDialog(),
                        this.downloadAppToAccount()
                    }
                },
                showMemberCardTips: function(e) {
                    this.$refs.readerMemberCardTips.show(e)
                },
                checkIfShowMemberCardFreeReadingTips: function() {
                    if (Q.isEnvClient && (this.hasLogin && !this.isNeedPay && this.isNeedPayWithoutMemberCard)) {
                        var e = V.get(this.user, "vid")
                          , t = D.default.getReaderMemberCardTipsBookIdsOperator(e);
                        t.isBookExist(this.bookId) || (this.showMemberCardTips("你正在使用无限卡阅读付费部分"),
                        t.addBook(this.bookId),
                        t.save())
                    }
                },
                checkIfSyncReadingProgress: function() {
                    var r = this;
                    return this.$store.dispatch(f.FETCH_READER_PROGRESS, {
                        compareWithLocal: !0
                    }).then(function(e) {
                        if (e && e.book) {
                            var t = e.book;
                            return r.$toast("正在跳转到最新进度"),
                            r.changeChapter({
                                chapterUid: t.chapterUid,
                                scrollTo: {
                                    chapterOffset: t.chapterOffset
                                }
                            }).then(function() {
                                return !0
                            })
                        }
                        return !1
                    })
                },
                checkIfNeedRequestLoginQRCode: function() {
                    this.isNeedShowLoginGuide && (this.loginGuideQRCodeImg && !this.isLoginGetInfoError && !this.isLoginGetUidError || this.requestLoginUid())
                },
                requestLoginUid: function() {
                    var t = this;
                    this.isLoginQRCodeLoading = !0,
                    (0,
                    j.default)("/web/login/getuid", {}, function(e) {
                        e && e.data && e.data.uid ? (t.isLoginQRCodeLoading = !1,
                        t.isLoginGetUidError = !1,
                        t.isLoginGetInfoError = !1,
                        t.generateLoginGuideQRCode(e.data.uid),
                        t.requestLoginInfo(e.data.uid)) : (t.isLoginQRCodeLoading = !1,
                        t.isLoginGetUidError = !0,
                        t.isLoginGetInfoError = !1)
                    })
                },
                generateLoginGuideQRCode: function(e) {
                    this.loginGuideQRCodeImg = r(62).getQrBase64("https://weread.qq.com/web/confirm?uid=" + e, {
                        padding: 6,
                        width: 144,
                        height: 144,
                        correctLevel: QRErrorCorrectLevel.H,
                        background: "#FFF",
                        foreground: "#000"
                    })
                },
                requestLoginInfo: function(e) {
                    var t = this;
                    (0,
                    j.default)("/web/login/getinfo", {
                        uid: e
                    }, function(e) {
                        e && e.data && e.data.vid && e.data.skey && e.data.code ? t.requestLogin(e.data) : (t.isLoginGetInfoError = !0,
                        0 < t.autoLoadLoginQRCodeCount && (t.autoLoadLoginQRCodeCount--,
                        t.checkIfNeedRequestLoginQRCode()))
                    })
                },
                requestLogin: function(e) {
                    var t = this
                      , r = e.pf;
                    (0,
                    j.default)("/web/login/weblogin", {
                        vid: e.vid,
                        skey: e.skey,
                        code: e.code
                    }, function(e) {
                        e && e.data && e.data.vid && e.data.accessToken && e.data.refreshToken && (e.data.pf = r,
                        t.handleLoginResult(e.data))
                    })
                },
                handleLoginResult: function(e) {
                    var t = this;
                    (0,
                    j.default)("/web/login/session/init", {
                        vid: e.vid,
                        skey: e.accessToken,
                        rt: e.refreshToken,
                        pf: e.pf
                    }, function(e) {
                        e && e.data && e.data.success,
                        t.onAfterLoginToGetMemberCard()
                    })
                },
                receiveMemberCard: function() {},
                downloadApp: function() {
                    this.isPhone && this.reportClientBusiness({
                        itemName: "Web_Phone_Reader_DownloadClk"
                    }),
                    this.$showDownloadAppDialog(),
                    this.$downloadAppComponent.beginToLoadQrCode({
                        subTitle: "全场书籍免费读"
                    })
                },
                downloadAppToRead: function() {
                    this.isPhone && this.reportClientBusiness({
                        itemName: "Web_Phone_Reader_DownloadClk"
                    }),
                    this.$showDownloadAppDialog(),
                    this.$downloadAppComponent.beginToLoadQrCode({
                        type: "reading",
                        bId: this.bookId,
                        chapterUid: V.get(this.currentChapter, "chapterUid", 0),
                        subTitle: "在手机上继续阅读本书"
                    })
                },
                downloadAppToMemberCard: function() {
                    this.$showDownloadAppDialog(),
                    this.$downloadAppComponent.beginToLoadQrCode({
                        type: "memCard",
                        from: "ReaderMemberCard",
                        memCardExpand: 1,
                        title: "扫码去微信读书 app 续期无限卡",
                        subTitle: "全场书籍免费读"
                    }),
                    this.reportClientBusiness({
                        itemName: "Web_Download_ReaderCardExp"
                    })
                },
                downloadAppToAccount: function() {
                    this.$showDownloadAppDialog(),
                    this.$downloadAppComponent.beginToLoadQrCode({
                        type: "account",
                        from: "ReaderRecharge",
                        title: "扫码去微信读书 app 充值",
                        subTitle: ""
                    }),
                    this.reportClientBusiness({
                        itemName: "Web_Download_ReaderRechargeExp"
                    })
                },
                logOnClientMounted: function() {
                    if (Q.isEnvClient) {
                        this.haveReportInfo("Index_Recommend") && this.reportClientBusiness({
                            itemName: "Web_Home_GuessClk"
                        }, "Index_Recommend"),
                        this.haveReportInfo("Index_Shelf_Book") && this.reportClientBusiness({
                            itemName: "Web_Home_ShelfBookClk"
                        }, "Index_Shelf_Book"),
                        this.haveReportInfo("Shelf_Enter_Reader") && this.reportClientBusiness({
                            itemName: "Web_Shelf_BookClk"
                        }, "Shelf_Enter_Reader"),
                        this.haveReportInfo("Search_HotBook_Reader") && this.reportClientBusiness({
                            itemName: "Web_Search_HotClk"
                        }, "Search_HotBook_Reader"),
                        this.haveReportInfo("SearchResult_Click_BookId") && this.reportClientBusiness({
                            itemName: "Web_Search_BookId_Clk",
                            value: this.bookId
                        }, "SearchResult_Click_BookId"),
                        this.haveReportInfo("SearchResult_Click_BookName") && (this.reportClientBusiness({
                            itemName: "Web_Search_ResultClk"
                        }, "SearchResult_Click_BookName"),
                        this.reportClientBusiness({
                            itemName: "Web_Search_ResultClk_Name"
                        })),
                        this.haveReportInfo("SearchResult_Click_Content") && (this.reportClientBusiness({
                            itemName: "Web_Search_ResultClk"
                        }, "SearchResult_Click_Content"),
                        this.reportClientBusiness({
                            itemName: "Web_Search_ResultClk_Content"
                        }));
                        var e = this.haveReportInfo("CategoryBook_Enter_Reader");
                        (e || e && e.categoryId) && (this.reportClientBusiness({
                            itemName: "Web_Ranking_All_BookClk"
                        }, "CategoryBook_Enter_Reader"),
                        e.categoryId && this.reportClientBusiness({
                            itemName: "Web_Ranking_Type_BookClk",
                            value: (0,
                            o.default)({
                                type: e.categoryId
                            })
                        })),
                        this.haveReportInfo("Index_Book_All") ? this.reportClientBusiness({
                            itemName: "Web_Home_Top200_Clk"
                        }, "Index_Book_All") : this.haveReportInfo("Index_Book_Novel") ? this.reportClientBusiness({
                            itemName: "Web_Home_TopFic_Clk"
                        }, "Index_Book_Novel") : this.haveReportInfo("Index_Book_New") ? this.reportClientBusiness({
                            itemName: "Web_Home_TopNew_Clk"
                        }, "Index_Book_New") : this.haveReportInfo("Index_Book_Rise") && this.reportClientBusiness({
                            itemName: "Web_Home_TopRise_Clk"
                        }, "Index_Book_Rise"),
                        this.isShowTopBarAddShelfButton && this.reportClientBusiness({
                            itemName: "Web_Reader_TopAddExp"
                        }),
                        this.isCurrentChapterTheFirst && (this.reportClientBusiness({
                            itemName: "Web_Reader_FirstPage"
                        }),
                        this.showFirstPageAddShelfButton && this.reportClientBusiness({
                            itemName: "Web_Reader_FirstPage_AddExp"
                        })),
                        this.isNeedShowPhoneDownloadGuide && this.reportClientBusiness({
                            itemName: "Web_Phone_Reader_DownloadExp"
                        })
                    }
                },
                autoSearchOnClientMounted: function() {
                    var e = D.default.getSessionStorage(A.KEY_READER_AUTO_SEARCH);
                    if (e) {
                        var t = JSON.parse(e);
                        t.keyword && (this.$store.dispatch(f.FETCH_READER_SEARCH_AUTO, {
                            keyword: t.keyword
                        }),
                        this.$refs.readerCatalog.setSearchKeyword(t.keyword)),
                        D.default.setSessionStorage(A.KEY_READER_AUTO_SEARCH)
                    }
                },
                setupProgressReportOnDomReady: function() {
                    if (this.needReportReadingProgress && !this.hasSetupProgressReport) {
                        this.hasSetupProgressReport = !0;
                        var n = this;
                        this.reportEnterReading(),
                        this.$store.commit(p.UPDATE_READER_START_READING_TIME),
                        this.startReportTimer();
                        var e = r(667).ifvisible;
                        e.setIdleDuration(120),
                        e.on("statusChanged", function(e) {
                            switch (e.status) {
                            case "hidden":
                            case "idle":
                                n.$store.dispatch(f.READER_MARK_PAUSE),
                                n.clearReportTimer();
                                break;
                            case "active":
                                s.default.all([n.$store.dispatch(f.READER_MARK_ACTIVE), n.checkIfSyncReadingProgress()]).then(function(e) {
                                    var t = e[0]
                                      , r = e[1];
                                    if (t && !r)
                                        return n.$store.dispatch(f.FETCH_READER_BOOK_READ, {
                                            retryCount: 1,
                                            progressData: n.computeProgressData()
                                        })
                                }),
                                n.startReportTimer()
                            }
                        })
                    }
                },
                handleLoginPendingActions: function() {
                    if (Q.isEnvClient) {
                        var e = D.default.getSessionStorage(A.KEY_READER_LOGIN_PENDING_ACTION);
                        if (e)
                            if (D.default.setSessionStorage(A.KEY_READER_LOGIN_PENDING_ACTION),
                            this.hasLogin)
                                if (1 === V.get(JSON.parse(e), "toFreeRead", 0))
                                    if (this.isNeedPayWithoutMemberCard)
                                        if (!this.isNeedPay && this.isNeedPayWithoutMemberCard)
                                            ;
                                        else if (this.hasMemberCard)
                                            ;
                                        else {
                                            if (this.isBlackUser && 2 === V.get(this.bookInfo, "ispub"))
                                                ;
                                            else {
                                                if (this.canReceiveMemberCard)
                                                    return this.receiveMemberCard();
                                                this.$toast("你已领取过该福利")
                                            }
                                        }
                                    else
                                        ;
                    }
                },
                requestMemberCardPriceIfNeeded: function() {
                    var i = this;
                    this.isShowBuyMemberCardButton && !this.hasFetchMemberCardPrice && (0,
                    G.default)("/web/pay/memberprice", {
                        vid: V.get(this.user, "vid"),
                        pf: V.get(this.user, "pf", 0)
                    }, function(e) {
                        i.hasFetchMemberCardPrice = !0;
                        var t = e.data
                          , r = V.get(t, "promoPrice", 0)
                          , n = V.get(t, "promoLabel", "");
                        if (0 < r && 0 < n.length)
                            i.buyMemberCardButtonLine1 = "无限卡 " + n + Math.round(r) / 100 + "元 · 全场书籍免费读";
                        else if (0 < V.get(t, "price", 0)) {
                            var o = V.get(t, "price", 0);
                            i.buyMemberCardButtonLine1 = "无限卡 " + Math.round(o) / 100 + "元/月 · 全场书籍免费读"
                        } else
                            i.buyMemberCardButtonLine1 = "无限卡 19元/月 · 全场书籍免费读"
                    }, function() {})
                },
                handleSessionTimeout: function() {
                    this.isWeiXin || this.$toast("登录过期，请重新登录"),
                    setTimeout(function() {
                        window.location.reload()
                    }, 3e3)
                }
            },
            watch: {
                isWhiteTheme: function(e) {
                    e ? document.body.classList.add("wr_whiteTheme") : document.body.classList.remove("wr_whiteTheme")
                },
                isInShelf: function(e) {
                    this.hasLogin && e && this.$store.dispatch(f.UPDATE_READER_LOCAL_LAST_CHAPTER)
                },
                currentChapter: function() {
                    Q.isEnvClient && (this.requestMemberCardPriceIfNeeded(),
                    this.isCurrentChapterTheFirst && (this.reportClientBusiness({
                        itemName: "Web_Reader_FirstPage"
                    }),
                    this.showFirstPageAddShelfButton && this.reportClientBusiness({
                        itemName: "Web_Reader_FirstPage_AddExp"
                    })))
                },
                isShowAutoSearchHint: function(e) {
                    Q.isEnvClient && (e ? this.reportClientBusiness({
                        itemName: "Web_Search_ReaderContentExp"
                    }) : this.reportClientBusiness({
                        itemName: "Web_Search_ReaderContentClk"
                    }))
                },
                chapterContentForEPub: function() {
                    var o = this;
                    this.$nextTick(function() {
                        var t = document.querySelectorAll(".js_readerFooterNote");
                        if (0 < t.length)
                            for (var e = function(e) {
                                var n = t[e];
                                n.removeEventListener("click", null),
                                n.addEventListener("click", function(e) {
                                    var t = n.offsetLeft
                                      , r = n.offsetTop;
                                    o.$showFooterNote({
                                        text: n.getAttribute("alt") || "",
                                        offsetLeft: t,
                                        offsetTop: r
                                    })
                                })
                            }, r = 0; r < t.length; r++)
                                e(r)
                    })
                },
                memberCardSummary: function() {
                    Q.isEnvClient && this.checkIfShowMemberCardFreeReadingTips()
                }
            },
            computed: (0,
            n.default)({}, (0,
            a.mapState)({
                bookId: function(e) {
                    return e[X].bookId
                },
                isBookInfoError: function(e) {
                    return e[X].isBookInfoError
                },
                bookInfo: function(e) {
                    return e[X].bookInfo
                },
                isInShelf: function(e) {
                    return e[X].isInShelf
                },
                memberCardSummary: function(e) {
                    return e[X].memberCardSummary
                },
                infiniteInfo: function(e) {
                    return e[X].infiniteInfo
                },
                readingStat: function(e) {
                    return e[X].readingStat
                },
                chapterInfos: function(e) {
                    return e[X].chapterInfos
                },
                progress: function(e) {
                    return e[X].progress
                },
                currentChapter: function(e) {
                    return e[X].currentChapter
                },
                chapterContentHtml: function(e) {
                    return e[X].chapterContentHtml
                },
                chapterContentStyles: function(e) {
                    return e[X].chapterContentStyles
                },
                chapterContentTargetHtml: function(e) {
                    return e[X].chapterContentTargetHtml
                },
                chapterContentState: function(e) {
                    return e[X].chapterContentState
                },
                isChapterContentDirty: function(e) {
                    return e[X].isChapterContentDirty
                },
                isWhiteTheme: function(e) {
                    return e[X].isWhiteTheme
                },
                isInSearchMode: function(e) {
                    return e[X].isInSearchMode
                },
                isShowAutoSearchHint: function(e) {
                    return e[X].isShowAutoSearchHint
                },
                isSearchLoading: function(e) {
                    return e[X].isSearchLoading
                },
                searchResult: function(e) {
                    return e[X].searchResult
                },
                balance: function(e) {
                    return e[X].balance
                }
            }), (0,
            a.mapGetters)(["getChapterWithIdxOffset", "hasPrevChapter", "hasNextChapter", "isCurrentChapterTheFirst", "chapterTitleText", "isBlackUser", "isNeedPay", "isNeedPayWithoutMemberCard"]), {
                isShowBuyMemberCardButton: function() {
                    return this.hasLogin && this.isNeedPay && !this.isPhone && !this.canReceiveMemberCard && !this.isBlackUser && !this.hasMemberCard
                },
                isShowLoading: function() {
                    var e = this.chapterContentState;
                    return "LOADING" === e || "PRERENDER" === e
                },
                isShowPreRender: function() {
                    return "PRERENDER" === this.chapterContentState
                },
                chapterContentForEPub: function() {
                    return this.chapterContentHtml
                },
                isShowReaderTopBar: function() {
                    return !this.isCurrentChapterTheFirst
                },
                isEpub: function() {
                    return l.default.isEPub(this.bookInfo)
                },
                isShowTopBarAddShelfButton: function() {
                    return !this.hasLogin || !this.isInShelf
                },
                showFirstPageAddShelfButton: function() {
                    return !this.hasLogin || !this.isInShelf
                },
                showBottomBarAddShelfButton: function() {
                    return !this.hasLogin || !this.isInShelf
                },
                hasCurrentChapter: function() {
                    return this.currentChapter && 0 < (0,
                    u.default)(this.currentChapter).length
                },
                needReportReadingProgress: function() {
                    return Q.isEnvClient && this.hasLogin
                },
                hasMemberCard: function() {
                    return c.default.isMemberShipValid(this.memberCardSummary)
                },
                hasMemberCardDiscount: function() {
                    return this.hasMemberCard && 0 < V.get(this.bookInfo, "mcardDiscount", 0)
                },
                canReceiveMemberCard: function() {
                    return c.default.canReceiveMemberCard(this.infiniteInfo)
                },
                payButtonDisplayInfos: function() {
                    var e = !1
                      , t = [];
                    if (l.default.isBuyUnitWholeBook(this.bookInfo))
                        if (l.default.isLimitFree(this.bookInfo)) {
                            var r = V.get(this.bookInfo, "price", 0);
                            t.push('限时免费 <span class="lineThrough">' + r.toFixed(2) + "</span>")
                        } else if (l.default.isFree(this.bookInfo))
                            t.push("免费获取");
                        else if (this.hasMemberCardDiscount) {
                            var n = V.get(this.bookInfo, "price", 0)
                              , o = n * (100 - V.get(this.bookInfo, "mcardDiscount", 0)) / 100;
                            t.push("无限卡 · 购买本书 " + o.toFixed(2)),
                            t.push(' 原价 <span class="lineThrough">' + n.toFixed(2) + "</span>"),
                            e = !0
                        } else {
                            var i = V.get(this.bookInfo, "price", 0);
                            t.push("购买本书 " + i.toFixed(2))
                        }
                    else if (this.hasMemberCardDiscount) {
                        var a = V.get(this.currentChapter, "price", 0)
                          , s = a * (100 - V.get(this.bookInfo, "mcardDiscount", 0)) / 100;
                        t.push("无限卡 · 购买本章 " + s.toFixed(2)),
                        t.push(' 原价 <span class="lineThrough">' + a.toFixed(2) + "</span>"),
                        e = !0
                    } else {
                        var c = V.get(this.currentChapter, "price", 0);
                        t.push("购买本章 " + c.toFixed(2))
                    }
                    return {
                        isMCard: e,
                        lines: t
                    }
                },
                endingTitle: function() {
                    return 1 === this.bookInfo.finished ? "全书完" : "未完待续"
                },
                isNeedShowLoginGuide: function() {
                    return this.isNeedPay && !this.hasLogin && !this.isPhone
                },
                isNeedShowPhoneDownloadGuide: function() {
                    return this.isPhone
                }
            })
        }
    },
    548: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(r(185))
          , i = n(r(504));
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            isChapterNeedPay: function(e) {
                var t = e.bookInfo
                  , r = e.memberCardSummary
                  , n = e.chapter;
                return (!r || !i.default.canBookFreeReading({
                    bookInfo: t,
                    memberCardSummary: r
                })) && (!o.default.isFree(t) && (!o.default.isLimitFree(t) && (0 === t.paid && (!(t.maxFreeChapter >= n.chapterIdx) && (!o.default.isBuyUnitChapter(t) || 0 < n.price && 0 === n.paid)))))
            },
            formatChapterUids: function(e) {
                if (0 === e.length)
                    return "";
                var t = []
                  , r = -1
                  , n = -1
                  , o = -1;
                return e.forEach(function(e) {
                    -1 === r ? r = e : o + 1 === e ? n = e : (t.push(-1 === n ? r.toString() : r + "-" + n),
                    n = -1,
                    r = e),
                    o = e
                }),
                -1 !== r && t.push(-1 === n ? r.toString() : r + "-" + n),
                t.join(",")
            }
        }
    },
    549: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(550)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    550: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            name: "CustomStyle.vue"
        }
    },
    551: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(552)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    552: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            name: "ReaderControls",
            props: {
                hasPrevChapter: {
                    type: Boolean,
                    required: !0
                },
                hasNextChapter: {
                    type: Boolean,
                    required: !0
                },
                isWhiteTheme: {
                    type: Boolean,
                    required: !0
                },
                disableChapterLink: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                isShowSearchHint: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                searchHintTotalCount: {
                    type: Number,
                    required: !1,
                    default: 0
                }
            },
            computed: {
                prevHref: function() {
                    return this.disableChapterLink ? "javascript:" : this.hasPrevChapter || "javascript:"
                },
                nextHref: function() {
                    return this.disableChapterLink ? "javascript:" : this.hasNextChapter || "javascript:"
                },
                searchHint: function() {
                    return this.isShowSearchHint ? ["搜索结果", this.searchHintTotalCount ? "共" + this.searchHintTotalCount + "条" : ""].filter(function(e) {
                        return e
                    }).join(" · ") : ""
                }
            },
            methods: {
                emitClick: function(e) {
                    if ("catalog" === e && this.disableChapterLink)
                        return !1;
                    this.$emit("onClickItem", e)
                }
            }
        }
    },
    553: function(e, t, r) {},
    554: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(555)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    555: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = s(r(503))
          , n = s(r(58))
          , o = s(r(268))
          , i = s(r(607))
          , u = s(r(40))
          , a = s(r(60))
          , d = s(r(185));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = r(25);
        t.default = {
            name: "ReaderBookInfo",
            components: {
                Dialog: a.default,
                BookCover: o.default,
                RankBar: i.default
            },
            props: {
                bookInfo: {
                    type: Object,
                    required: !0
                },
                chapterInfos: {
                    type: Array,
                    required: !0
                },
                readingStat: {
                    type: Object,
                    required: !0
                },
                showAddShelfButton: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            computed: {
                isEmptyBookInfo: function() {
                    return !this.bookInfo || 0 === (0,
                    n.default)(this.bookInfo).length
                },
                needShowRankListImg: function() {
                    return 0 < this.rankListCategoryId.length && 0 < this.rankListCategoryClassName.length
                },
                rankListCategoryId: function() {
                    return h.get(this.bookInfo, "ranklist.categoryId", "")
                },
                rankListCategoryClassName: function() {
                    var e = this.rankListCategoryId;
                    return -1 !== ["all", "rising", "newbook", "novel", "novel_male", "novel_female"].indexOf(e) ? "rankList_" + (h.startsWith(e, "novel") ? "novel" : e) : ""
                },
                introParaArray: function() {
                    var e = this.bookInfo.lPushName || ""
                      , t = this.bookInfo.intro || "";
                    return [e.trim(), t.trim()].filter(function(e) {
                        return 0 < e.length
                    })
                },
                moreChildCount: function() {
                    var e = 0;
                    return this.showRating && e++,
                    this.readingCount && e++,
                    ++e
                },
                showRating: function() {
                    return 0 < this.ratingCount && 0 < this.starScore
                },
                ratingCount: function() {
                    return this.bookInfo.ratingCount || 0
                },
                starScore: function() {
                    return this.bookInfo.star || 0
                },
                starString: function() {
                    return (this.starScore / 10).toFixed(1)
                },
                readingCount: function() {
                    return this.readingStat.readingCount || 0
                },
                readingCountStrings: function() {
                    if (0 < this.readingCount) {
                        var e = this.readingStat.readingUsers || []
                          , t = u.default.formatNumber(this.readingCount)
                          , r = '<span class="bookInfo_more_line1_number">' + t.number + "</span>" + (t.unit || "") + (0 < e.length ? "人阅读" : "人")
                          , n = null;
                        if (0 < e.length) {
                            for (var o = 0; o < e.length; o++) {
                                var i = e[o].name || "";
                                if (9 < (n = null === n ? i : n + "、" + i).length) {
                                    n = n.slice(0, 10);
                                    break
                                }
                            }
                            0 < n.length && (n += "等好友在读")
                        } else
                            n = "阅读此书";
                        return [r, n]
                    }
                    return ["", ""]
                },
                chaptersToPreview: function() {
                    var i = this
                      , e = this.chapterInfos;
                    if (!e || 0 === e.length)
                        return [];
                    var t = d.default.isBuyUnitChapter(this.bookInfo) && 2 === h.get(this.bookInfo, "ispub");
                    if (!t)
                        return [];
                    function a(e) {
                        return "第" + e.chapterIdx + "章"
                    }
                    function s(e) {
                        return (e.title || "").substr(0, 10)
                    }
                    if (t) {
                        var r = Math.max(0, e.length - 3)
                          , n = r + 3
                          , o = e.slice(r, n).reverse()
                          , c = !0;
                        return o.map(function(e) {
                            var t = 1e3 * h.get(e, "updateTime", 0)
                              , r = (new Date).getTime() - 2592e6 < t
                              , n = {
                                line1: "",
                                line2: "",
                                isLine2Blue: !1,
                                isLine2Title: !1,
                                link: i.readerURL(i.bookInfo.bookId, {
                                    chapterUid: e.chapterUid
                                })
                            };
                            if (r) {
                                if (n.line1 = a(e) + " " + s(e),
                                n.line2 = u.default.formatTime(new Date(t), {
                                    useYearMonthDateChar: !0,
                                    showTimeWhenShowDate: !1
                                }) + " · 已更新",
                                c) {
                                    var o = new Date;
                                    o.setHours(0, 0, 0, 0),
                                    n.isLine2Blue = t >= o.getTime()
                                }
                                n.isLine2Blue || (c = !1)
                            } else
                                n.line1 = a(e),
                                n.line2 = s(e),
                                n.isLine2Title = !0;
                            return n
                        })
                    }
                },
                publishInfos: function() {
                    var e = [];
                    if (this.bookInfo.publisher && e.push({
                        title: "出版社",
                        content: this.bookInfo.publisher,
                        needConsiderLong: !0
                    }),
                    this.bookInfo.publishTime)
                        try {
                            var t = this.bookInfo.publishTime.split(" ")
                              , r = new Date(t[0]);
                            e.push({
                                title: "出版时间",
                                content: r.getFullYear() + "年" + (r.getMonth() + 1) + "月",
                                needConsiderLong: !1
                            })
                        } catch (e) {}
                    return this.bookInfo.ISBN && e.push({
                        title: "ISBN",
                        content: this.bookInfo.ISBN,
                        needConsiderLong: !1
                    }),
                    this.bookInfo.totalWords && e.push({
                        title: "字数",
                        content: this.bookInfo.totalWords.toLocaleString("en-US"),
                        needConsiderLong: !1
                    }),
                    this.bookInfo.category && e.push({
                        title: "分类",
                        content: this.bookInfo.category,
                        needConsiderLong: !0
                    }),
                    e
                },
                isPublishInfoLong: function() {
                    var e = this.publishInfos
                      , t = !0
                      , r = !1
                      , n = void 0;
                    try {
                        for (var o, i = (0,
                        l.default)(e); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value
                              , s = a.needConsiderLong
                              , c = a.content;
                            if (s && 11 < c.length)
                                return !0
                        }
                    } catch (e) {
                        r = !0,
                        n = e
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (r)
                                throw n
                        }
                    }
                    return !1
                }
            },
            mounted: function() {
                var e = this.$refs.introDom;
                e && (e.scrollHeight > e.offsetHeight ? e.classList.add("hasMore") : e.classList.remove("hasMore"))
            },
            methods: {
                emitClickAddShelf: function() {
                    this.$emit("clickAddShelf")
                },
                showIntroDialog: function() {
                    this.$refs.introDialog.showDialog()
                },
                emitClickShowCatalog: function() {
                    this.$emit("clickShowCatalog")
                }
            }
        }
    },
    556: function(e, t, r) {},
    557: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(558)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    558: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = h(r(129))
          , o = h(r(185))
          , i = h(r(548))
          , a = h(r(268))
          , s = h(r(642))
          , c = h(r(271))
          , l = h(r(126))
          , u = h(r(8))
          , d = h(r(40));
        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = r(272)
          , p = r(644)
          , g = r(25);
        t.default = {
            name: "ReaderCatalog",
            components: {
                BackgroundMask: c.default,
                ReaderCatalogBookInfo: s.default,
                BookCover: a.default,
                Loading: l.default
            },
            props: {
                bookInfo: {
                    type: Object,
                    required: !0
                },
                memberCardSummary: {
                    type: Object,
                    required: !1
                },
                chapterInfos: {
                    type: Array,
                    required: !0
                },
                currentChapter: {
                    type: Object,
                    required: !0
                },
                isSearchLoading: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                isInSearchMode: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                searchResult: {
                    type: Object,
                    required: !1
                }
            },
            data: function() {
                return {
                    isShow: !1,
                    isScrollToBottom: !0,
                    searchKeyword: "",
                    searchXSS: void 0
                }
            },
            watch: {
                isInSearchMode: function(e) {
                    var t = this;
                    if (e && u.default.isEnvClient) {
                        var r = this;
                        this.$nextTick(function() {
                            var e = t.$refs.searchResultDom;
                            e && !e.addedScrollEvent && (e.addedScrollEvent = 1,
                            d.default.handleElementScrollEvent(e, function() {
                                r.emitSearchLoadMore()
                            }))
                        })
                    }
                }
            },
            computed: {
                isEpub: function() {
                    return o.default.isEPub(this.bookInfo)
                },
                needShowScroller: function() {
                    return this.chapterInfos && 50 < this.chapterInfos.length
                },
                isSearchResultHasMore: function() {
                    return g.get(this.searchResult, "hasMore", !1)
                }
            },
            created: function() {
                this.debouncedDoSearch = g.debounce(this.emitSearch, 500)
            },
            methods: {
                setSearchKeyword: function(e) {
                    this.searchKeyword = e
                },
                show: function() {
                    this.$refs.mask.showMask(),
                    this.isShow = !0
                },
                close: function() {
                    this.$refs.mask.closeMask(),
                    this.isShow = !1
                },
                isShowing: function() {
                    return this.isShow
                },
                toggle: function() {
                    this.isShow ? this.close() : this.show()
                },
                getChapterTitle: function(e) {
                    var t = e.title;
                    return this.isEpub ? t : ["第" + e.chapterIdx + "章", t].filter(function(e) {
                        return 0 < e.length
                    }).join(" ")
                },
                isLock: function(e) {
                    return i.default.isChapterNeedPay({
                        bookInfo: this.bookInfo,
                        memberCardSummary: this.memberCardSummary,
                        chapter: e
                    })
                },
                isCurrent: function(e) {
                    return "object" === (0,
                    n.default)(this.currentChapter) && "number" == typeof this.currentChapter.chapterUid && this.currentChapter.chapterUid === e.chapterUid
                },
                onShow: function() {
                    this.scrollToCurrent(),
                    this.searchResult.isNeedAutoSearchWhenShow && this.emitAutoSearch()
                },
                scrollToCurrent: function() {
                    var e = this.$refs.catalogListDom;
                    if (e) {
                        var t = e.querySelector(".chapterItem_current");
                        if (t) {
                            var r = t.parentNode;
                            e.scrollTop = t.offsetTop - r.offsetTop
                        }
                    }
                },
                scrollToBottom: function() {
                    var e = this.$refs.catalogListDom;
                    if (e) {
                        var t = e.lastChild;
                        t && p.scrollTo(t, 300, {
                            container: e,
                            x: !1,
                            y: !0,
                            offset: 0
                        })
                    }
                },
                scrollToTop: function() {
                    var e = this.$refs.catalogListDom;
                    if (e) {
                        var t = e.firstChild;
                        t && p.scrollTo(t, 300, {
                            container: e,
                            x: !1,
                            y: !0,
                            offset: 0
                        })
                    }
                },
                handleClickScroller: function() {
                    this.isScrollToBottom ? this.scrollToBottom() : this.scrollToTop(),
                    this.isScrollToBottom = !this.isScrollToBottom
                },
                handleClickBookInfo: function() {
                    this.$emit("clickBookInfo")
                },
                handleClickChapter: function(e) {
                    this.$emit("clickChapter", e)
                },
                getSearchResultChapterTitle: function(e) {
                    for (var t = this.chapterInfos, r = e.chapterUid, n = void 0, o = 0; o < t.length; o++)
                        if (t[o].chapterUid === r) {
                            n = t[o];
                            break
                        }
                    var i = "";
                    return n && (i = this.getChapterTitle(n)),
                    i.trim()
                },
                getSearchResultChapterContent: function(e) {
                    var t = e.abstract || ""
                      , r = g.get(e, "keyword", []);
                    if (0 < r.length) {
                        var n = new RegExp(r.join("|"),"gi");
                        t = t.replace(n, '<span class="highLight">$&</span>')
                    }
                    return t = t.trim(),
                    this.getSearchXSS().process(t)
                },
                getSearchXSS: function() {
                    return this.searchXSS || (this.searchXSS = new f.FilterXSS({
                        whiteList: {
                            span: ["class"]
                        }
                    })),
                    this.searchXSS
                },
                emitSearch: function() {
                    this.searchKeyword.length <= 0 || 0 < g.get(this.searchResult, "resultList", []).length && this.searchResult.keyword === this.searchKeyword || this.$emit("search", {
                        keyword: this.searchKeyword
                    })
                },
                emitSearchLoadMore: function() {
                    if (this.isSearchResultHasMore && !this.isSearchLoading) {
                        var e = this.searchResult.keyword;
                        if (!(e <= 0)) {
                            var t = 0
                              , r = g.get(this.searchResult, "resultList", []);
                            0 < r.length && (t = g.get(g.last(r), "searchIdx", 0)),
                            this.$emit("search", {
                                keyword: e,
                                maxIdx: t,
                                isLoadMore: !0
                            })
                        }
                    }
                },
                emitAutoSearch: function() {
                    this.searchKeyword.length <= 0 || this.$emit("search", {
                        keyword: this.searchKeyword
                    })
                },
                emitClickSearchItem: function(e) {
                    this.$emit("clickSearchItem", e)
                },
                handleInputFocused: function() {
                    this.$emit("enterSearch")
                },
                exitSearch: function() {
                    this.searchKeyword = "",
                    this.$emit("exitSearch")
                }
            }
        }
    },
    559: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(560)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    560: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(r(40))
          , o = a(r(185))
          , i = a(r(268));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            name: "ReaderCatalogBookInfo",
            components: {
                BookCover: i.default
            },
            props: {
                bookInfo: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                needShowUpdateTime: function() {
                    return o.default.isBuyUnitChapter(this.bookInfo)
                },
                updateTimeString: function() {
                    if (!this.needShowUpdateTime)
                        return "";
                    if (this.bookInfo.finished)
                        return "已完结";
                    if (this.bookInfo.updateTime) {
                        var e = this.bookInfo.updateTime
                          , t = new Date(1e3 * e);
                        return "更新于 " + n.default.formatTime(t)
                    }
                    return ""
                }
            },
            methods: {
                emitClickBookInfo: function() {
                    this.$emit("clickBookInfo")
                }
            }
        }
    },
    561: function(e, t, r) {},
    562: function(e, t, r) {},
    563: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(564)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    564: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(r(273))
          , o = a(r(270))
          , i = a(r(185));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = r(25);
        t.default = {
            name: "ReaderTopBar",
            components: {
                Avatar: n.default,
                Menu: o.default
            },
            props: {
                bookInfo: {
                    type: Object,
                    required: !0
                },
                currentChapter: {
                    type: Object,
                    required: !0
                },
                isShowAddShelf: {
                    type: Boolean,
                    required: !0
                },
                shelfBookCount: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                bookTitleString: function() {
                    return s.get(this.bookInfo, "title", "") + " "
                },
                chapterTitleString: function() {
                    var e = s.get(this.currentChapter, "title", "");
                    return [i.default.isEPub(this.bookInfo) ? "" : "第" + s.get(this.currentChapter, "chapterIdx", "") + "章", e].join(" ")
                },
                avatarOptionList: function() {
                    return this.isWeiXin ? ["我的书架" + (this.shelfBookCount ? " · " + this.shelfBookCount : "")] : ["我的书架" + (this.shelfBookCount ? " · " + this.shelfBookCount : ""), "退出登录"]
                }
            },
            methods: {
                handleHideMenu: function() {
                    var e = this.$refs.topBar_avatarMenu;
                    e && e.hideMenu()
                },
                isMenuShowing: function() {
                    var e = this.$refs.topBar_avatarMenu;
                    return !!e && e.menuShowing
                },
                emitClickShelfButton: function() {
                    this.$emit("clickShelfButton")
                },
                handleClickBookTitle: function() {
                    this.$emit("clickBookTitle")
                },
                handleClickAvatarMenuOption: function(e) {
                    switch (e.index) {
                    case 0:
                        this.$emit("click-shelf");
                        break;
                    case 1:
                        this.$emit("click-logout")
                    }
                },
                handleClickAvatar: function() {
                    this.$refs.topBar_avatarMenu.showMenu()
                }
            }
        }
    },
    565: function(e, t, r) {},
    566: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(567)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    567: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            name: "ReaderBottomBar",
            props: {
                showShadow: {
                    type: Boolean,
                    required: !1,
                    default: !0
                },
                showAddShelfButton: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            methods: {
                emitClick: function(e) {
                    this.$emit("onClickItem", e)
                }
            }
        }
    },
    568: function(e, t, r) {},
    569: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(570)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    570: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(21), i = (n = o) && n.__esModule ? n : {
            default: n
        };
        t.default = {
            name: "ReaderBottomSettingPanel",
            props: {
                isWhiteTheme: {
                    type: Boolean,
                    required: !0
                }
            },
            computed: {
                canShowDownload: function() {
                    return (new i.default).isPhone()
                }
            },
            methods: {
                emitClick: function(e) {
                    this.$emit("onClickItem", e)
                }
            }
        }
    },
    571: function(e, t, r) {},
    572: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(573)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    573: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(r(185))
          , a = o(r(504))
          , n = o(r(60));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = r(25);
        t.default = {
            name: "PayWholeBookDialog",
            components: {
                Dialog: n.default
            },
            props: {
                bookInfo: {
                    type: Object,
                    required: !0
                },
                memberCardSummary: {
                    type: Object,
                    required: !1
                },
                balance: {
                    type: Object,
                    required: !1
                }
            },
            data: function() {
                return {}
            },
            computed: {
                payInfos: function() {
                    var e = {
                        dialogPriceText: "",
                        dialogAccountBalance: "",
                        dialogBuyButtonText: "",
                        isNeedDeposit: !1
                    }
                      , t = this.balance
                      , r = t.iOS > t.Android ? t.iOS : t.Android;
                    if (t.hasFetched ? e.dialogAccountBalance = "余额 " + Math.max(0, r).toFixed(2) : e.dialogAccountBalance = " ",
                    i.default.isLimitFree(this.bookInfo))
                        e.dialogPriceText = "限时免费",
                        e.dialogBuyButtonText = "获 取";
                    else if (i.default.isFree(this.bookInfo))
                        e.dialogPriceText = "免费",
                        e.dialogBuyButtonText = "获 取";
                    else if (a.default.isMemberShipValid(this.memberCardSummary) && 0 < s.get(this.bookInfo, "mcardDiscount", 0)) {
                        var n = (i.default.isBuyUnitWholeBook(this.bookInfo) ? s.get(this.bookInfo, "price", 0) : s.get(this.currentChapter, "price", 0)) * (100 - s.get(this.bookInfo, "mcardDiscount", 0)) / 100;
                        e.dialogPriceText = n.toFixed(2),
                        e.isNeedDeposit = r < n,
                        e.dialogBuyButtonText = e.isNeedDeposit ? "去微信读书 app 充值" : "购 买"
                    } else {
                        var o = i.default.isBuyUnitWholeBook(this.bookInfo) ? s.get(this.bookInfo, "price", 0) : s.get(this.currentChapter, "price", 0);
                        e.dialogPriceText = o.toFixed(2),
                        e.isNeedDeposit = r < o,
                        e.dialogBuyButtonText = e.isNeedDeposit ? "去微信读书 app 充值" : "购 买"
                    }
                    return console.log(e),
                    e
                }
            },
            methods: {
                showDialog: function() {
                    this.$refs.dialog.showDialog()
                },
                closeDialog: function() {
                    this.$refs.dialog.closeDialog()
                },
                emitDoPay: function() {
                    this.$emit("doPay")
                }
            }
        }
    },
    574: function(e, t, r) {},
    575: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(576)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    576: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(r(269))
          , o = a(r(504))
          , i = a(r(60));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = r(25);
        t.default = {
            name: "PayChapterDialog",
            components: {
                Dialog: i.default
            },
            props: {
                bookInfo: {
                    type: Object,
                    required: !0
                },
                chapters: {
                    type: Array,
                    required: !0
                },
                memberCardSummary: {
                    type: Object,
                    required: !1
                },
                balance: {
                    type: Object,
                    required: !1
                }
            },
            data: function() {
                return {
                    initSelectedChapterUid: -1,
                    isAutoPay: 1 === s.get(this.bookInfo, "isAutoPay", 0),
                    sections: this.splitChaptersToSection(this.chapters)
                }
            },
            computed: {
                accountBalance: function() {
                    var e = this.balance.iOS > this.balance.Android ? this.balance.iOS : this.balance.Android;
                    return Math.max(0, e)
                },
                isSelectedAll: function() {
                    var t = this;
                    return this.sections.every(function(e) {
                        return t.isSectionSelectedAll(e)
                    })
                },
                selectedChaptersSize: function() {
                    return s.sumBy(this.sections, function(e) {
                        return e.selected.length
                    })
                },
                selectedChaptersPrice: function() {
                    var r = 0;
                    return this.sections.forEach(function(e) {
                        var t = e.selected;
                        e.chapters.forEach(function(e) {
                            -1 !== t.indexOf(e.chapterUid) && (r += e.price)
                        })
                    }),
                    r
                },
                selectedChaptersPriceWithDiscount: function() {
                    var e = this.selectedChaptersPrice;
                    this.hasMCardDiscount && (e = e * (100 - s.get(this.bookInfo, "mcardDiscount", 0)) / 100);
                    return e
                },
                hasMCardDiscount: function() {
                    return o.default.isMemberShipValid(this.memberCardSummary) && 0 < s.get(this.bookInfo, "mcardDiscount", 0)
                },
                priceTitleWithMCardDiscount: function() {
                    if (this.hasMCardDiscount) {
                        var e = s.get(this.bookInfo, "mcardDiscount", 0);
                        return "总价 · 无限卡" + o.default.discountToChinese(e)
                    }
                    return "总价"
                },
                isValid: function() {
                    for (var e = 0; e < this.sections.length; e++) {
                        if (0 < this.sections[e].selected.length)
                            return !0
                    }
                    return !1
                },
                isNeedDeposit: function() {
                    return this.balance.hasFetched && this.accountBalance < this.selectedChaptersPriceWithDiscount
                }
            },
            watch: {
                chapters: function(e) {
                    this.sections = this.splitChaptersToSection(e)
                }
            },
            methods: {
                showDialog: function(e) {
                    var r = this;
                    this.initSelectedChapterUid = e,
                    this.sections.forEach(function(t) {
                        t.selected.length = 0,
                        t.isExpand = !1,
                        t.chapters.forEach(function(e) {
                            r.initSelectedChapterUid === e.chapterUid && 0 < e.price && 1 !== e.paid && (t.selected.push(e.chapterUid),
                            t.isExpand = !0)
                        })
                    }),
                    this.$refs.dialog.showDialog()
                },
                closeDialog: function() {
                    this.$refs.dialog.closeDialog()
                },
                onShow: function() {
                    var e = this;
                    this.$nextTick(function() {
                        e.scrollToCurrent()
                    })
                },
                scrollToCurrent: function() {
                    var e = this.$refs.scrollDom;
                    if (e) {
                        var t = document.getElementById("pcd_chapter_current");
                        t && (e.scrollTop = t.offsetTop)
                    }
                },
                emitDoPay: function() {
                    var e = Math.round(100 * this.selectedChaptersPriceWithDiscount) / 100
                      , t = {
                        chapterIds: this.sortedSelectedChapterIds(),
                        totalPrice: e,
                        isAutoPay: this.isAutoPay
                    };
                    this.$emit("doPay", t)
                },
                splitChaptersToSection: function(s) {
                    for (var c = this, l = [], e = function(e) {
                        var t = s.slice(e, e + 20)
                          , r = 0
                          , n = 0
                          , o = !0
                          , i = [];
                        t.forEach(function(e) {
                            r += e.price,
                            n += 1 === e.paid ? 0 : e.price,
                            0 < e.price && 1 !== e.paid && (o = !1),
                            c.initSelectedChapterUid === e.chapterUid && 0 < e.price && 1 !== e.paid && i.push(e.chapterUid)
                        });
                        var a = 0 < i.length;
                        t.length && l.push({
                            key: t[0].chapterIdx,
                            chapters: t,
                            title: "第" + t[0].chapterIdx + "-" + t[t.length - 1].chapterIdx + "章",
                            isAllPaid: o,
                            unpaidPrice: n,
                            totalPrice: r,
                            isExpand: a,
                            selected: i
                        })
                    }, t = 0; t < s.length; t += 20)
                        e(t);
                    return l
                },
                sortedSelectedChapterIds: function() {
                    var t = [];
                    return this.sections.forEach(function(e) {
                        0 < e.selected.length && t.push.apply(t, (0,
                        n.default)(e.selected))
                    }),
                    t.sort(),
                    t
                },
                toggleSectionExpand: function(e) {
                    e.isExpand = !e.isExpand
                },
                changeTitleChecked: function(e, t) {
                    var r = t.target.checked;
                    this.selectSection(e, r)
                },
                selectSection: function(t, e) {
                    e ? t.chapters.forEach(function(e) {
                        0 !== e.price && 1 !== e.paid && -1 === t.selected.indexOf(e.chapterUid) && t.selected.push(e.chapterUid)
                    }) : t.selected = []
                },
                isTitleChecked: function(e) {
                    return this.isSectionSelectedAll(e)
                },
                isSectionSelectedAll: function(t) {
                    return t.chapters.every(function(e) {
                        return 0 === e.price || 1 === e.paid || -1 !== t.selected.indexOf(e.chapterUid)
                    })
                },
                toggleSection: function(e) {
                    var t = !this.isSectionSelectedAll(e);
                    this.selectSection(e, t)
                },
                toggleChapter: function(e, t) {
                    var r = e.selected.indexOf(t.chapterUid);
                    -1 === r ? e.selected.push(t.chapterUid) : e.selected.splice(r, 1)
                },
                toggleAllSelect: function() {
                    var t = this
                      , r = !this.isSelectedAll;
                    this.sections.forEach(function(e) {
                        t.selectSection(e, r)
                    })
                }
            }
        }
    },
    577: function(e, t, r) {},
    578: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(579)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    579: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(126), i = (n = o) && n.__esModule ? n : {
            default: n
        };
        t.default = {
            name: "ReaderLoginGuide",
            components: {
                Loading: i.default
            },
            props: {
                qrCodeImg: {
                    type: String
                },
                getUidErr: {
                    type: Boolean
                },
                getInfoErr: {
                    type: Boolean
                },
                loadingQRCode: {
                    type: Boolean
                }
            },
            methods: {
                emitReload: function() {
                    this.$emit("reload")
                }
            }
        }
    },
    580: function(e, t, r) {},
    581: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(582)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    582: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r(60), i = (n = o) && n.__esModule ? n : {
            default: n
        };
        var a = r(128);
        t.default = {
            name: "ReceiveMCardSuccessDialog",
            components: {
                Dialog: i.default
            },
            props: {},
            data: function() {
                return {
                    day: 0,
                    qrCodeImg: ""
                }
            },
            computed: {
                titleText: function() {
                    return 0 < this.day ? "你已领取" + this.day + "天无限卡" : "成功领取无限卡"
                }
            },
            methods: {
                beginToLoadQrCode: function() {
                    this.reportClientBusiness({
                        itemName: "Web_Download_GiftExp"
                    });
                    var e = a.generateDownloadAppURL({
                        from: "ReceiveMemberCard"
                    });
                    this.qrCodeImg = r(62).getQrBase64(e, {
                        padding: 16,
                        width: 206,
                        height: 206,
                        correctLevel: QRErrorCorrectLevel.H,
                        background: "#FFF",
                        foreground: "#000"
                    })
                },
                showDialog: function(e) {
                    this.day = e && e.day ? e.day : 0,
                    this.$refs.dialog.showDialog()
                },
                closeDialog: function() {
                    this.$refs.dialog.closeDialog()
                }
            }
        }
    },
    583: function(e, t, r) {},
    584: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(585)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    585: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            name: "ReaderMemberCardTips",
            props: {
                customSelector: {
                    type: String,
                    required: !1,
                    default: ""
                }
            },
            data: function() {
                return {
                    showing: !1,
                    text: ""
                }
            },
            methods: {
                show: function(e) {
                    this.text = e,
                    this.showing = !0
                },
                close: function() {
                    this.showing = !1
                },
                onShow: function() {
                    var e = this;
                    setTimeout(function() {
                        e.close()
                    }, 5e3)
                }
            }
        }
    },
    586: function(e, t, r) {},
    587: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(588)
          , o = r.n(n);
        for (var i in n)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return n[e]
                })
            }(i);
        t.default = o.a
    },
    588: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            name: "FooterNote.vue",
            props: {
                text: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    showing: !1,
                    customStyle: ""
                }
            },
            methods: {
                getOffset: function(e) {
                    for (var t = e.offsetTop, r = e.offsetLeft, n = e.offsetWidth, o = e.offsetHeight; e.offsetParent; )
                        t += (e = e.offsetParent).offsetTop,
                        r += e.offsetLeft;
                    return {
                        top: t,
                        left: r,
                        width: n,
                        height: o
                    }
                },
                show: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    if (!this.showing) {
                        var s = this;
                        this.showing = !0,
                        this.text = t.text || "";
                        var r = t.node || {}
                          , c = this.getOffset(r);
                        this.$nextTick(function() {
                            var e = s.$refs.footerNote_bubble
                              , t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                              , r = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);
                            if (c.top - t < r / 2) {
                                this.$refs.footerNote_container.classList.add("reader_footerNote_container_Top");
                                var n = c.left - e.offsetWidth / 2 + c.width / 2
                                  , o = c.top + c.height + 12;
                                s.customStyle = "left:" + n + "px;top:" + o + "px;"
                            } else {
                                this.$refs.footerNote_container.classList.remove("reader_footerNote_container_Top");
                                var i = c.left - e.offsetWidth / 2 + c.width / 2
                                  , a = c.top - e.offsetHeight - 12;
                                s.customStyle = "left:" + i + "px;top:" + a + "px;"
                            }
                        })
                    }
                },
                hide: function() {
                    this.showing && (this.showing = !1)
                },
                handleMaskClick: function() {
                    this.hide()
                }
            }
        }
    },
    589: function(e, t, r) {},
    590: function(e, t, r) {},
    626: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var p = k(r(131))
          , g = k(r(129))
          , _ = k(r(191))
          , l = k(r(269))
          , f = k(r(186))
          , n = k(r(188))
          , u = k(r(58))
          , d = k(r(184))
          , h = k(r(627));
        t.default = function() {
            var e, t;
            return {
                state: {
                    bookId: "",
                    isBookInfoError: !1,
                    bookInfo: {},
                    isInShelf: !1,
                    memberCardSummary: {},
                    infiniteInfo: {},
                    activeInfiniteInfo: {},
                    readingStat: {},
                    chapterInfos: [],
                    progress: {},
                    currentChapter: {},
                    isWhiteTheme: !1,
                    chapterContentHtml: "",
                    chapterContentStyles: "",
                    chapterContentState: !1,
                    chapterContentTargetHtml: "",
                    isChapterContentDirty: !1,
                    isSearchLoading: !1,
                    isInSearchMode: !1,
                    isShowAutoSearchHint: !1,
                    searchResult: {
                        keyword: "",
                        resultList: [],
                        hasMore: !1,
                        totalCount: 0,
                        isNeedAutoSearchWhenShow: !1
                    },
                    startReadingTime: 0,
                    pauseTime: 0,
                    activeTime: 0,
                    token: "",
                    balance: {
                        hasFetched: !1,
                        iOS: 0,
                        Android: 0
                    },
                    psvts: 0,
                    pclts: 0
                },
                getters: {
                    getChapterWithIdxOffset: function(n) {
                        return function(e) {
                            var t = I.get(n.currentChapter, "chapterIdx", 0);
                            if (t && 0 < n.chapterInfos.length) {
                                var r = t - n.chapterInfos[0].chapterIdx + e;
                                if (-1 < r && r < n.chapterInfos.length)
                                    return n.chapterInfos[r]
                            }
                            return null
                        }
                    },
                    getChapterWithChapterUid: function(o) {
                        return function(e) {
                            for (var t = 0, r = o.chapterInfos.length; t < r; t++) {
                                var n = o.chapterInfos[t];
                                if (n && n.chapterUid === e)
                                    return n
                            }
                            return null
                        }
                    },
                    hasPrevChapter: function(e, t) {
                        return null !== t.getChapterWithIdxOffset(-1)
                    },
                    hasNextChapter: function(e, t) {
                        return null !== t.getChapterWithIdxOffset(1)
                    },
                    isCurrentChapterTheFirst: function(e) {
                        return !!e.bookInfo && (!e.currentChapter || !e.chapterInfos || 0 === e.chapterInfos.length || e.chapterInfos[0].chapterIdx === e.currentChapter.chapterIdx)
                    },
                    chapterTitleText: function(e) {
                        var t = e.currentChapter;
                        if (!t)
                            return "";
                        var r = I.get(t, "title", "");
                        return [R.default.isEPub(e.bookInfo) ? "" : "第" + I.get(t, "chapterIdx", "") + "章", r].join(" ")
                    },
                    isBlackUser: function(e) {
                        return "black" === I.get(e.activeInfiniteInfo, "userType")
                    },
                    isNeedPay: function(e) {
                        return i.default.isChapterNeedPay({
                            bookInfo: e.bookInfo,
                            memberCardSummary: e.memberCardSummary,
                            chapter: e.currentChapter
                        })
                    },
                    isNeedPayWithoutMemberCard: function(e) {
                        return i.default.isChapterNeedPay({
                            bookInfo: e.bookInfo,
                            chapter: e.currentChapter
                        })
                    }
                },
                mutations: (e = {},
                (0,
                n.default)(e, b.UPDATE_INIT_BOOK_ID, function(e, t) {
                    e.bookId = t || ""
                }),
                (0,
                n.default)(e, b.UPDATE_READER_BOOK_INFO_ERROR, function(e) {
                    e.isBookInfoError = !0
                }),
                (0,
                n.default)(e, b.UPDATE_READER_BOOK_INFO_PRICE, function(e, t) {
                    e.bookInfo.price = t || 0
                }),
                (0,
                n.default)(e, b.UPDATE_READER_BOOK_INFO_PAY_TYPE, function(e, t) {
                    e.bookInfo.payType = t || 0
                }),
                (0,
                n.default)(e, b.UPDATE_READER_BOOK_INFO, function(e, t) {
                    e.bookInfo = t || {}
                }),
                (0,
                n.default)(e, b.UPDATE_READER_READING_STAT, function(e, t) {
                    e.readingStat = t || {}
                }),
                (0,
                n.default)(e, b.UPDATE_BOOK_IN_SHELF, function(e, t) {
                    e.isInShelf = t || !1
                }),
                (0,
                n.default)(e, b.UPDATE_READER_MEMBER_CARD_SUMMARY, function(e, t) {
                    e.memberCardSummary = t || {}
                }),
                (0,
                n.default)(e, b.UPDATE_READER_INFINITE_INFO, function(e, t) {
                    e.infiniteInfo = t || {}
                }),
                (0,
                n.default)(e, b.UPDATE_READER_ACTIVE_INFINITE_INFO, function(e, t) {
                    e.activeInfiniteInfo = t || {}
                }),
                (0,
                n.default)(e, b.UPDATE_READER_CHAPTER_INFOS, function(e, t) {
                    e.chapterInfos = t || []
                }),
                (0,
                n.default)(e, b.UPDATE_READER_PROGRESS, function(e, t) {
                    e.progress = t || {}
                }),
                (0,
                n.default)(e, b.UPDATE_READER_LOCAL_PROGRESS, function(e, t) {
                    var r = t.appId
                      , n = t.chapterUid
                      , o = t.chapterOffset
                      , i = t.updateTime
                      , a = t.summary
                      , s = (0,
                    d.default)({}, e.progress.book, {
                        appId: r,
                        chapterUid: n,
                        chapterOffset: o,
                        updateTime: i,
                        summary: a
                    });
                    e.progress = (0,
                    d.default)({}, e.progress, {
                        book: s
                    })
                }),
                (0,
                n.default)(e, b.UPDATE_READER_CURRENT_CHAPTER, function(e, t) {
                    e.currentChapter = t || {}
                }),
                (0,
                n.default)(e, b.UPDATE_READER_CONTENT_HTML, function(e, t) {
                    var r = +new Date;
                    if (e.chapterContentHtml = function(e, t) {
                        if (!e || e.length <= 0)
                            return "";
                        var r = new RegExp('<img(?!<img).+?alt="(.+?)"(?!<img).+?qqreader-footnote(?!<img).+?>',"gi")
                          , n = new RegExp('<img(?!<img).+?qqreader-footnote(?!<img).+?alt="(.+?)"(?!<img).+?>',"gi");
                        return (e = (e = (e = e.replace(r, '<span class="reader_footer_note js_readerFooterNote" data-wr-footernote="$1"></span>')).replace(n, '<span class="reader_footer_note js_readerFooterNote" data-wr-footernote="$1"></span>')).replace(/\.\.\/video\/(.*?\.(mp4|wmv|3gp|rm|rmvb|mov|m4v|avi))/gi, "https://res.weread.qq.com/wrepub/web/" + t + "/$1")).trim()
                    }(t || "", e.bookId),
                    w.inDevelopment()) {
                        var n = +new Date;
                        console.log("DOM 过滤处理时间 = ", n - r, "毫秒")
                    }
                }),
                (0,
                n.default)(e, b.UPDATE_READER_CONTENT_STYLES, function(e, t) {
                    e.chapterContentStyles = function(e, t) {
                        if (!e || e.length <= 0)
                            return "";
                        e = e.trim();
                        var r = new RegExp("[^{}]*?{[\\s\\S]+?}","gi");
                        return e.replace(/\/\*.*?\*\//gi, "").match(r).map(function(e) {
                            return ".readerChapterContent " + (e = e.trim()).split("\n").map(function(e) {
                                return -1 === (e = e.trim()).indexOf("{") && -1 === e.indexOf("}") && -1 === e.indexOf(";") ? e + ";" : e
                            }).join("")
                        }).join("").trim().replace(/\.\.\/images\/(.*?\.(png|jpg|jpeg|gif))/gi, "https://res.weread.qq.com/wrepub/web/" + t + "/$1")
                    }(t || "", e.bookId)
                }),
                (0,
                n.default)(e, b.UPDATE_READER_CHAPTER_CONTENT_TARGET_HTML, function(e, t) {
                    e.chapterContentTargetHtml = t || ""
                }),
                (0,
                n.default)(e, b.UPDATE_READER_CONTENT_STATE, function(e, t) {
                    e.chapterContentState = t
                }),
                (0,
                n.default)(e, b.UPDATE_READER_CONTENT_IS_DIRTY, function(e, t) {
                    e.isChapterContentDirty = t || !1
                }),
                (0,
                n.default)(e, b.UPDATE_IS_WHITE_THEME, function(e, t) {
                    e.isWhiteTheme = t || !1
                }),
                (0,
                n.default)(e, b.UPDATE_READER_SEARCH_RESULT, function(e, t) {
                    t.isLoadMore ? e.searchResult.resultList = e.searchResult.resultList.concat(t.resultList) : e.searchResult.resultList = t.resultList,
                    e.searchResult.hasMore = t.hasMore,
                    e.searchResult.totalCount = t.totalCount,
                    e.searchResult.isNeedAutoSearchWhenShow = t.isNeedAutoSearchWhenShow
                }),
                (0,
                n.default)(e, b.CLEAR_READER_SEARCH_RESULT, function(e) {
                    e.searchResult.keyword = "",
                    e.searchResult.resultList = [],
                    e.searchResult.hasMore = !1,
                    e.searchResult.totalCount = 0,
                    e.isSearchLoading = !1
                }),
                (0,
                n.default)(e, b.UPDATE_READER_SEARCH_RESULT_KEYWORD, function(e, t) {
                    e.searchResult.keyword = t || ""
                }),
                (0,
                n.default)(e, b.UPDATE_READER_IS_IN_SEARCH, function(e, t) {
                    e.isInSearchMode = t || !1
                }),
                (0,
                n.default)(e, b.UPDATE_READER_IS_SHOW_AUTO_SEARCH_HINT, function(e, t) {
                    e.isShowAutoSearchHint = t || !1
                }),
                (0,
                n.default)(e, b.UPDATE_READER_SEARCH_LOADING, function(e, t) {
                    e.isSearchLoading = t || !1
                }),
                (0,
                n.default)(e, b.UPDATE_READER_START_READING_TIME, function(e, t) {
                    e.startReadingTime = t || (new Date).getTime()
                }),
                (0,
                n.default)(e, b.UPDATE_READER_TOKEN, function(e, t) {
                    e.token = t || ""
                }),
                (0,
                n.default)(e, b.UPDATE_READER_PAUSE_TIME, function(e) {
                    e.pauseTime = (new Date).getTime()
                }),
                (0,
                n.default)(e, b.UPDATE_READER_ACTIVE_TIME, function(e) {
                    e.activeTime = (new Date).getTime()
                }),
                (0,
                n.default)(e, b.UPDATE_READER_BALANCE, function(e, t) {
                    var r = I.get(t, "balance", 0)
                      , n = I.get(t, "peerBalance", 0);
                    e.balance = {
                        hasFetched: !0,
                        iOS: r,
                        Android: n
                    }
                }),
                (0,
                n.default)(e, b.UPDATE_READER_PAGE_SERVER_TIMESTAMP, function(e, t) {
                    e.psvts = A.e(t) || ""
                }),
                (0,
                n.default)(e, b.UPDATE_READER_PAGE_CLIENT_TIMESTAMP, function(e, t) {
                    e.pclts = A.e(t) || ""
                }),
                e),
                actions: (t = {},
                (0,
                n.default)(t, E.FETCH_READER_INIT_DATA, function(e, t) {
                    var n = e.commit
                      , r = e.dispatch
                      , o = e.state
                      , i = e.getters
                      , a = t.initChapterUid
                      , s = t.envConfig
                      , c = t.isLogin;
                    return f.default.all([f.default.all([r(E.FETCH_READER_BOOK_INFO, {
                        envConfig: s,
                        isLogin: c
                    }), r(E.FETCH_READER_CHAPTER_INFOS, {
                        envConfig: s,
                        isLogin: c
                    })].concat((0,
                    l.default)(c ? [r(E.FETCH_READER_PROGRESS, {
                        envConfig: s,
                        compareWithLocal: !1
                    })] : []))).then(function(e) {
                        var t = e[0] || {}
                          , r = e[1] || [];
                        n(b.UPDATE_READER_CHAPTER_INFOS, x(t, r))
                    }).then(function() {
                        var e = function(e) {
                            var t = e.chapterInfos
                              , r = e.initChapterUid
                              , n = e.progress
                              , o = r;
                            if (!r || !(0,
                            h.default)(r)) {
                                var i = I.get(n, "book.chapterUid", 0);
                                0 < i && (o = i)
                            }
                            for (var a = null, s = 0, c = t.length; s < c; s++) {
                                var l = t[s];
                                if (l && l.chapterUid === o) {
                                    a = l;
                                    break
                                }
                            }
                            a && a.chapterUid || (a = t[0]);
                            O("chapterToShow", "initChapterUid=" + r, "progressChapterUid=" + I.get(n, "book.chapterUid", 0), "result=" + (a ? a.chapterUid : -1)),
                            a || O("Error in chapterToShow. Can not find target Chapter");
                            return a || {}
                        }({
                            chapterInfos: o.chapterInfos,
                            initChapterUid: a,
                            progress: o.progress
                        });
                        n(b.UPDATE_READER_CURRENT_CHAPTER, e),
                        n(b.UPDATE_SHOW_NAV_BAR, i.isCurrentChapterTheFirst),
                        n(b.UPDATE_READER_CONTENT_IS_DIRTY, !0),
                        n(b.UPDATE_READER_CONTENT_STATE, "LOADING")
                    }), r(E.INIT_THEME, s)].concat((0,
                    l.default)(c ? [r(E.FETCH_READER_BOOK_IN_SHELF, s), r(E.FETCH_READER_MEMBER_CARD_SUMMARY, s), r(E.FETCH_READER_INFINITE_INFO, s), r(E.FETCH_READER_ACTIVE_INFINITE, s), r(E.FETCH_READER_GET_CONFIG, s)] : []), [r(E.FETCH_READER_BOOK_READING_STAT, {
                        envConfig: s,
                        isLogin: c
                    })])).catch(function(e) {
                        O("Error in initData", e)
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_BOOK_INFO, function(e, t) {
                    var n = e.commit
                      , r = e.state
                      , o = t.envConfig
                      , i = t.isLogin
                      , a = r.bookId;
                    if (a)
                        return i ? (0,
                        m.default)("/web/book/info", (0,
                        d.default)({
                            bookId: a
                        }, o), function(e) {
                            var t = e.data || {};
                            return t.intro && (t.intro = s.default.replaceBlankToSpace(t.intro).trim()),
                            n(b.UPDATE_READER_BOOK_INFO, t),
                            t.title && n(b.UPDATE_PAGE_TITLE, t.title),
                            t
                        }, function(e) {
                            n(b.UPDATE_READER_BOOK_INFO_ERROR),
                            O("Error in loadBookInfo(bookId=" + a, e)
                        }) : (0,
                        v.default)("/web/book/publicinfos", (0,
                        d.default)({
                            bookIds: [a]
                        }, o), function(e) {
                            var t = I.get(e, "data.data", [])
                              , r = 0 < t.length ? t[0] : {};
                            return r.intro && (r.intro = s.default.replaceBlankToSpace(r.intro).trim()),
                            n(b.UPDATE_READER_BOOK_INFO, r),
                            r.title && n(b.UPDATE_PAGE_TITLE, r.title),
                            r
                        }, function(e) {
                            n(b.UPDATE_READER_BOOK_INFO_ERROR),
                            O("Error in loadBookInfo(bookId=" + a, e)
                        })
                }),
                (0,
                n.default)(t, E.FETCH_READER_CHAPTER_INFOS, function(e, t) {
                    var r = e.state
                      , n = t.envConfig
                      , o = t.isLogin
                      , a = r.bookId;
                    if (a)
                        return o ? (0,
                        v.default)("/web/book/chapterInfos", (0,
                        d.default)({
                            bookIds: [a]
                        }, n)).then(function(e) {
                            for (var t = (e.data || {}).data || [], r = {}, n = 0, o = t.length; n < o; n++) {
                                var i = t[n];
                                if (i && i.bookId === a) {
                                    r = i;
                                    break
                                }
                            }
                            return r.updated || []
                        }).catch(function(e) {
                            O("Error in chapterInfos", e)
                        }) : (0,
                        v.default)("/web/book/publicchapterInfos", (0,
                        d.default)({
                            bookIds: [a]
                        }, n)).then(function(e) {
                            for (var t = (e.data || {}).data || [], r = {}, n = 0, o = t.length; n < o; n++) {
                                var i = t[n];
                                if (i && i.bookId === a) {
                                    r = i;
                                    break
                                }
                            }
                            return r.updated || []
                        }).catch(function(e) {
                            O("Error in publicchapterInfos", e)
                        })
                }),
                (0,
                n.default)(t, E.RELOAD_READER_CHAPTER_INFOS, function(e, t) {
                    var r = e.dispatch
                      , n = e.commit
                      , o = e.state
                      , i = t.isLogin;
                    return r(E.FETCH_READER_CHAPTER_INFOS, {
                        envConfig: {},
                        isLogin: i
                    }).then(function(e) {
                        n(b.UPDATE_READER_CHAPTER_INFOS, x(o.bookInfo, e))
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_PROGRESS, function(e, t) {
                    var n = e.commit
                      , o = e.state
                      , r = t.envConfig
                      , i = t.compareWithLocal
                      , a = o.bookId;
                    if (a)
                        return (0,
                        m.default)("/web/book/getProgress", (0,
                        d.default)({
                            bookId: a
                        }, r), function(e) {
                            if (i) {
                                var t = e.data
                                  , r = o.progress;
                                return t && r ? I.get(t, "book.updateTime", 0) <= I.get(r, "book.updateTime", 0) ? null : I.get(t, "book.appId", "") === I.get(r, "book.appId", "") ? null : (n(b.UPDATE_READER_PROGRESS, t),
                                t) : null
                            }
                            n(b.UPDATE_READER_PROGRESS, e.data)
                        }, function(e) {
                            O("Error in fetchBookProgress", e)
                        })
                }),
                (0,
                n.default)(t, E.FETCH_READER_BOOK_READING_STAT, function(e, t) {
                    var r = e.commit
                      , n = e.state
                      , o = t.envConfig
                      , i = t.isLogin
                      , a = n.bookId;
                    if (a)
                        return i ? (0,
                        m.default)("/web/book/readingStat", (0,
                        d.default)({
                            bookId: a,
                            showUserNum: 2
                        }, o), function(e) {
                            r(b.UPDATE_READER_READING_STAT, e.data)
                        }, function(e) {
                            O("Error in fetchReadingStat", e)
                        }) : (0,
                        m.default)("/web/readingStat", (0,
                        d.default)({
                            bookId: a
                        }, o), function(e) {
                            r(b.UPDATE_READER_READING_STAT, e.data)
                        }, function(e) {
                            O("Error in fetchReadingStatNoSession", e)
                        })
                }),
                (0,
                n.default)(t, E.FETCH_READER_BOOK_IN_SHELF, function(e, t) {
                    var a = e.commit
                      , r = e.dispatch
                      , s = e.state
                      , n = s.bookId;
                    if (n)
                        return r(E.FETCH_BOOK_IN_SHELF, {
                            envConfig: t,
                            bookIds: n
                        }).then(function(e) {
                            for (var t = {}, r = 0, n = e.length; r < n; r++) {
                                var o = e[r];
                                if (o.bookId === s.bookId) {
                                    t = o;
                                    break
                                }
                            }
                            var i = 1 === t.onShelf;
                            a(b.UPDATE_BOOK_IN_SHELF, i)
                        }).catch(function(e) {
                            O("Error in fetchBookInShelf", e)
                        })
                }),
                (0,
                n.default)(t, E.FETCH_READER_ADD_SHELF, function(e) {
                    var t = e.commit
                      , r = e.dispatch
                      , n = e.state.bookId;
                    if (n)
                        return r(E.FETCH_ADD_SHELF, {
                            bookIds: [n]
                        }).then(function(e) {
                            return e && t(b.UPDATE_BOOK_IN_SHELF, !0),
                            e
                        }).catch(function(e) {
                            O("Error in addShelf", e)
                        })
                }),
                (0,
                n.default)(t, E.FETCH_READER_ACTIVE_INFINITE, function(e, t) {
                    var r = e.commit;
                    return (0,
                    m.default)("/web/act/activeinfinite", (0,
                    d.default)({}, t), function(e) {
                        r(b.UPDATE_READER_ACTIVE_INFINITE_INFO, e.data)
                    }, function(e) {
                        O("Error in fetchReaderActiveInfinite", e)
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_MEMBER_CARD_SUMMARY, function(e, t) {
                    var r = e.commit;
                    return (0,
                    m.default)("/web/pay/memberCardSummary", (0,
                    d.default)({}, t, {
                        pf: "ios"
                    }), function(e) {
                        r(b.UPDATE_READER_MEMBER_CARD_SUMMARY, e.data)
                    }, function(e) {
                        O("Error in fetchMemberCardSummary", e)
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_INFINITE_INFO, function(e, t) {
                    var r = e.commit;
                    return (0,
                    m.default)("/web/act/sendinfinite", (0,
                    d.default)({}, t), function(e) {
                        r(b.UPDATE_READER_INFINITE_INFO, e.data)
                    }, function(e) {
                        O("Error in fetchReaderInfiniteInfo", e)
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_RECEIVE_MEMBERCARD, function(e) {
                    e.dispatch
                }),
                (0,
                n.default)(t, E.FETCH_READER_CHAPTER_CONTENT, function(e) {
                    var t = e.dispatch
                      , s = e.commit
                      , o = e.state
                      , c = e.getters;
                    if (o.isChapterContentDirty) {
                        var i = o.bookId
                          , r = o.currentChapter
                          , a = I.get(r, "chapterUid");
                        if (i && a) {
                            s(b.UPDATE_READER_CONTENT_STATE, "LOADING"),
                            s(b.UPDATE_READER_CHAPTER_CONTENT_TARGET_HTML, "");
                            var n = function(e) {
                                var t = 0 < arguments.length && void 0 !== e ? e : {}
                                  , r = {
                                    b: A.e(i),
                                    c: A.e(a),
                                    r: Math.pow(parseInt(1e4 * Math.random()), 2),
                                    st: 0,
                                    ct: parseInt((new Date).getTime() / 1e3),
                                    ps: o.psvts,
                                    pc: o.pclts
                                };
                                (0,
                                _.default)(r, t);
                                var n = U(r);
                                return r.s = H(n),
                                r
                            }
                              , l = void 0;
                            l = R.default.isEPub(o.bookInfo) ? f.default.all([(0,
                            v.default)(M("255e4h4e254e565652254f4k4d575b4h59254h4b26"), n(), function(e) {
                                var t = e.data;
                                return t && "string" == typeof t ? D.chk(t) : ""
                            }, function(e) {
                                return O("Error in fetchContent", e),
                                e
                            }), (0,
                            v.default)(M("255e4h4e254e565652254f4k4d575b4h59254h4b27"), n(), function(e) {
                                var t = e.data;
                                return t && "string" == typeof t ? D.chk(t) : ""
                            }, function(e) {
                                return O("Error in fetchContent", e),
                                e
                            }), (0,
                            v.default)(M("255e4h4e254e565652254f4k4d575b4h59254h4b28"), n({
                                st: 1
                            }), function(e) {
                                var t = e.data;
                                return t && "string" == typeof t ? D.chk(t) : ""
                            }, function(e) {
                                return O("Error in fetchContent", e),
                                e
                            }), (0,
                            v.default)(M("255e4h4e254e565652254f4k4d575b4h59254h4b29"), n(), function(e) {
                                var t = e.data;
                                return t && "string" == typeof t ? D.chk(t) : ""
                            }, function(e) {
                                return O("Error in fetchContent", e),
                                e
                            })]).then(function(e) {
                                if ("string" == typeof e[0] && 0 < e[0].length && "string" == typeof e[1] && 0 < e[1].length && "string" == typeof e[2] && 0 < e[2].length && "string" == typeof e[3] && 0 < e[3].length) {
                                    var t = e[0] + e[1] + e[3];
                                    "..." === (t = D.dH(t)) && (t = c.chapterTitleText);
                                    var r = +new Date;
                                    t = y.parse(t);
                                    var n = +new Date;
                                    w.inDevelopment() && console.log("DOM 预处理时间 = ", n - r, "毫秒");
                                    var o = D.dS(e[2]);
                                    s(b.UPDATE_READER_CONTENT_HTML, t),
                                    s(b.UPDATE_READER_CONTENT_STYLES, o),
                                    s(b.UPDATE_READER_CONTENT_STATE, "PRERENDER")
                                } else {
                                    var i = null;
                                    if ("object" === (0,
                                    g.default)(e[0]) ? i = e[0] : "object" === (0,
                                    g.default)(e[1]) ? i = e[1] : "object" === (0,
                                    g.default)(e[2]) ? i = e[2] : "object" === (0,
                                    g.default)(e[3]) && (i = e[3]),
                                    i) {
                                        var a = i.errCode;
                                        if (-2012 === a)
                                            return f.default.reject({
                                                isCustomError: !0,
                                                reason: "forceReload"
                                            });
                                        if (-2010 === a || -2013 === a)
                                            return f.default.reject({
                                                isCustomError: !0,
                                                reason: "sessionTimeout"
                                            })
                                    }
                                    s(b.UPDATE_READER_CONTENT_STATE, "ERROR")
                                }
                            }, function(e) {
                                s(b.UPDATE_READER_CONTENT_STATE, "ERROR"),
                                O("Error in fetchContent", e)
                            }) : f.default.all([(0,
                            v.default)(M("255e4h4e254e565652254f4k4d575b4h59255b4b26"), n(), function(e) {
                                var t = e.data;
                                return t && "string" == typeof t ? D.chk(t) : ""
                            }, function(e) {
                                return O("Error in fetchContent", e),
                                e
                            }), (0,
                            v.default)(M("255e4h4e254e565652254f4k4d575b4h59255b4b27"), n(), function(e) {
                                var t = e.data;
                                return t && "string" == typeof t ? D.chk(t) : ""
                            }, function(e) {
                                return O("Error in fetchContent", e),
                                e
                            })]).then(function(e) {
                                var t = e[0]
                                  , r = e[1];
                                if ("string" == typeof t && 0 < t.length && "string" == typeof r && 0 < r.length) {
                                    var n = t + r;
                                    n = D.dT(n);
                                    var o = y.parseTxt(n);
                                    s(b.UPDATE_READER_CONTENT_HTML, o),
                                    s(b.UPDATE_READER_CONTENT_STATE, "PRERENDER")
                                } else {
                                    var i = null;
                                    if ("object" === (void 0 === t ? "undefined" : (0,
                                    g.default)(t)) ? i = t : "object" === (void 0 === r ? "undefined" : (0,
                                    g.default)(r)) && (i = r),
                                    i) {
                                        var a = i.errCode;
                                        if (-2012 === a)
                                            return f.default.reject({
                                                isCustomError: !0,
                                                reason: "forceReload"
                                            });
                                        if (-2010 === a || -2013 === a)
                                            return f.default.reject({
                                                isCustomError: !0,
                                                reason: "sessionTimeout"
                                            })
                                    }
                                    s(b.UPDATE_READER_CONTENT_STATE, "ERROR")
                                }
                            }, function(e) {
                                s(b.UPDATE_READER_CONTENT_STATE, "ERROR"),
                                O("Error in fetchContent", e)
                            });
                            var u = c.isNeedPay
                              , d = T.default.isMemberShipValid(o.memberCardSummary)
                              , h = T.default.canBookFreeReading({
                                bookInfo: o.bookInfo,
                                memberCardSummary: o.memberCardSummary
                            });
                            return l.then(function() {
                                if (s(b.UPDATE_READER_CONTENT_IS_DIRTY, !1),
                                u && d && !h)
                                    return t(E.FETCH_READER_MEMBER_CARD_SUMMARY, {})
                            })
                        }
                    }
                }),
                (0,
                n.default)(t, E.CHANGE_READER_CHAPTER, function(e, t) {
                    var r = e.dispatch
                      , n = e.commit
                      , o = e.state
                      , i = e.getters
                      , a = t.chapterUid;
                    if ("DONE" !== o.chapterContentState)
                        return f.default.reject({
                            isCustomError: !0,
                            reason: o.chapterContentState
                        });
                    if (I.get(o.currentChapter, "chapterUid", 0) === a)
                        return f.default.reject({
                            isCustomError: !0,
                            reason: "currentChapter"
                        });
                    var s = void 0
                      , c = i.getChapterWithIdxOffset(1);
                    return c && c.chapterUid === a && (s = c),
                    (s = s || i.getChapterWithChapterUid(a)) ? s ? (n(b.UPDATE_READER_CURRENT_CHAPTER, s),
                    n(b.UPDATE_SHOW_NAV_BAR, i.isCurrentChapterTheFirst),
                    n(b.UPDATE_READER_CONTENT_IS_DIRTY, !0),
                    window && window.history.replaceState(null, null, S.readerURL(o.bookId, {
                        chapterUid: a
                    })),
                    r(E.FETCH_READER_CHAPTER_CONTENT)) : void 0 : f.default.reject({
                        isCustomError: !0,
                        reason: "chapterNotExist"
                    })
                }),
                (0,
                n.default)(t, E.RELOAD_READER_CURRENT_CHAPTER, function(e) {
                    var t = e.dispatch
                      , r = e.commit
                      , n = e.state
                      , o = e.getters;
                    if (n.currentChapter) {
                        r(b.UPDATE_READER_CONTENT_IS_DIRTY, !0);
                        var i = n.currentChapter.chapterUid
                          , a = o.getChapterWithChapterUid(i);
                        return r(b.UPDATE_READER_CURRENT_CHAPTER, a),
                        t(E.FETCH_READER_CHAPTER_CONTENT)
                    }
                }),
                (0,
                n.default)(t, E.FETCH_READER_SEARCH_AUTO, function(e, t) {
                    var r = e.dispatch
                      , n = e.commit
                      , o = t.keyword;
                    return n(b.UPDATE_READER_IS_SHOW_AUTO_SEARCH_HINT, !0),
                    n(b.UPDATE_READER_IS_IN_SEARCH, !0),
                    r(E.FETCH_READER_SEARCH, {
                        keyword: o,
                        isOnlyCount: !0
                    })
                }),
                (0,
                n.default)(t, E.INIT_THEME, function(e, t) {
                    var r = e.commit
                      , n = e.rootState
                      , o = I.get(t, ["cookies", P], L);
                    if (o) {
                        var i = o === B;
                        r(b.UPDATE_IS_WHITE_THEME, i),
                        i && r(b.UPDATE_PAGE_BODY_CLASS, n.pageBodyClass + " wr_whiteTheme")
                    }
                }),
                (0,
                n.default)(t, E.TOGGLE_THEME, function(e, t) {
                    var r = e.commit
                      , n = t.isWhite;
                    r(b.UPDATE_IS_WHITE_THEME, n),
                    o.default.set(P, n ? B : N)
                }),
                (0,
                n.default)(t, E.FETCH_READER_SEARCH, function(e, i) {
                    var a = e.commit
                      , s = e.state;
                    i.isLoadMore || (a(b.CLEAR_READER_SEARCH_RESULT),
                    a(b.UPDATE_READER_SEARCH_RESULT_KEYWORD, i.keyword)),
                    a(b.UPDATE_READER_SEARCH_LOADING, !0);
                    var c = I.get(i, "isOnlyCount", !1);
                    return (0,
                    m.default)("/web/book/search", {
                        bookId: s.bookId,
                        keyword: i.keyword || "",
                        maxIdx: i.maxIdx || 0,
                        count: 10,
                        fragmentSize: i.fragmentSize || 150,
                        onlyCount: c ? 1 : 0
                    }, function(e) {
                        a(b.UPDATE_READER_SEARCH_LOADING, !1);
                        var t = e.data
                          , r = I.get(t, "result", [])
                          , n = 1 === I.get(t, "hasMore", 0)
                          , o = I.get(t, "totalCount", 0);
                        a(b.UPDATE_READER_SEARCH_RESULT, {
                            resultList: function(e, t) {
                                if (0 === t.length)
                                    return t;
                                var r = []
                                  , n = 0 < (e = e || []).length ? e[e.length - 1].chapterUid : -1;
                                return t.forEach(function(e) {
                                    var t = (0,
                                    d.default)({}, e, {
                                        firstInChapter: !1
                                    });
                                    n !== e.chapterUid && (n = e.chapterUid,
                                    t.firstInChapter = !0),
                                    r.push(t)
                                }),
                                r
                            }(s.searchResult.resultList, r),
                            isLoadMore: i.isLoadMore,
                            totalCount: o,
                            hasMore: n,
                            isNeedAutoSearchWhenShow: c
                        })
                    }, function(e) {
                        a(b.UPDATE_READER_SEARCH_LOADING, !1),
                        O("Error in readerSearch", e)
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_GET_CONFIG, function(e, t) {
                    var r = e.commit;
                    return (0,
                    m.default)("/web/getConfig", (0,
                    d.default)({}, t), function(e) {
                        var t = I.get(e.data, "token", "");
                        r(b.UPDATE_READER_TOKEN, t)
                    }, function(e) {
                        O("Error in getConfig", e)
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_ENTER_BOOK_READ, function(e, t) {
                    var r = e.state
                      , n = e.commit
                      , o = t.firstDomOffset
                      , i = t.firstDomSummaryText;
                    if (!r.isBookInfoError) {
                        var a = r.currentChapter
                          , s = {
                            appId: F(navigator.userAgent),
                            b: A.e(r.bookId),
                            c: A.e(a.chapterUid),
                            ci: a.chapterIdx,
                            co: 0,
                            sm: "",
                            ct: parseInt((new Date).getTime() / 1e3),
                            ps: r.psvts,
                            pc: r.pclts
                        };
                        if (R.default.isSupportReaderProgress(r.bookInfo)) {
                            var c = r.progress;
                            I.get(c, "book.chapterUid", 0) === a.chapterUid ? (s.co = I.get(c, "book.chapterOffset", s.co),
                            s.sm = I.get(c, "book.summary", s.sm)) : (s.co = o,
                            s.sm = i)
                        }
                        return s.s = H(U(s)),
                        n(b.UPDATE_READER_LOCAL_PROGRESS, {
                            appId: s.appId,
                            chapterUid: a.chapterUid,
                            chapterOffset: s.co,
                            updateTime: parseInt((new Date).getTime() / 1e3),
                            summary: s.sm
                        }),
                        O("enterBookRead", (new Date).toLocaleString(), "params=" + (0,
                        p.default)(s)),
                        (0,
                        v.default)("/web/book/read", s, function(e) {
                            return e
                        }, function(e) {
                            O("Error in enterBookRead", e);
                            var t = I.get(e, "errCode", 0);
                            return -2010 === t || -2012 === t || -2013 === t ? {
                                sessionTimeout: 1
                            } : e
                        })
                    }
                    O("enterBookRead", "return bcs of bookInfoError")
                }),
                (0,
                n.default)(t, E.FETCH_READER_BOOK_READ, function(e, r) {
                    var n = e.dispatch
                      , t = e.commit
                      , o = e.state;
                    if (!o.isBookInfoError) {
                        var i = I.get(r, "retryCount", 0)
                          , a = o.currentChapter
                          , s = o.token
                          , c = (new Date).getTime()
                          , l = o.startReadingTime
                          , u = 0 === l ? 0 : Math.max(0, parseInt((c - l) / 1e3))
                          , d = parseInt(1e3 * Math.random())
                          , h = {
                            appId: F(navigator.userAgent),
                            b: A.e(o.bookId),
                            c: A.e(a.chapterUid),
                            ci: a.chapterIdx,
                            co: 0,
                            sm: "",
                            rt: u,
                            ts: c,
                            rn: d,
                            sg: (0,
                            C.sha256)("" + c + d + s),
                            ct: parseInt((new Date).getTime() / 1e3),
                            ps: o.psvts,
                            pc: o.pclts
                        };
                        if (R.default.isSupportReaderProgress(o.bookInfo)) {
                            var f = I.get(r, "progressData", null);
                            null !== f && "object" === (void 0 === f ? "undefined" : (0,
                            g.default)(f)) && (h.co = f.offset,
                            h.sm = f.content.substr(0, 20))
                        }
                        return h.s = H(U(h)),
                        t(b.UPDATE_READER_LOCAL_PROGRESS, {
                            appId: h.appId,
                            chapterUid: a.chapterUid,
                            chapterOffset: h.co,
                            updateTime: parseInt(c / 1e3),
                            summary: h.sm
                        }),
                        O("reportTime", "reportTime at", (new Date).toLocaleString(), "duration=" + u + "s", "params=" + (0,
                        p.default)(h)),
                        (0,
                        v.default)("/web/book/read", h, function(e) {
                            return t(b.UPDATE_READER_START_READING_TIME),
                            e.data
                        }, function(e) {
                            O("Error in bookRead", e);
                            var t = I.get(e, "errCode", 0);
                            return -2010 === t || -2012 === t || -2013 === t ? {
                                sessionTimeout: 1
                            } : 0 < i && -2054 === t ? n(E.FETCH_READER_GET_CONFIG).then(function() {
                                return n(E.FETCH_READER_BOOK_READ, (0,
                                _.default)(r, {
                                    retryCount: i - 1
                                }))
                            }) : e
                        })
                    }
                    O("bookRead", "return bcs of bookInfoError")
                }),
                (0,
                n.default)(t, E.READER_MARK_PAUSE, function(e) {
                    (0,
                    e.commit)(b.UPDATE_READER_PAUSE_TIME),
                    O("hidden/idle at", (new Date).toLocaleString())
                }),
                (0,
                n.default)(t, E.READER_MARK_ACTIVE, function(e) {
                    var t = e.commit
                      , r = e.state;
                    t(b.UPDATE_READER_ACTIVE_TIME);
                    var n = 0;
                    r.activeTime > r.pauseTime && 0 < r.pauseTime && 0 < r.startReadingTime && (n = r.activeTime - r.pauseTime,
                    t(b.UPDATE_READER_START_READING_TIME, r.startReadingTime + n));
                    var o = 3e4 < (new Date).getTime() - r.startReadingTime;
                    return O("active at", new Date(r.activeTime).toLocaleString(), ", ignored duration=" + parseInt(n / 1e3) + "s", ", isNeedForceReport=" + o),
                    o
                }),
                (0,
                n.default)(t, E.UPDATE_READER_LOCAL_LAST_CHAPTER, function(e) {
                    var t = e.state;
                    if (t.bookId && t.bookInfo && 0 !== t.chapterInfos.length && t.isInShelf && R.default.isBuyUnitChapter(t.bookInfo)) {
                        var r = t.bookId
                          , n = t.chapterInfos;
                        if (r && 0 < n.length) {
                            var o = a.default.getBookLastChaptersOperator(I.get(this.user, "vid"))
                              , i = I.get(n[n.length - 1], "chapterIdx", 0);
                            o.set(r, i),
                            o.save()
                        }
                    }
                }),
                (0,
                n.default)(t, E.FETCH_READER_BALANCE, function(e) {
                    var t = e.commit;
                    return (0,
                    v.default)("/web/pay/balance", {
                        pf: "ios_html"
                    }, function(e) {
                        return t(b.UPDATE_READER_BALANCE, e.data),
                        e
                    }, function(e) {
                        return O("Error in fetchReaderBalance", e),
                        e
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_BUY_BOOK, function(e, t) {
                    var r = e.state
                      , n = t.pf
                      , o = t.price
                      , i = t.isMCard
                      , a = {
                        b: A.e(r.bookId),
                        pt: r.bookInfo.payType,
                        pf: n,
                        pr: o,
                        mm: i ? 1 : 0,
                        ct: parseInt((new Date).getTime() / 1e3),
                        ps: r.psvts,
                        pc: r.pclts
                    };
                    return a.s = H(U(a)),
                    (0,
                    v.default)("/web/pay/buyBook", a, function(e) {
                        return e.data
                    }, function(e) {
                        return O("Error in fetchReaderBuyBook", e),
                        e
                    })
                }),
                (0,
                n.default)(t, E.FETCH_READER_BUY_CHAPTERS, function(e, t) {
                    var r = e.state
                      , n = t.pf
                      , o = t.chapterIds
                      , i = t.totalPrice
                      , a = t.isMCard
                      , s = t.isAutoPay
                      , c = {
                        b: A.e(r.bookId),
                        pt: r.bookInfo.payType,
                        pf: n,
                        ci: o,
                        tp: i,
                        mm: a ? 1 : 0,
                        ap: s ? "1" : "0",
                        ct: parseInt((new Date).getTime() / 1e3),
                        ps: r.psvts,
                        pc: r.pclts
                    };
                    return c.s = H(U(c)),
                    (0,
                    v.default)("/web/pay/buyChapters", c, function(e) {
                        return e.data
                    }, function(e) {
                        return O("Error in fetchReaderBuyChapters", e),
                        e
                    })
                }),
                t)
            }
        }
        ;
        var C = r(631)
          , m = k(r(187))
          , v = k(r(125))
          , o = k(r(33))
          , E = c(r(57))
          , b = c(r(124))
          , s = k(r(40))
          , R = k(r(185))
          , i = k(r(548))
          , T = k(r(504))
          , a = k(r(61));
        function c(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e,
            t
        }
        function k(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var I = r(25)
          , S = r(128)
          , A = r(63)
          , D = r(633)
          , y = r(635)
          , w = r(8)
          , P = "wr_theme"
          , B = "white"
          , N = "dark"
          , L = N;
        function O() {
            var e;
            w.isEnvServer,
            w.inDevelopment() && (e = console).log.apply(e, ["[readerLog]"].concat(Array.prototype.slice.call(arguments)))
        }
        function x(e, t) {
            if (!e || !t)
                return [];
            var r = t.map(function(e) {
                return {
                    chapterUid: e.chapterUid,
                    chapterIdx: e.chapterIdx,
                    title: s.default.replaceBlankToSpace(e.title).trim(),
                    paid: e.paid || 0,
                    price: e.price || 0,
                    level: e.level || 1,
                    updateTime: e.updateTime
                }
            });
            return (R.default.isBuyUnitWholeBook(e) || R.default.isEPub(e)) && (r = r.filter(function(e) {
                return "封面" !== e.title
            })),
            r
        }
        function M(e, t) {
            for (var r = 1 < arguments.length && void 0 !== t ? t : 21, n = "", o = 0; o < e.length; o += 2)
                n += String.fromCharCode(parseInt(e.slice(o, o + 2), r));
            return n
        }
        function H(e) {
            for (var t = 352654597, r = t, n = e.length, o = n - 1; 0 < o; o -= 2)
                t = 2147483647 & (t ^ e.charCodeAt(o) << (n - o) % 30),
                r = 2147483647 & (r ^ e.charCodeAt(o - 1) << o % 30);
            return (t + r).toString(16).toLowerCase()
        }
        function U(e, t) {
            for (var r = 1 < arguments.length && void 0 !== t ? t : [], n = "", o = 0 === r.length, i = (0,
            u.default)(e).sort(), a = 0; a < i.length; a++) {
                var s = i[a];
                if (o || -1 !== r.indexOf(s)) {
                    var c = e[s];
                    n += s + "=" + encodeURIComponent(c),
                    n += "&"
                }
            }
            return 0 < n.length && "&" === n.charAt(n.length - 1) && (n = n.slice(0, n.length - 1)),
            n
        }
        function F(e) {
            for (var t = "", r = e.split(" "), n = 0, o = Math.min(r.length, 12); n < o; n++)
                t += r[n].length % 10;
            var i = function(e) {
                for (var t = 0, r = 0, n = e.length; r < n; r++) {
                    t = 131 * t + e.charCodeAt(r) & 2147483647
                }
                return t
            }(e);
            return 16 < i.length && (i = i.slice(0, 16)),
            "wb" + t + "h" + i
        }
    },
    633: function(e, t, r) {
        "use strict";
        var n = r(634).Base64
          , o = r(276);
        function i(e) {
            if (!e || "string" != typeof e || e.length <= 1)
                return "";
            var t = e.slice(1);
            return t = function(u) {
                var e = function() {
                    var e = u.length;
                    if (e < 4)
                        return [];
                    if (e < 11)
                        return [0, 2];
                    for (var t = Math.min(4, Math.ceil(e / 10)), r = "", n = e - 1; e - 1 - t < n; n--) {
                        var o = u.charCodeAt(n);
                        r += parseInt(o.toString(2), 4)
                    }
                    for (var i = e - t - 2, a = i.toString().length, s = [], c = 0; s.length < 10 && c + a < r.length; c += a) {
                        var l = parseInt(r.slice(c, c + a));
                        s.push(l % i),
                        l = parseInt(r.slice(c + 1, c + 1 + a)),
                        s.push(l % i)
                    }
                    return s
                }();
                return function(e, t) {
                    for (var r = e.split(""), n = t.length - 1; 0 <= n; n -= 2)
                        for (var o = 1; 0 <= o; o--) {
                            var i = r[t[n] + o];
                            r[t[n] + o] = r[t[n - 1] + o],
                            r[t[n - 1] + o] = i
                        }
                    return r.join("")
                }(u, e)
            }(t),
            t = n.decode(t)
        }
        e.exports = {
            chk: function(e) {
                if (!e || e.length <= 32)
                    return e;
                var t = e.slice(0, 32)
                  , r = e.slice(32);
                return t === o.createHash("md5").update(r).digest("hex").toUpperCase() ? r : ""
            },
            dT: function(e) {
                return e && 0 !== e.length ? i(e) : ""
            },
            dH: function(e) {
                return e && 0 !== e.length ? i(e) : ""
            },
            dS: function(e) {
                return e && 0 !== e.length ? i(e) : ""
            }
        }
    },
    635: function(e, t, r) {
        "use strict";
        var n, o = r(269), R = (n = o) && n.__esModule ? n : {
            default: n
        };
        var i = r(272)
          , a = void 0
          , s = []
          , b = [];
        function c(e) {
            if (!e || "string" != typeof e)
                return "";
            for (var t = e.split(/\n/), r = [], n = -1, o = 0; o < t.length; o++) {
                var i = t[o]
                  , a = i.trim();
                n += 1,
                0 < a.length && r.push({
                    content: a,
                    offset: n + i.indexOf(a)
                }),
                n += i.length
            }
            for (var s = "", c = 0; c < r.length; c++) {
                var l = r[c];
                s += '<p class="chapterContent_p' + (c === r.length - 1 ? " last" : "") + '" data-wr-co="' + l.offset + '">' + k(l.content, 0, l.content.length, l.offset) + "</p>"
            }
            return s
        }
        function T(e, t, r) {
            for (var n = e.slice(t, r), o = new RegExp("[0-9]+","g"), i = 0, a = o.exec(n), s = []; a; ) {
                if (0 < a.length) {
                    for (var c = a.index, l = a[0].length; i < c; ) {
                        var u = T(e, t + i, t + c);
                        s.push.apply(s, (0,
                        R.default)(u)),
                        i += u.reduce(function(e, t) {
                            return e + t
                        })
                    }
                    s.push(l),
                    i = c + l
                }
                a = o.exec(n)
            }
            if (0 < s.length)
                return s;
            for (var d = new RegExp("[A-Za-z]+","g"), h = 0, f = d.exec(n), p = []; f; ) {
                if (0 < f.length) {
                    var g = f[0].length
                      , _ = f.index
                      , C = _
                      , m = g;
                    for (h <= _ - 1 && "&" === n.charAt(_ - 1) && ";" === n.charAt(_ + g) && (C = _ - 1,
                    m = g + 2); h < C; ) {
                        var v = T(e, t + h, t + C);
                        p.push.apply(p, (0,
                        R.default)(v)),
                        h += v.reduce(function(e, t) {
                            return e + t
                        })
                    }
                    p.push(m),
                    h = C + m
                }
                f = d.exec(n)
            }
            if (0 < p.length)
                return p;
            for (var E = new Array(r - t), b = 0; b < E.length; b++)
                E[b] = 1;
            return E
        }
        function k(t, r, e, n) {
            var o = t.slice(r, e);
            if (function(e) {
                return 0 === (e = e.trim().replace(/&nbsp;/g, "")).length || l.test(e)
            }(o))
                return o;
            for (var i = "", a = r; a < e; ) {
                T(t, a, e).forEach(function(e) {
                    i += '<span data-wr-id="layout" data-wr-co="%%OFFSET%%">'.replace("%%OFFSET%%", n + a - r) + t.slice(a, a + e) + "</span>",
                    a += e
                })
            }
            return i
        }
        var l = /^\s*$/;
        e.exports = {
            parse: function(e) {
                if (-1 === e.indexOf("<body"))
                    return c(e);
                a = a || function() {
                    var e = ["class"]
                      , t = {
                        whiteList: {
                            body: e.concat(["class", "style"]),
                            a: e.concat(["target", "href", "title"]),
                            abbr: e.concat(["title"]),
                            address: e,
                            area: e.concat(["shape", "coords", "href", "alt"]),
                            article: e,
                            aside: e,
                            audio: e.concat(["autoplay", "controls", "loop", "preload", "src"]),
                            b: e,
                            bdi: e.concat(["dir"]),
                            bdo: e.concat(["dir"]),
                            big: e,
                            blockquote: e.concat(["cite"]),
                            br: e,
                            caption: e,
                            center: e,
                            cite: e,
                            code: e,
                            col: e.concat(["align", "valign", "span", "width"]),
                            colgroup: e.concat(["align", "valign", "span", "width"]),
                            dd: e,
                            del: e.concat(["datetime"]),
                            details: e.concat(["open"]),
                            div: e,
                            dl: e,
                            dt: e,
                            em: e,
                            font: e.concat(["color", "size", "face"]),
                            footer: e,
                            h1: e,
                            h2: e,
                            h3: e,
                            h4: e,
                            h5: e,
                            h6: e,
                            header: e,
                            hr: e,
                            i: e,
                            img: e.concat(["src", "alt", "title", "width", "height"]),
                            ins: e.concat(["datetime"]),
                            li: e,
                            mark: e,
                            nav: e,
                            ol: e,
                            p: e,
                            pre: e,
                            s: e,
                            section: e,
                            small: e,
                            span: e,
                            sub: e,
                            sup: e,
                            strong: e,
                            table: e.concat(["width", "border", "align", "valign"]),
                            tbody: e.concat(["align", "valign"]),
                            td: e.concat(["width", "rowspan", "colspan", "align", "valign"]),
                            tfoot: e.concat(["align", "valign"]),
                            th: e.concat(["width", "rowspan", "colspan", "align", "valign"]),
                            thead: e.concat(["align", "valign"]),
                            tr: e.concat(["rowspan", "align", "valign"]),
                            tt: e,
                            u: e,
                            ul: e,
                            video: e.concat(["autoplay", "controls", "loop", "preload", "src", "height", "width"])
                        },
                        onTag: function(e, t, r) {
                            r.isWhite && s.push({
                                tag: e,
                                srcHtml: t,
                                isClosing: r.isClosing,
                                pos: r.position,
                                srcPos: r.sourcePosition
                            })
                        },
                        onIgnoreTag: function(e, t, r) {
                            return r.isClosing || console.log("[chantlog] readerHtmlParser-onIgnoreTag", t),
                            ""
                        },
                        onIgnoreTagAttr: function(e, t, r) {
                            switch (t) {
                            case "style":
                                return 'style="' + r + '"'
                            }
                        },
                        safeAttrValue: function(e, t, r, n) {
                            var o = i.safeAttrValue(e, t, r, n);
                            return "video" === e && "src" === t && "" === o && 0 === r.indexOf("../") ? r : o
                        }
                    };
                    return new i.FilterXSS(t)
                }();
                var t = function(e) {
                    var t = {
                        allContentMerged: "",
                        contentLengthAndIndex: []
                    };
                    if (!e || 0 === e.length)
                        return t;
                    for (var r = /<body[^>]*>\s*([\s\S]*?)\s*<\/body>/g, n = r.exec(e); n; ) {
                        if (n && 2 === n.length) {
                            var o = n[0]
                              , i = n.index;
                            t.allContentMerged = t.allContentMerged + o,
                            t.contentLengthAndIndex.push({
                                contentLength: o.length,
                                indexInFullHtml: i
                            })
                        }
                        n = r.exec(e)
                    }
                    return t
                }(e);
                return e = t.allContentMerged,
                b = t.contentLengthAndIndex,
                s.length = 0,
                e = (e = function(g, _) {
                    if (!g || 0 === g.length)
                        return g;
                    for (var C = "", m = 0, v = 0, E = 0, e = function() {
                        var t = _[E];
                        if (t.isClosing) {
                            v = g.indexOf(">", t.pos) + 1,
                            C += g.slice(m, v),
                            m = v;
                            var e = E + 1 < _.length ? _[E + 1] : void 0;
                            if (e) {
                                var r = e.pos
                                  , n = m + t.srcHtml.length;
                                C += k(g, m, r, n),
                                m = r
                            }
                            E++
                        } else {
                            var o = t.pos + 1 + t.tag.length;
                            C += g.slice(m, o);
                            for (var i = t.srcPos, a = 0, s = 0; s < b.length; s++) {
                                var c = b[s];
                                if (t.srcPos >= a && t.srcPos < a + c.contentLength) {
                                    i += c.indexInFullHtml - a;
                                    break
                                }
                                a += c.contentLength
                            }
                            C += ' data-wr-co="' + i + '"',
                            m = o;
                            var l = g.indexOf(">", t.pos) + 1;
                            if (C += g.slice(m, l),
                            m = l,
                            "pre" === t.tag) {
                                var u = function(e, t, r) {
                                    if (r >= e.length)
                                        return -1;
                                    for (var n = r; n < e.length; n++)
                                        if (t(e[n]))
                                            return n;
                                    return -1
                                }(_, function(e) {
                                    return e.tag === t.tag && e.isClosing
                                }, E);
                                if (-1 !== u) {
                                    var d = _[u];
                                    C += g.slice(m, d.pos),
                                    m = d.pos,
                                    E = u + 1
                                } else
                                    E++
                            } else {
                                var h = E + 1 < _.length ? _[E + 1] : void 0;
                                if (h) {
                                    var f = h.pos
                                      , p = i + t.srcHtml.length;
                                    C += k(g, m, f, p),
                                    m = f
                                }
                                E++
                            }
                        }
                    }; E < _.length; )
                        e();
                    return m < g.length && (C += g.slice(m)),
                    C
                }(e = a.process(e), s)).replace("<body", '<div data-wr-bd="1"').replace("</body>", "</div>")
            },
            parseTxt: c
        }
    },
    636: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(702)
          , o = r(549);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    637: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(703)
          , o = r(551);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(638);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    638: function(e, t, r) {
        "use strict";
        var n = r(553);
        r.n(n).a
    },
    639: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(704)
          , o = r(554);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(640);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    640: function(e, t, r) {
        "use strict";
        var n = r(556);
        r.n(n).a
    },
    641: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(701)
          , o = r(557);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(645);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    642: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(707)
          , o = r(559);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(643);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    643: function(e, t, r) {
        "use strict";
        var n = r(561);
        r.n(n).a
    },
    645: function(e, t, r) {
        "use strict";
        var n = r(562);
        r.n(n).a
    },
    646: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(700)
          , o = r(563);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(647);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    647: function(e, t, r) {
        "use strict";
        var n = r(565);
        r.n(n).a
    },
    648: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(698)
          , o = r(566);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(649);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    649: function(e, t, r) {
        "use strict";
        var n = r(568);
        r.n(n).a
    },
    650: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(696)
          , o = r(569);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(651);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    651: function(e, t, r) {
        "use strict";
        var n = r(571);
        r.n(n).a
    },
    652: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(695)
          , o = r(572);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(653);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    653: function(e, t, r) {
        "use strict";
        var n = r(574);
        r.n(n).a
    },
    654: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(694)
          , o = r(575);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(655);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    655: function(e, t, r) {
        "use strict";
        var n = r(577);
        r.n(n).a
    },
    656: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(693)
          , o = r(578);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(657);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    657: function(e, t, r) {
        "use strict";
        var n = r(580);
        r.n(n).a
    },
    658: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(r(32))
          , o = i(r(659));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function() {
            var t = new (n.default.extend(o.default))({});
            n.default.prototype.$showReceiveMCardSuccessDialog = function(e) {
                t.$el && t.$el.parentNode || (t.$mount(document.createElement("div")),
                document.body.appendChild(t.$el)),
                t.showDialog(e),
                t.beginToLoadQrCode()
            }
        }
    },
    659: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(705)
          , o = r(581);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(660);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    660: function(e, t, r) {
        "use strict";
        var n = r(583);
        r.n(n).a
    },
    661: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(692)
          , o = r(584);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(662);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    662: function(e, t, r) {
        "use strict";
        var n = r(586);
        r.n(n).a
    },
    663: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(690)
          , o = r(587);
        for (var i in o)
            "default" !== i && function(e) {
                r.d(t, e, function() {
                    return o[e]
                })
            }(i);
        r(664);
        var a = r(4)
          , s = Object(a.a)(o.default, n.a, n.b, !1, null, null, null);
        t.default = s.exports
    },
    664: function(e, t, r) {
        "use strict";
        var n = r(589);
        r.n(n).a
    },
    665: function(e, t, r) {
        "use strict";
        var n, o = r(666), m = (n = o) && n.__esModule ? n : {
            default: n
        };
        var l = r(8)
          , v = r(25);
        function E(e) {
            var t = e.node
              , r = e.nodeName;
            return l.inDevelopment() ? !("span" !== r || !t.getAttribute("data-wr-footernote")) || ("img" === r || "pre" === r || "video" === r || "audio" === r || "table" === r || "ul" === r || "ol" === r || "hr" === r) : !("span" !== r || !t.getAttribute("data-wr-footernote")) || ("img" === r || "pre" === r || "video" === r || "hr" === r)
        }
        function b() {
            return "wr" + Math.random().toString(36).slice(2)
        }
        function R(e) {
            return window.getComputedStyle(e, null)
        }
        function T(e, t, r, n, o) {
            var i = function(e) {
                return {
                    node: e,
                    nodeName: e.nodeName.toLowerCase(),
                    nodeType: e.nodeType
                }
            }(e);
            if (function(e) {
                return "style" !== e.nodeName && e.nodeType === Node.ELEMENT_NODE
            }(i)) {
                var a = function(e) {
                    var t = e.nodeName
                      , r = e.node;
                    if ("style" === t || "hr" === t)
                        return !1;
                    if ("span" === t && "layout" === r.getAttribute("data-wr-id"))
                        return !1;
                    var n = r.getAttribute("id");
                    return "preRenderContainer" !== n && "preRenderContent" !== n
                }(i)
                  , s = function(e) {
                    return "div" === e.nodeName && e.node.hasAttribute("data-wr-bd")
                }(i);
                if (a || s) {
                    var c = function(e, t, r) {
                        var n = {}
                          , o = e.node
                          , i = R(o)
                          , a = m.default.getDecorationTagStyle(o, i);
                        if (v.isEmpty(a) && !t)
                            return null;
                        var s = t ? o.classList.toString() : ""
                          , c = a.styleText || ""
                          , l = a.className || "";
                        r.customStyle.push(c);
                        var u = m.default.style.getLeft(e) + m.default.style.getTop(e) + m.default.style.getWidth(e) + m.default.style.getHeight(e);
                        if (t) {
                            var d = o.getAttribute("style");
                            l += " wr_readerBackground_opacity",
                            d && 0 < d.length && (u += d.replace(/\.\.\/images\/(.*?\.(png|jpg|jpeg|gif))/gi, "https://res.weread.qq.com/wrepub/web/" + I + "/$1")),
                            u += "left:" + (parseInt(m.default.style.getNodeOffsetLeft(e)) - 20) + "px;width:" + (parseInt(m.default.style.getNodeWidth(e)) + 40) + "px;"
                        }
                        return u = u.replace(/"/gi, "'"),
                        n.id = b(),
                        n.offset = o.getAttribute("data-wr-co"),
                        n.html = '<div class="wr_decoration' + (0 < s.length ? " " + s : "") + (0 < l.length ? " " + l : "") + '" style="' + u + '"></div>',
                        n.text = "",
                        n.rect = {
                            x: m.default.style.getNodeOffsetLeft(e),
                            y: m.default.style.getNodeOffsetTop(e),
                            w: m.default.style.getNodeWidth(e),
                            h: m.default.style.getNodeHeight(e)
                        },
                        n
                    }(i, s, r);
                    c && r.decoration.push(c)
                }
                if (function(e) {
                    var t = e.nodeName;
                    return ("span" === t || "a" === t) && "layout" === e.node.getAttribute("data-wr-id")
                }(i)) {
                    var l = +new Date
                      , u = function(e, t, r, n) {
                        var o = {}
                          , i = e.node
                          , a = i.innerText || ""
                          , s = i.outerHTML
                          , c = function(e, t) {
                            if (e && e.text && 1 === e.text.length && 1 === t.length) {
                                var r = t.charCodeAt(0);
                                if (19968 <= r && r <= 40869) {
                                    var n = e.text.charCodeAt(0);
                                    if (19968 <= n && n <= 40869)
                                        return !0
                                }
                            }
                            return !1
                        }(n, a)
                          , l = +new Date
                          , u = void 0
                          , d = void 0;
                        if (c)
                            d = n.className || "",
                            S && D["1-reuseCount"]++;
                        else {
                            var h = R(i);
                            S && (u = +new Date,
                            D["0-dom.getComputedStyle"] += u - l,
                            l = u);
                            var f = m.default.getCustomTagStyle(e, h, r);
                            S && (u = +new Date,
                            D["1-styleManager.getCustomTagStyle"] += u - l,
                            l = u),
                            d = f.className || "";
                            var p = f.styleText || "";
                            0 < p.length && -1 === k.indexOf(d) && t.customStyle.push(p),
                            0 < d.length && k.push(d),
                            S && (u = +new Date,
                            D["3-customClassNames"] += u - l,
                            l = u)
                        }
                        o.className = d;
                        var g = m.default.style.getLeft(e) + m.default.style.getTop(e) + m.default.style.getWidth(e);
                        S && (u = +new Date,
                        D["2-styleManager.style.getLeft/getTop/getWidth"] += u - l,
                        l = u),
                        s = s.replace(/data-wr-co="([0-9]*)"/, ""),
                        S && (u = +new Date,
                        D["4-html.replace(data-wr-co)"] += u - l,
                        l = u),
                        o.offset = RegExp.$1 || 0;
                        var _ = b();
                        o.id = _,
                        S && (u = +new Date,
                        D["5-getRandomId"] += u - l,
                        l = u);
                        var C = 'data-wr-id="' + _ + '" class="absolute' + (0 < d.length ? " " + d : "") + '" style="' + g + '"';
                        return s = s.replace(/data-wr-id="layout"/, C),
                        S && (u = +new Date,
                        D["6-html.replace(data-wr-id)"] += u - l,
                        l = u),
                        o.html = s,
                        o.text = a,
                        S && (u = +new Date,
                        D["7-dom.getBoundingClientRect"] += u - l,
                        l = u),
                        o.rect = {
                            x: i.offsetLeft,
                            y: i.offsetTop,
                            w: m.default.style.getNodeWidth(e),
                            h: m.default.style.getNodeHeight(e)
                        },
                        o
                    }(i, r, n, o);
                    if (S) {
                        var d = +new Date;
                        A += d - l
                    }
                    if (u)
                        if (r.content.push(u),
                        r.content.length < Math.floor(t / 2))
                            r.randomHtml.push(u.html);
                        else {
                            var h = Math.floor(Math.random() * r.content.length);
                            r.randomHtml.splice(h, 0, u.html)
                        }
                    return u
                }
                if (!E(i) && e.childNodes)
                    for (var f = e.childNodes || [], p = null, g = 0, _ = f.length; g < _; g++) {
                        p = T(f[g], t, r, n, p)
                    }
                else {
                    var C = function(e) {
                        var t = {};
                        if (E(e)) {
                            var r = e.node
                              , n = m.default.getOtherTagStyleText(e)
                              , o = r.outerHTML;
                            o = o.replace(/data-wr-co="([0-9]*)"/, ""),
                            t.offset = RegExp.$1 || 0,
                            t.id = b();
                            var i = e.nodeName
                              , a = o.indexOf("<" + i)
                              , s = o.indexOf("class=")
                              , c = o.indexOf(">")
                              , l = "img" === i ? "absolute wr_readerImage_opacity" : "absolute";
                            if ("video" === i)
                                o = '<div class="absolute" style="' + n + '">' + (o = o.replace(/class="([^"]+?)"/i, 'class="$1" style="" data-wr-id="' + t.id + '" ')) + '<span class="wr_video_playButton">点击播放</span></div>';
                            else if (a < s && s < c)
                                o = o.replace(/class="([^"]+?)"/i, 'class="$1 ' + l + '" style="' + n + '" data-wr-id="' + t.id + '" ');
                            else {
                                var u = new RegExp("<" + i,"i");
                                o = o.replace(u, '$& class="' + l + '" style="' + n + '" data-wr-id="' + t.id + '" ')
                            }
                            t.html = o,
                            t.text = "";
                            var d = r.getBoundingClientRect();
                            return t.rect = {
                                x: r.offsetLeft,
                                y: r.offsetTop,
                                w: d.width,
                                h: d.height
                            },
                            t
                        }
                        return null
                    }(i);
                    r && (r.content.push(C),
                    r.randomHtml.push(C.html))
                }
            }
        }
        var k = []
          , I = void 0
          , S = l.inDevelopment()
          , A = 0
          , D = {
            "0-dom.getComputedStyle": 0,
            "1-styleManager.getCustomTagStyle": 0,
            "1-reuseCount": 0,
            "2-styleManager.style.getLeft/getTop/getWidth": 0,
            "3-customClassNames": 0,
            "4-html.replace(data-wr-co)": 0,
            "5-getRandomId": 0,
            "6-html.replace(data-wr-id)": 0,
            "7-dom.getBoundingClientRect": 0
        };
        e.exports = {
            collect: function(e) {
                var t = {
                    rootHeight: 0,
                    randomHtml: [],
                    content: [],
                    decoration: [],
                    customStyle: []
                };
                if (!e)
                    return t;
                I = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "fake";
                var r = e.innerHTML || ""
                  , n = e.getBoundingClientRect() || {}
                  , o = r.match(/data-wr-id/gi)
                  , i = o ? o.length : 0;
                l.inDevelopment() && console.log("[zhoonlog🐭🐭🐭🐭🐭] estimate count =", i, "rootHeight =", n.height),
                k = [],
                t.rootHeight = n.height;
                var a = +new Date;
                if (S)
                    for (var s in A = 0,
                    D)
                        D[s] = 0;
                if (T(e, i, t, document.body.classList.contains("wr_whiteTheme"), null),
                S) {
                    var c = +new Date;
                    console.log("渲染遍历 DOM 时间 = ", c - a, "毫秒", "timeForCustomNode=", A, "ts=", D)
                }
                return t
            }
        }
    },
    666: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = o(r(58))
          , n = o(r(21));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = r(25)
          , p = r(8)
          , g = new n.default;
        function d() {
            return "ccn-" + Math.random().toString(36).slice(2)
        }
        function i(e) {
            if (!e || -1 === e.indexOf("#") || 4 !== e.length && 7 !== e.length)
                return null;
            var t = v[e];
            if (t)
                return t;
            if (4 === e.length) {
                for (var r = "#", n = 1; n < 4; n += 1)
                    r += e.slice(n, n + 1).concat(e.slice(n, n + 1));
                e = r
            }
            return t = {
                r: parseInt(e.substring(1, 3), 16),
                g: parseInt(e.substring(3, 5), 16),
                b: parseInt(e.substring(5, 7), 16)
            },
            v[e] = t
        }
        function h(e) {
            var t = e.match(/\d{1,3}/g);
            if (!t || t.length < 3)
                return null;
            var r = v[e];
            if (r)
                return r;
            var n = t[0] / 255
              , o = t[1] / 255
              , i = t[2] / 255
              , a = Math.max(n, o, i)
              , s = Math.min(n, o, i)
              , c = void 0
              , l = void 0
              , u = (a + s) / 2;
            if (a === s)
                c = l = 0;
            else {
                var d = a - s;
                switch (l = .5 < u ? d / (2 - a - s) : d / (a + s),
                a) {
                case n:
                    c = (o - i) / d + (o < i ? 6 : 0);
                    break;
                case o:
                    c = (i - n) / d + 2;
                    break;
                case i:
                    c = (n - o) / d + 4
                }
                c /= 6
            }
            return r = {
                h: c,
                s: l,
                l: u
            },
            v[e] = r
        }
        function _(e, t, r) {
            var n = "hsl:" + e + "-" + t + "-" + r
              , o = v[n];
            if (o)
                return o;
            var i = void 0
              , a = void 0
              , s = void 0;
            if (0 === t)
                i = a = s = r;
            else {
                var c = r < .5 ? r * (1 + t) : r + t - r * t
                  , l = 2 * r - c;
                i = C(l, c, e + 1 / 3),
                a = C(l, c, e),
                s = C(l, c, e - 1 / 3)
            }
            return o = {
                r: Math.floor(255 * i),
                g: Math.floor(255 * a),
                b: Math.floor(255 * s)
            },
            v[n] = o
        }
        function C(e, t, r) {
            return r < 0 && (r += 1),
            1 < r && (r -= 1),
            r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
        }
        function a(e) {
            var t = e.boundingClientRect;
            return void 0 === t && (t = e.node.getBoundingClientRect(),
            e.boundingClientRect = t),
            t
        }
        var m = {}
          , v = {}
          , s = i("#D0D3D8")
          , c = i("#0D141E")
          , E = "rgb(" + s.r + ", " + s.g + ", " + s.b + ")"
          , b = "rgb(" + c.r + ", " + c.g + ", " + c.b + ")"
          , R = {
            getNodeOffsetTop: function(e) {
                var t = e.nodeOffsetTop;
                void 0 === t && (t = e.node.offsetTop,
                e.nodeOffsetTop = t);
                return t
            },
            getNodeOffsetLeft: function(e) {
                var t = e.nodeOffsetLeft;
                void 0 === t && (t = e.node.offsetLeft,
                e.nodeOffsetLeft = t);
                return t
            },
            getNodeWidth: function(e) {
                var t = e.nodeWidth;
                void 0 === t && (t = a(e).width,
                e.nodeWidth = t);
                return t
            },
            getNodeHeight: function(e) {
                var t = e.nodeHeight;
                void 0 === t && (t = a(e).height,
                e.nodeHeight = t);
                return t
            },
            getTop: function(e) {
                return "top:" + this.getNodeOffsetTop(e) + "px;"
            },
            getLeft: function(e) {
                return "left:" + this.getNodeOffsetLeft(e) + "px;"
            },
            getWidth: function(e) {
                return "width:" + this.getNodeWidth(e) + "px;"
            },
            getHeight: function(e) {
                return "height:" + this.getNodeHeight(e) + "px;"
            },
            getLineHeight: function(e) {
                return "line-height:" + Math.ceil(e.offsetHeight) + "px;"
            },
            getComputedWidth: function(e) {
                return "width:" + e.width + ";"
            },
            getComputedHeight: function(e) {
                return "height:" + e.height + ";"
            },
            getMaxWidth: function(e) {
                return "max-width:" + e.maxWidth + ";"
            },
            getColor: function(e) {
                return "color:" + e.color + ";"
            },
            getFont: function(e) {
                var t = e.font.replace(/"/gi, "'");
                if (0 < t.length)
                    return "font:" + t + ";";
                var r = e.fontSize
                  , n = e.fontFamily
                  , o = e.fontWeight
                  , i = e.fontStyle
                  , a = [];
                return 0 < r.length && a.push("font-size:" + r + ";"),
                0 < n.length && a.push("font-family:" + n + ";"),
                0 < o.length && a.push("font-weight:" + o + ";"),
                0 < i.length && a.push("font-style:" + i + ";"),
                a.join("")
            },
            getBorder: function(o, e) {
                var t = 1 < arguments.length && void 0 !== e && e
                  , r = []
                  , n = {};
                function i(e) {
                    return 0 < e.length && !f.startsWith(e, "0px") && -1 === e.indexOf("none")
                }
                function a(e) {
                    var t = o[e + "Width"]
                      , r = o[e + "Style"]
                      , n = o[e + "Color"];
                    return i(t) && i(r) && i(n) ? t + " " + r + " " + n : ""
                }
                var s = "Firefox" === g.getBrowser()
                  , c = s ? a("border") : o.border;
                if (i(c))
                    r.push("border:" + c + ";"),
                    n.border = c;
                else {
                    var l = s ? a("borderTop") : o.borderTop
                      , u = s ? a("borderRight") : o.borderRight
                      , d = s ? a("borderBottom") : o.borderBottom
                      , h = s ? a("borderLeft") : o.borderLeft;
                    i(l) && (r.push("border-top:" + l + ";"),
                    n["border-top"] = l),
                    i(u) && (r.push("border-right:" + u + ";"),
                    n["border-right"] = u),
                    i(d) && (r.push("border-bottom:" + d + ";"),
                    n["border-bottom"] = d),
                    i(h) && (r.push("border-left:" + h + ";"),
                    n["border-left"] = h)
                }
                return t ? n : r.join("")
            },
            getBorderWidth: function(e) {
                var t = e.borderWidth;
                return 0 < t.length && "0px" !== t ? t : ""
            },
            getRadius: function(e, t) {
                var r = 1 < arguments.length && void 0 !== t && t
                  , n = e.borderRadius;
                return 0 < n.length && "0px" !== n ? r ? {
                    "border-radius": n
                } : "border-radius:" + n + ";" : ""
            },
            getBackground: function(e, t) {
                var r = 1 < arguments.length && void 0 !== t && t
                  , n = []
                  , o = {}
                  , i = e.backgroundColor;
                return 0 < i.length && -1 === i.indexOf("rgba(0, 0, 0, 0)") && (n.push("background-color:" + i + ";"),
                o["background-color"] = i),
                r ? o : n.join("")
            }
        };
        t.default = {
            style: R,
            getCustomTagStyle: function(e, t, r) {
                var n = {};
                if (t) {
                    var o = e.node
                      , i = [];
                    i.push(R.getFont(t)),
                    i.push(R.getHeight(e)),
                    i.push(R.getLineHeight(o));
                    var a = t.color;
                    a = r ? a !== b ? (i.push("color:" + a + ";"),
                    "color:" + a) : "" : a !== E ? (i.push("color:" + a + ";"),
                    "color:" + a) : "";
                    var s = i.join("")
                      , c = m[s];
                    if (c)
                        return c;
                    n.className = d();
                    var l = "";
                    if (0 < a.length) {
                        var u = function(e) {
                            if (!e || e.length <= 0)
                                return "";
                            var t = "inverse-color-" + e
                              , r = v[t];
                            if (r)
                                return r;
                            var n = h(e)
                              , o = n.s
                              , i = n.h
                              , a = n.l;
                            return a = 1 - .4 * a,
                            o <= .3 && .7 < a && (a = .7),
                            r = _(i, o, a),
                            v[t] = r
                        }(a);
                        l = "color:rgb(" + u.r + ", " + u.g + ", " + u.b + ");"
                    }
                    n.styleText = "\n                .readerChapterContent ." + n.className + " {\n                    " + s + "\n                    " + l + "\n                 }\n                 .wr_whiteTheme .readerChapterContent ." + n.className + " {\n                      " + a + "\n                 }",
                    m[s] = {
                        className: n.className,
                        styleText: n.styleText
                    }
                }
                return n
            },
            getOtherTagStyleText: function(e) {
                var t = []
                  , r = e.nodeName;
                if ("img" === r) {
                    var n = getComputedStyle(e.node)
                      , o = R.getComputedWidth(n)
                      , i = R.getMaxWidth(n);
                    0 < o.length && t.push(o),
                    0 < i.length && t.push(i)
                } else if ("pre" === r) {
                    var a = getComputedStyle(e.node)
                      , s = R.getComputedWidth(a)
                      , c = R.getComputedHeight(a);
                    0 < s.length && t.push(s),
                    0 < c.length && t.push(c)
                } else if ("hr" === r) {
                    t.push("margin:0;");
                    var l = R.getWidth(e);
                    0 < l.length && t.push(l)
                } else if ("span" === r) {
                    var u = R.getWidth(e)
                      , d = R.getHeight(e);
                    0 < u.length && t.push(u),
                    0 < d.length && t.push(d)
                } else if ("video" === r) {
                    var h = R.getWidth(e)
                      , f = R.getHeight(e);
                    0 < h.length && t.push(h),
                    0 < f.length && t.push(f)
                } else
                    p.inDevelopment() && alert("找 zhoon 看看 - getOtherTagStyleText inValid nodeName = " + r);
                return t.push(R.getLeft(e)),
                t.push(R.getTop(e)),
                t.join("")
            },
            getDecorationTagStyle: function(e, t) {
                var r = {};
                if (t) {
                    var n = R.getBorder(t, !0)
                      , o = R.getBackground(t, !0);
                    if (f.isEmpty(n) && f.isEmpty(o))
                        return {};
                    var i = [R.getBorder(t), R.getBackground(t)].join("")
                      , a = m[i];
                    if (a)
                        return a;
                    r.className = d();
                    var s = "";
                    f.isEmpty(o) || (0,
                    u.default)(o).forEach(function(e) {
                        var t = function(e, t) {
                            if (!e || e.length <= 0 || "transparent" === e)
                                return "";
                            var r = "inverse-background-" + e
                              , n = v[r];
                            if (n)
                                return n;
                            e.match(/,[^,]?([0]?\.[0-9]+)/gi);
                            var o = RegExp.$1
                              , i = h(e)
                              , a = i.s;
                            return (n = _(i.h, a, t)).alpha = o,
                            v[r] = n
                        }(o[e], .1)
                          , r = t.alpha ? ", " + t.alpha : "";
                        s += e + ":rgb(" + t.r + ", " + t.g + ", " + t.b + r + ");"
                    });
                    var c = R.getRadius(t) + R.getBorder(t)
                      , l = R.getBorder(t) + R.getBackground(t) + R.getRadius(t);
                    r.styleText = "\n                .readerChapterContent ." + r.className + " {\n                    " + c + "\n                    " + s + "\n                 }\n                 .wr_whiteTheme .readerChapterContent ." + r.className + " {\n                    " + l + "\n                 }",
                    m[i] = {
                        className: r.className,
                        styleText: r.styleText
                    }
                }
                return r
            }
        }
    },
    668: function(e, t, r) {
        "use strict";
        var n = r(590);
        r.n(n).a
    },
    680: function(e, t, r) {
        "use strict";
        function n() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "readerContent"
            }, [r("div", {
                staticClass: "app_content"
            }, [e.isShowReaderTopBar ? r("reader-top-bar", {
                ref: "reader_top_bar",
                attrs: {
                    "book-info": e.bookInfo,
                    "current-chapter": e.currentChapter,
                    "is-show-add-shelf": e.isShowTopBarAddShelfButton
                },
                on: {
                    "click-logout": e.onClickLogout,
                    "click-shelf": e.onClickShelf,
                    clickBookTitle: e.handleClickFirstChapter,
                    clickShelfButton: e.handleClickShelfButtonOnTopBar
                }
            }) : e._e(), e.isShowReaderTopBar ? e._e() : r("reader-book-info", {
                attrs: {
                    "book-info": e.bookInfo,
                    "chapter-infos": e.chapterInfos,
                    "reading-stat": e.readingStat,
                    "show-add-shelf-button": e.showFirstPageAddShelfButton
                },
                on: {
                    clickAddShelf: e.handleClickShelfButtonInBookInfo,
                    clickShowCatalog: e.showCatalog
                }
            }), e.hasCurrentChapter ? r("div", {
                class: {
                    readerChapterContent: !0,
                    navBarOffset: e.isShowReaderTopBar
                }
            }, [e.isShowLoading ? r("div", {
                staticClass: "readerChapterContentLoading"
            }, [r("loading", {
                attrs: {
                    zoom: "0.3"
                }
            })], 1) : e._e(), e.isShowLoading || e.isEpub ? e._e() : r("div", {
                staticClass: "chapterTitle"
            }, [e._v("\n                " + e._s(e.chapterTitleText) + "\n            ")]), e.isShowPreRender ? r("div", {
                key: "preRenderContainer",
                ref: "preRenderContainer",
                staticClass: "preRenderContainer"
            }, [e.isEpub && e.chapterContentStyles ? r("CustomStyle", [e._v("\n                    " + e._s(e.chapterContentStyles) + "\n                ")]) : e._e(), r("div", {
                staticClass: "preRenderContent",
                attrs: {
                    id: "preRenderContent"
                },
                domProps: {
                    innerHTML: e._s(e.chapterContentForEPub)
                }
            })], 1) : e._e(), r("div", {
                key: "renderTargetContainerSibling",
                ref: "renderTargetContainerSibling"
            }), e.isShowLoading ? e._e() : r("div", {
                key: "renderTargetContainer",
                ref: "renderTargetContainer",
                class: ["renderTargetContainer", {
                    renderTargetContainer_needPay: e.isNeedPay
                }]
            }, [r("div", {
                key: "chapterContentHighLightBgHtml",
                domProps: {
                    innerHTML: e._s(e.chapterContentHighLightBgHtml)
                }
            }), e.isEpub && e.chapterContentStyles ? r("CustomStyle", [e._v("\n                    " + e._s(e.chapterContentStyles) + "\n                ")]) : e._e(), r("div", {
                ref: "renderTargetContent",
                staticClass: "renderTargetContent",
                attrs: {
                    id: "renderTargetContent"
                },
                domProps: {
                    innerHTML: e._s(e.chapterContentTargetHtml)
                }
            })], 1)]) : e._e(), !e.hasCurrentChapter || e.isChapterContentDirty || e.isShowLoading ? e._e() : r("div", {
                staticClass: "readerFooter"
            }, [e.isPhone ? r("div", [e.isNeedPay ? r("a", {
                class: ["readerFooter_button", "readerFooter_button_twoLines", {
                    blue: e.payButtonDisplayInfos.isMCard
                }],
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: e.showPayDialog
                }
            }, [r("span", {
                class: ["line1", {
                    withIcon: e.payButtonDisplayInfos.isMCard
                }],
                domProps: {
                    innerHTML: e._s(e.payButtonDisplayInfos.lines[0])
                }
            }), 1 < e.payButtonDisplayInfos.lines.length ? r("span", {
                staticClass: "line2",
                domProps: {
                    innerHTML: e._s(e.payButtonDisplayInfos.lines[1])
                }
            }) : e._e()]) : e._e(), !e.isNeedPay && e.hasNextChapter ? r("a", {
                staticClass: "readerFooter_button",
                attrs: {
                    title: "下一章",
                    href: "javascript:"
                },
                on: {
                    click: e.handleClickNextChapter
                }
            }, [e._v("\n                    下一章\n                ")]) : e._e(), e.isNeedShowPhoneDownloadGuide ? r("a", {
                staticClass: "readerFooter_button blue",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: e.downloadApp
                }
            }, [e._v("\n                    下载微信读书 app，全场书籍免费读\n                ")]) : e._e()]) : r("div", [e.isNeedPay && e.hasLogin && e.canReceiveMemberCard ? r("a", {
                staticClass: "readerFooter_button readerFooter_button_twoLines blue",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: e.handleClickReceiveMemberCardButton
                }
            }, [r("span", {
                staticClass: "line1 withIcon"
            }, [e._v("送你一张无限卡 · 全场书籍免费读")])]) : e._e(), e.isShowBuyMemberCardButton ? r("a", {
                staticClass: "readerFooter_button readerFooter_button_twoLines blue",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: e.downloadAppToMemberCard
                }
            }, [r("span", {
                staticClass: "line1 withIcon"
            }, [e._v(e._s(e.buyMemberCardButtonLine1))])]) : e._e(), e.isNeedPay && e.hasLogin && !e.canReceiveMemberCard ? r("a", {
                class: ["readerFooter_button", "readerFooter_button_twoLines", {
                    blue: e.payButtonDisplayInfos.isMCard
                }],
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: e.showPayDialog
                }
            }, [r("span", {
                class: ["line1", {
                    withIcon: e.payButtonDisplayInfos.isMCard
                }],
                domProps: {
                    innerHTML: e._s(e.payButtonDisplayInfos.lines[0])
                }
            }), 1 < e.payButtonDisplayInfos.lines.length ? r("span", {
                staticClass: "line2",
                domProps: {
                    innerHTML: e._s(e.payButtonDisplayInfos.lines[1])
                }
            }) : e._e()]) : e._e(), !e.isNeedPay && e.hasNextChapter ? r("a", {
                staticClass: "readerFooter_button",
                attrs: {
                    title: "下一章",
                    href: "javascript:"
                },
                on: {
                    click: e.handleClickNextChapter
                }
            }, [e._v("\n                    下一章\n                ")]) : e._e(), e.isNeedShowLoginGuide ? r("reader-login-guide", {
                ref: "readerLoginGuide",
                attrs: {
                    "qr-code-img": e.loginGuideQRCodeImg,
                    "get-uid-err": e.isLoginGetUidError,
                    "get-info-err": e.isLoginGetInfoError,
                    "loading-q-r-code": e.isLoginQRCodeLoading
                },
                on: {
                    reload: e.checkIfNeedRequestLoginQRCode
                }
            }) : e._e(), e.hasLogin && !e.hasNextChapter ? r("div", {
                staticClass: "readerFooter_endingTitle"
            }, [e._v("\n                    " + e._s(e.endingTitle) + "\n                ")]) : e._e()], 1)])], 1), r("reader-controls", {
                staticClass: "readerControls",
                attrs: {
                    "has-prev-chapter": e.hasPrevChapter,
                    "has-next-chapter": e.hasNextChapter,
                    "is-white-theme": e.isWhiteTheme,
                    "disable-chapter-link": e.isBookInfoError,
                    "is-show-search-hint": e.isShowAutoSearchHint,
                    "search-hint-total-count": e.searchResult.totalCount || 0
                },
                on: {
                    onClickItem: e.handleClickControls
                }
            }), r("reader-bottom-bar", {
                attrs: {
                    "show-shadow": !e.isShowBottomSettingPanel,
                    "show-add-shelf-button": e.showBottomBarAddShelfButton
                },
                on: {
                    onClickItem: e.handleClickBottomBarItem
                }
            }), e.isShowBottomSettingPanel ? r("reader-bottom-setting-panel", {
                attrs: {
                    "is-white-theme": e.isWhiteTheme
                },
                on: {
                    onClickItem: e.handleClickBottomSettingPanelItem
                }
            }) : e._e(), r("reader-member-card-tips", {
                ref: "readerMemberCardTips"
            }), r("reader-catalog", {
                ref: "readerCatalog",
                attrs: {
                    "book-info": e.bookInfo,
                    "member-card-summary": e.memberCardSummary,
                    "chapter-infos": e.chapterInfos,
                    "current-chapter": e.currentChapter,
                    "is-in-search-mode": e.isInSearchMode,
                    "is-search-loading": e.isSearchLoading,
                    "search-result": e.searchResult
                },
                on: {
                    clickChapter: e.handleClickChapter,
                    clickBookInfo: e.handleClickFirstChapter,
                    search: e.doSearch,
                    clickSearchItem: e.handleClickSearchItem,
                    enterSearch: e.enterSearch,
                    exitSearch: e.exitSearch
                }
            }), e.isShowPayWholeDialog ? r("pay-whole-book-dialog", {
                ref: "payWholeBookDialog",
                attrs: {
                    "book-info": e.bookInfo,
                    "member-card-summary": e.memberCardSummary,
                    balance: e.balance
                },
                on: {
                    doPay: e.payWholeBook
                }
            }) : e._e(), e.isShowPayChapterDialog ? r("pay-chapter-dialog", {
                ref: "payChapterDialog",
                attrs: {
                    "book-info": e.bookInfo,
                    chapters: e.chapterInfos,
                    "member-card-summary": e.memberCardSummary,
                    balance: e.balance
                },
                on: {
                    doPay: e.payChapter
                }
            }) : e._e()], 1)
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    690: function(e, t, r) {
        "use strict";
        function n() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return e.showing ? r("div", [r("div", {
                staticClass: "reader_footerNote_mask",
                on: {
                    click: e.handleMaskClick
                }
            }), r("div", {
                ref: "footerNote_container",
                staticClass: "reader_footerNote_container",
                style: e.customStyle
            }, [r("div", {
                ref: "footerNote_bubble",
                staticClass: "reader_footerNote_bubble"
            }, [r("p", {
                staticClass: "reader_footerNote_text"
            }, [e._v(e._s(e.text))])])])]) : e._e()
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    692: function(e, t, r) {
        "use strict";
        function n() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("transition", {
                attrs: {
                    name: "fade"
                },
                on: {
                    enter: e.onShow
                }
            }, [r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showing,
                    expression: "showing"
                }],
                class: ["readerMemberCardTips", e.customSelector]
            }, [r("span", {
                staticClass: "icon"
            }), r("span", {
                staticClass: "text"
            }, [e._v(e._s(e.text))])])])
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    693: function(e, t, r) {
        "use strict";
        function n() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                staticClass: "readerLoginGuide"
            }, [r("div", {
                staticClass: "readerLoginGuide_qrcode"
            }, [e.loadingQRCode ? r("div", {
                staticClass: "readerLoginGuide_qrcode_loading"
            }, [r("Loading", {
                attrs: {
                    zoom: "0.4"
                }
            })], 1) : e.getUidErr || e.getInfoErr ? r("a", {
                staticClass: "readerLoginGuide_qrcode_retry",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: e.emitReload
                }
            }, [e._v("\n            重新加载\n        ")]) : r("img", {
                attrs: {
                    src: e.qrCodeImg,
                    alt: "扫码登录",
                    width: "100",
                    height: "100"
                }
            })]), e._m(0)])
        }
        var o = [function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "readerLoginGuide_right"
            }, [t("div", {
                staticClass: "line1"
            }, [this._v("扫码登录")]), t("div", {
                staticClass: "line2"
            }, [this._v("获得更多专属福利 · 全场书籍免费读")])])
        }
        ];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    694: function(e, t, r) {
        "use strict";
        function n() {
            var c = this
              , e = c.$createElement
              , t = c._self._c || e;
            return t("Dialog", {
                ref: "dialog",
                attrs: {
                    "is-show-close-button": !1,
                    "custom-selector": "payChapterDialogWrap"
                },
                on: {
                    onShow: c.onShow
                }
            }, [t("div", {
                staticClass: "payChapterDialog"
            }, [t("div", {
                staticClass: "pcd_title"
            }, [t("div", {
                staticClass: "pcd_bookTitle"
            }, [c._v("购买章节")]), t("a", {
                staticClass: "pcd_selectAll",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: c.toggleAllSelect
                }
            }, [c._v(c._s(c.isSelectedAll ? "取消全选" : "全选"))])]), t("div", {
                ref: "scrollDom",
                staticClass: "pcd_content"
            }, [t("ul", {
                staticClass: "pcd_chapter_list"
            }, c._l(c.sections, function(s) {
                return t("li", {
                    key: s.key
                }, [t("div", {
                    class: ["pcd_chapter_item", {
                        selectable: 0 < s.unpaidPrice,
                        checked: c.isTitleChecked(s)
                    }],
                    on: {
                        click: function(e) {
                            return c.toggleSection(s)
                        }
                    }
                }, [t("span", {
                    class: ["pcd_chapter_item_arrow", {
                        expand: s.isExpand
                    }],
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            c.toggleSectionExpand(s)
                        }
                    }
                }), t("div", {
                    staticClass: "pcd_chapter_item_content"
                }, [t("div", {
                    staticClass: "line1"
                }, [c._v(c._s(s.title))]), t("div", {
                    staticClass: "line2"
                }, [c._v(c._s(s.isAllPaid ? "已购" : 0 < s.totalPrice ? s.unpaidPrice.toFixed(2) + " 书币" : "免费"))])]), 0 < s.unpaidPrice ? t("input", {
                    staticClass: "pcd_chapter_item_checkbox",
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: c.isTitleChecked(s)
                    },
                    on: {
                        change: function(e) {
                            return c.changeTitleChecked(s, e)
                        }
                    }
                }) : c._e(), 0 < s.unpaidPrice ? t("label", {
                    staticClass: "pcd_chapter_item_checkbox_label"
                }) : c._e()]), s.isExpand ? t("ul", {
                    staticClass: "pcd_section_content"
                }, c._l(s.chapters, function(a) {
                    return t("li", {
                        key: a.chapterUid,
                        class: ["pcd_chapter_item", {
                            checked: -1 !== s.selected.indexOf(a.chapterUid)
                        }],
                        attrs: {
                            id: a.chapterUid === c.initSelectedChapterUid ? "pcd_chapter_current" : ""
                        },
                        on: {
                            click: function(e) {
                                return c.toggleChapter(s, a)
                            }
                        }
                    }, [t("div", {
                        staticClass: "pcd_chapter_item_content"
                    }, [t("div", {
                        staticClass: "line1"
                    }, [c._v("第" + c._s(a.chapterIdx) + "章 " + c._s(a.title))]), t("div", {
                        staticClass: "line2"
                    }, [c._v(c._s(0 < a.price ? a.price.toFixed(2) + " 书币" : "免费") + "\n                                ")])]), 1 === a.paid ? t("span", [c._v("已购")]) : c._e(), 1 !== a.paid && 0 < a.price ? t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: s.selected,
                            expression: "section.selected"
                        }],
                        staticClass: "pcd_chapter_item_checkbox",
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            value: a.chapterUid,
                            checked: Array.isArray(s.selected) ? -1 < c._i(s.selected, a.chapterUid) : s.selected
                        },
                        on: {
                            change: function(e) {
                                var t = s.selected
                                  , r = e.target
                                  , n = !!r.checked;
                                if (Array.isArray(t)) {
                                    var o = a.chapterUid
                                      , i = c._i(t, o);
                                    r.checked ? i < 0 && c.$set(s, "selected", t.concat([o])) : -1 < i && c.$set(s, "selected", t.slice(0, i).concat(t.slice(i + 1)))
                                } else
                                    c.$set(s, "selected", n)
                            }
                        }
                    }) : c._e(), 1 !== a.paid && 0 < a.price ? t("label", {
                        staticClass: "pcd_chapter_item_checkbox_label"
                    }) : c._e()])
                }), 0) : c._e()])
            }), 0)]), t("div", {
                staticClass: "pcd_actions"
            }, [t("div", {
                staticClass: "pcd_actions_item",
                staticStyle: {
                    "margin-top": "16px"
                }
            }, [t("span", [c._v("已选")]), t("span", {
                staticClass: "pcd_actions_item_white"
            }, [t("span", {
                staticClass: "pcd_actions_item_number"
            }, [c._v(c._s(c.selectedChaptersSize))]), c._v("章\n                ")])]), t("div", {
                staticClass: "pcd_actions_item"
            }, [t("span", [c._v(c._s(c.priceTitleWithMCardDiscount))]), t("span", [c.hasMCardDiscount && 0 < c.selectedChaptersPrice ? t("span", {
                staticClass: "pcd_actions_item_number pcd_actions_item_disabled"
            }, [c._v("\n                        " + c._s(c.selectedChaptersPrice.toFixed(2)) + "\n                    ")]) : c._e(), t("span", {
                staticClass: "pcd_actions_item_blue pcd_actions_item_number"
            }, [c._v("\n                        " + c._s(c.selectedChaptersPriceWithDiscount.toFixed(2)) + "\n                    ")]), t("span", {
                staticClass: "pcd_actions_item_blue"
            }, [c._v("书币")])])]), t("a", {
                class: {
                    pcd_actions_buy: !0,
                    disabled: !c.isValid
                },
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: c.emitDoPay
                }
            }, [c.isNeedDeposit ? t("span", {
                staticClass: "line1"
            }, [c._v("去微信读书 app 充值")]) : t("span", {
                staticClass: "line1"
            }, [c._v("购买章节")])]), c.isNeedDeposit ? t("div", {
                staticClass: "pcd_actions_account red"
            }, [c._v("余额不足 · " + c._s(c.accountBalance) + " 书币")]) : c.balance.hasFetched ? t("div", {
                staticClass: "pcd_actions_account"
            }, [c._v("余额 · " + c._s(c.accountBalance) + " 书币")]) : c._e()])])])
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    695: function(e, t, r) {
        "use strict";
        function n() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("Dialog", {
                ref: "dialog",
                attrs: {
                    "is-show-close-button": !1,
                    "custom-selector": "payWholeBookDialogWrap"
                }
            }, [r("div", {
                staticClass: "payDialog"
            }, [r("div", {
                staticClass: "payDialog_content"
            }, [r("div", {
                staticClass: "payDialog_price"
            }, [e._v(e._s(e.payInfos.dialogPriceText))]), r("div", {
                class: ["payDialog_account", {
                    red: e.payInfos.isNeedDeposit
                }]
            }, [e._v(e._s(e.payInfos.dialogAccountBalance))]), r("div", {
                staticClass: "payDialog_sectionTitle"
            }, [e._v("书籍")]), r("div", {
                staticClass: "payDialog_sectionContent"
            }, [e._v(e._s(e.bookInfo.title))]), r("div", {
                staticClass: "payDialog_sectionTitle"
            }, [e._v("作者")]), r("div", {
                staticClass: "payDialog_sectionContent"
            }, [e._v(e._s(e.bookInfo.author))])]), r("div", {
                staticClass: "payDialog_actions"
            }, [r("a", {
                staticClass: "payDialog_action",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: e.emitDoPay
                }
            }, [e._v(e._s(e.payInfos.dialogBuyButtonText))])])])])
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    696: function(e, t, r) {
        "use strict";
        function n() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "readerBottomSettingPanel"
            }, [r("div", {
                staticClass: "rbsp_inner"
            }, [r("div", {
                staticClass: "rbsp_color"
            }, [r("a", {
                class: ["rbsp_color_item", "white", {
                    current: t.isWhiteTheme
                }],
                attrs: {
                    href: "javascript:",
                    title: "浅色模式"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("white")
                    }
                }
            }, [t._v("浅色模式")]), r("a", {
                class: ["rbsp_color_item", "dark", {
                    current: !t.isWhiteTheme
                }],
                attrs: {
                    href: "javascript:",
                    title: "深色模式"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("dark")
                    }
                }
            }, [t._v("深色模式")])]), t.canShowDownload ? r("a", {
                staticClass: "rbsp_download",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("download")
                    }
                }
            }, [t._v("下载微信读书 app 使用更多功能")]) : t._e()])])
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    698: function(e, t, r) {
        "use strict";
        function n() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                class: ["readerBottomBar", {
                    showShadow: t.showShadow
                }]
            }, [t._m(0), r("a", {
                staticClass: "rbb_item catalog",
                attrs: {
                    title: "目录",
                    href: "javascript:"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("catalog")
                    }
                }
            }, [r("span", {
                staticClass: "icon"
            }), r("span", {
                staticClass: "txt"
            }, [t._v("目录")])]), r("a", {
                staticClass: "rbb_item setting",
                attrs: {
                    title: "设置",
                    href: "javascript:"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("setting")
                    }
                }
            }, [r("span", {
                staticClass: "icon"
            }), r("span", {
                staticClass: "txt"
            }, [t._v("设置")])]), t.showAddShelfButton ? r("a", {
                staticClass: "rbb_addShelf wr_btn wr_btn_Big",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("shelf")
                    }
                }
            }, [r("span", {
                staticClass: "rbb_addShelf_icon"
            }), r("span", {
                staticStyle: {
                    "vertical-align": "middle"
                }
            }, [t._v("加入书架")])]) : r("a", {
                staticClass: "rbb_addShelf wr_btn wr_btn_Big added",
                attrs: {
                    href: "/web/shelf"
                },
                on: {
                    click: function(e) {
                        return t.saveReportInfo("Reader_BottomBar")
                    }
                }
            }, [r("span", {
                staticClass: "rbb_addShelf_icon"
            }), r("span", {
                staticStyle: {
                    "vertical-align": "middle"
                }
            }, [t._v("去书架查看")])])])
        }
        var o = [function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("a", {
                staticClass: "rbb_item home",
                attrs: {
                    title: "书城",
                    href: "/"
                }
            }, [t("span", {
                staticClass: "icon"
            }), t("span", {
                staticClass: "txt"
            }, [this._v("书城")])])
        }
        ];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    700: function(e, t, r) {
        "use strict";
        function n() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "readerTopBar"
            }, [r("a", {
                staticClass: "readerTopBar_home",
                attrs: {
                    href: "/",
                    title: "微信读书书城"
                },
                on: {
                    click: function(e) {
                        return t.saveReportInfo("Reader_Home")
                    }
                }
            }, [t._v("微信读书书城")]), r("span", {
                staticClass: "readerTopBar_title"
            }, [r("a", {
                staticClass: "readerTopBar_title_link",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: t.handleClickBookTitle
                }
            }, [t._v(t._s(t.bookTitleString))]), r("span", {
                staticClass: "readerTopBar_title_chapter"
            }, [t._v(t._s(t.chapterTitleString))])]), r("div", {
                class: ["readerTopBar_actions", {
                    withAvatar: t.hasLogin
                }]
            }, [t.isShowAddShelf ? r("a", {
                staticClass: "readerTopBar_addShelf added",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: t.emitClickShelfButton
                }
            }, [t._v("\n            加入书架\n        ")]) : r("a", {
                staticClass: "readerTopBar_addShelf",
                attrs: {
                    href: "/web/shelf"
                },
                on: {
                    click: function(e) {
                        return t.saveReportInfo("Reader_NavBar")
                    }
                }
            }, [t._v("\n            去书架查看\n        ")])]), t.hasLogin ? r("Menu", {
                ref: "topBar_avatarMenu",
                staticClass: "js_reader_navBarMenu",
                attrs: {
                    defaultSelectedIndex: 0,
                    optionList: t.avatarOptionList,
                    align: "right"
                },
                on: {
                    "handle-click-menu-option": t.handleClickAvatarMenuOption
                }
            }, [r("avatar", {
                attrs: {
                    clickable: !0,
                    src: t.user.avatar,
                    "custom-selector": "readerTopBar_avatar"
                },
                on: {
                    click: t.handleClickAvatar
                }
            })], 1) : t._e()], 1)
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    701: function(e, t, r) {
        "use strict";
        function n() {
            var r = this
              , e = r.$createElement
              , n = r._self._c || e;
            return n("div", [n("BackgroundMask", {
                ref: "mask",
                attrs: {
                    "needs-close-button": !1
                },
                on: {
                    click: r.close
                }
            }), n("transition", {
                attrs: {
                    name: "readerCatalog"
                },
                on: {
                    enter: r.onShow
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: r.isShow,
                    expression: "isShow"
                }],
                staticClass: "readerCatalog"
            }, [n("div", {
                staticClass: "readerCatalog_searchBar"
            }, [n("div", {
                staticClass: "readerCatalog_searchBar_left"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: r.searchKeyword,
                    expression: "searchKeyword"
                }],
                attrs: {
                    placeholder: "搜索",
                    type: "text"
                },
                domProps: {
                    value: r.searchKeyword
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && r._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : r.debouncedDoSearch(e)
                    },
                    focus: r.handleInputFocused,
                    input: function(e) {
                        e.target.composing || (r.searchKeyword = e.target.value)
                    }
                }
            }), n("span", {
                staticClass: "readerCatalog_searchBar_enter",
                attrs: {
                    title: "搜索"
                },
                on: {
                    click: r.debouncedDoSearch
                }
            })]), r.isInSearchMode ? n("span", {
                staticClass: "readerCatalog_searchCancel",
                on: {
                    click: r.exitSearch
                }
            }, [r._v("取消")]) : r._e()]), r.isInSearchMode ? n("div", {
                ref: "searchResultDom",
                staticClass: "rc_search"
            }, [r._l(r.searchResult.resultList, function(t) {
                return n("div", {
                    key: t.searchIdx,
                    staticClass: "rc_search_item"
                }, [t.firstInChapter ? n("div", {
                    staticClass: "rc_search_item_title"
                }, [r._v("\n                        " + r._s(r.getSearchResultChapterTitle(t)) + "\n                    ")]) : n("div", {
                    staticClass: "rc_search_item_follow"
                }), n("a", {
                    staticClass: "rc_search_item_content",
                    attrs: {
                        href: "javascript:"
                    },
                    domProps: {
                        innerHTML: r._s(r.getSearchResultChapterContent(t))
                    },
                    on: {
                        click: function(e) {
                            return r.emitClickSearchItem(t)
                        }
                    }
                })])
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: r.isSearchLoading,
                    expression: "isSearchLoading"
                }],
                staticClass: "rc_search_loading"
            }, [n("Loading", {
                attrs: {
                    zoom: "0.3"
                }
            })], 1), !r.isSearchLoading && r.searchResult.keyword && 0 === r.searchResult.resultList.length ? n("div", {
                staticClass: "rc_search_noResult"
            }, [r._v("\n                    无结果\n                ")]) : r._e()], 2) : r._e(), n("reader-catalog-book-info", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !r.isInSearchMode,
                    expression: "!isInSearchMode"
                }],
                staticClass: "readerCatalog_bookInfo",
                attrs: {
                    "book-info": r.bookInfo
                },
                on: {
                    clickBookInfo: r.handleClickBookInfo
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !r.isInSearchMode,
                    expression: "!isInSearchMode"
                }],
                staticClass: "readerCatalog_actions"
            }, [n("div", {
                class: ["readerCatalog_actions_inner", {
                    empty: !r.needShowScroller
                }]
            }, [r.needShowScroller ? n("span", {
                class: {
                    readerCatalog_scroller: !0,
                    rotate: !this.isScrollToBottom
                },
                on: {
                    click: r.handleClickScroller
                }
            }) : r._e()])]), n("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !r.isInSearchMode,
                    expression: "!isInSearchMode"
                }],
                ref: "catalogListDom",
                staticClass: "readerCatalog_list"
            }, r._l(r.chapterInfos, function(t) {
                return n("li", {
                    key: t.chapterUid,
                    class: {
                        chapterItem: !0,
                        chapterItem_current: r.isCurrent(t),
                        chapterItem_disabled: r.isLock(t)
                    }
                }, [n("a", {
                    class: ["chapterItem_link", "chapterItem_level" + t.level, {}],
                    attrs: {
                        href: "javascript:"
                    },
                    on: {
                        click: function(e) {
                            return r.handleClickChapter(t.chapterUid)
                        }
                    }
                }, [n("span", {
                    staticClass: "chapterItem_text"
                }, [r._v(r._s(r.getChapterTitle(t)))]), r.isLock(t) ? n("span", {
                    staticClass: "chapterItem_lock"
                }) : r._e()])])
            }), 0)], 1)])], 1)
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    702: function(e, t, r) {
        "use strict";
        function n() {
            var e = this.$createElement;
            return (this._self._c || e)("style", {
                tag: "div"
            }, [this._t("default")], 2)
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    703: function(e, t, r) {
        "use strict";
        function n() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "readerControls"
            }, [r("a", {
                class: {
                    readerControls_item: !0,
                    prev: !0,
                    disabled: t.disableChapterLink || !t.hasPrevChapter
                },
                attrs: {
                    href: "javascript:",
                    title: "上一章"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("prev")
                    }
                }
            }, [r("span", {
                staticClass: "icon"
            })]), r("a", {
                class: {
                    readerControls_item: !0,
                    catalog: !0,
                    disabled: t.disableChapterLink
                },
                attrs: {
                    href: "javascript:",
                    title: "目录"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("catalog")
                    }
                }
            }, [r("span", {
                staticClass: "icon"
            })]), r("a", {
                class: {
                    readerControls_item: !0,
                    next: !0,
                    disabled: t.disableChapterLink || !t.hasNextChapter
                },
                attrs: {
                    href: "javascript:",
                    title: "下一章"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("next")
                    }
                }
            }, [r("span", {
                staticClass: "icon"
            })]), r("div", {
                staticClass: "readerControls_item colorContainer"
            }, [r("a", {
                class: {
                    colorItem: !0,
                    dark: !0,
                    current: !t.isWhiteTheme
                },
                attrs: {
                    href: "javascript:",
                    title: "深色"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("dark")
                    }
                }
            }, [r("span", {
                staticClass: "icon"
            })]), r("a", {
                class: {
                    colorItem: !0,
                    white: !0,
                    current: t.isWhiteTheme
                },
                attrs: {
                    href: "javascript:",
                    title: "浅色"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("white")
                    }
                }
            }, [r("span", {
                staticClass: "icon"
            })])]), r("a", {
                staticClass: "readerControls_item download",
                attrs: {
                    href: "javascript:",
                    title: "下载App"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("download")
                    }
                }
            }, [r("span", {
                staticClass: "icon"
            })]), t.isShowSearchHint ? r("a", {
                staticClass: "readerControls_catalog_hint",
                style: {
                    minWidth: t.searchHintTotalCount ? "120px" : "60px"
                },
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: function(e) {
                        return t.emitClick("catalog")
                    }
                }
            }, [t._v("\n        " + t._s(t.searchHint) + "\n    ")]) : t._e()])
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    704: function(e, t, r) {
        "use strict";
        function n() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "readerBookInfo"
            }, [t.isEmptyBookInfo ? t._e() : r("div", {
                staticClass: "readerBookInfo_head"
            }, [r("book-cover", {
                attrs: {
                    src: t.bookInfo.cover || "",
                    "custom-selector": "bookInfo_cover",
                    "need-gradient-decor": !0
                }
            }), r("div", {
                staticClass: "bookInfo_right"
            }, [r("h2", {
                staticClass: "bookInfo_title"
            }, [t._v(t._s(t.bookInfo.title))]), r("div", {
                staticClass: "bookInfo_author_container"
            }, [r("a", {
                staticClass: "bookInfo_author",
                attrs: {
                    href: "/web/search/books?author=" + encodeURIComponent(t.bookInfo.author)
                }
            }, [t._v(t._s(t.bookInfo.author))])]), t.needShowRankListImg ? r("a", {
                class: ["bookInfo_rankList", t.rankListCategoryClassName],
                attrs: {
                    href: "/web/category/" + t.rankListCategoryId,
                    target: "_blank"
                },
                on: {
                    click: function(e) {
                        return t.saveReportInfo("ReaderInfo_Enter_Category")
                    }
                }
            }) : t._e(), 0 < t.introParaArray.length ? r("div", {
                ref: "introDom",
                staticClass: "bookInfo_intro",
                on: {
                    click: t.showIntroDialog
                }
            }, [t._v("\n                " + t._s(t.introParaArray.join("")) + "\n            ")]) : t._e(), r("div", {
                class: {
                    bookInfo_more: !0,
                    bookInfo_more_2children: 2 === t.moreChildCount,
                    bookInfo_more_3children: 3 === t.moreChildCount
                }
            }, [t.showRating ? r("div", {
                staticClass: "bookInfo_more_rating"
            }, [r("div", {
                staticClass: "bookInfo_more_line1"
            }, [r("span", {
                staticClass: "bookInfo_more_line1_number"
            }, [t._v(t._s(t.starString))]), r("rank-bar", {
                attrs: {
                    star: t.bookInfo.star,
                    "custom-selector": "bookInfo_score_rankBar"
                }
            })], 1), r("div", {
                staticClass: "bookInfo_more_line2"
            }, [t._v(t._s(t.ratingCount) + " 人点评")])]) : t._e(), 0 < t.readingCount ? r("div", {
                staticClass: "bookInfo_more_reading"
            }, [r("div", {
                staticClass: "bookInfo_more_line1",
                domProps: {
                    innerHTML: t._s(t.readingCountStrings[0])
                }
            }), r("div", {
                staticClass: "bookInfo_more_line2"
            }, [t._v(t._s(t.readingCountStrings[1]))])]) : t._e(), t.showAddShelfButton ? r("a", {
                staticClass: "bookInfo_more_addShelf wr_btn wr_btn_Big",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: t.emitClickAddShelf
                }
            }, [t._v("加入书架")]) : r("span", {
                staticClass: "bookInfo_more_addShelf added"
            }, [t._v("已加入书架")])])])], 1), t.chaptersToPreview && 0 < t.chaptersToPreview.length ? r("div", {
                staticClass: "readerBookInfo_chapterPreview"
            }, [t._l(t.chaptersToPreview, function(e) {
                return r("a", {
                    staticClass: "item",
                    attrs: {
                        href: e.link
                    }
                }, [e.line1 ? r("div", {
                    staticClass: "line1"
                }, [t._v(t._s(e.line1))]) : t._e(), e.line2 ? r("div", {
                    class: {
                        line2: !0,
                        blue: e.isLine2Blue,
                        title: e.isLine2Title
                    }
                }, [t._v(t._s(e.line2))]) : t._e()])
            }), r("a", {
                staticClass: "item showAll",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: t.emitClickShowCatalog
                }
            }, [r("div", {
                staticClass: "line1"
            }, [t._v("查看全部章节")]), r("div", {
                staticClass: "line2"
            }, [t._v("共" + t._s(this.chapterInfos.length) + "章")])])], 2) : t._e(), r("Dialog", {
                ref: "introDialog",
                attrs: {
                    "custom-selector": "introDialogWrap"
                }
            }, [r("div", {
                staticClass: "introDialog_content"
            }, [0 < t.introParaArray.length ? r("h3", {
                staticClass: "introDialog_content_title"
            }, [t._v("简介")]) : t._e(), 0 < t.introParaArray.length ? r("div", t._l(t.introParaArray, function(e) {
                return r("p", {
                    staticClass: "introDialog_content_intro_para"
                }, [t._v(t._s(e))])
            }), 0) : t._e(), r("h3", {
                staticClass: "introDialog_content_title"
            }, [t._v("版权")]), t._l(t.publishInfos, function(e) {
                return r("div", {
                    class: {
                        introDialog_content_pub_line: !0,
                        long: t.isPublishInfoLong
                    }
                }, [r("span", {
                    staticClass: "introDialog_content_pub_title"
                }, [t._v(t._s(e.title))]), r("span", [t._v(t._s(e.content))])])
            })], 2)])], 1)
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    705: function(e, t, r) {
        "use strict";
        function n() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("Dialog", {
                ref: "dialog"
            }, [r("div", {
                staticClass: "rcv_succ_dialog_content"
            }, [r("div", {
                staticClass: "rcv_succ_dialog_head"
            }, [r("span", {
                staticClass: "rcv_succ_dialog_img"
            }), r("div", {
                staticClass: "rcv_succ_dialog_title"
            }, [e._v(e._s(e.titleText))])]), r("div", {
                staticClass: "rcv_succ_dialog_foot"
            }, [r("img", {
                staticClass: "rcv_succ_dialog_foot_qrcode",
                attrs: {
                    src: e.qrCodeImg,
                    alt: "扫码下载"
                }
            }), r("div", {
                staticClass: "rcv_succ_dialog_foot_right"
            }, [r("div", {
                staticClass: "line1"
            }, [e._v("下载微信读书 app")]), r("div", {
                staticClass: "line2"
            }, [e._v("获得更多福利· 全场书籍免费读")])])])])])
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    },
    707: function(e, t, r) {
        "use strict";
        function n() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("a", {
                staticClass: "readerCatalog_bookInfo",
                attrs: {
                    href: "javascript:"
                },
                on: {
                    click: e.emitClickBookInfo
                }
            }, [r("book-cover", {
                attrs: {
                    "custom-selector": "readerCatalog_bookInfo_cover",
                    src: e.bookInfo.cover || "",
                    "need-gradient-decor": !0
                }
            }), r("div", {
                staticClass: "readerCatalog_bookInfo_right"
            }, [r("h2", {
                staticClass: "readerCatalog_bookInfo_title"
            }, [r("span", {
                staticClass: "readerCatalog_bookInfo_title_txt"
            }, [e._v(e._s(e.bookInfo.title))]), r("span", {
                staticClass: "readerCatalog_bookInfo_title_arrow"
            })]), r("div", {
                staticClass: "readerCatalog_bookInfo_author"
            }, [e._v(e._s(e.bookInfo.author))]), e.updateTimeString ? r("div", {
                staticClass: "readerCatalog_bookInfo_updateTime"
            }, [e._v(e._s(e.updateTimeString))]) : e._e()])], 1)
        }
        var o = [];
        r.d(t, "a", function() {
            return n
        }),
        r.d(t, "b", function() {
            return o
        })
    }
}]);
