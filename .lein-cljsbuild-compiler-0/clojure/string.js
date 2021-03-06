goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
} else
{var s__14274 = s;
var limit__14275 = limit;
var parts__14276 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,limit__14275,1))
{return cljs.core.conj.call(null,parts__14276,s__14274);
} else
{var temp__3971__auto____14277 = cljs.core.re_find.call(null,re,s__14274);
if(cljs.core.truth_(temp__3971__auto____14277))
{var m__14278 = temp__3971__auto____14277;
var index__14279 = s__14274.indexOf(m__14278);
{
var G__14280 = s__14274.substring((index__14279 + cljs.core.count.call(null,m__14278)));
var G__14281 = (limit__14275 - 1);
var G__14282 = cljs.core.conj.call(null,parts__14276,s__14274.substring(0,index__14279));
s__14274 = G__14280;
limit__14275 = G__14281;
parts__14276 = G__14282;
continue;
}
} else
{return cljs.core.conj.call(null,parts__14276,s__14274);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__14286 = s.length;
while(true){
if((index__14286 === 0))
{return "";
} else
{var ch__14287 = cljs.core._lookup.call(null,s,(index__14286 - 1),null);
if((function (){var or__3824__auto____14288 = cljs.core._EQ_.call(null,ch__14287,"\n");
if(or__3824__auto____14288)
{return or__3824__auto____14288;
} else
{return cljs.core._EQ_.call(null,ch__14287,"\r");
}
})())
{{
var G__14289 = (index__14286 - 1);
index__14286 = G__14289;
continue;
}
} else
{return s.substring(0,index__14286);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__14296 = (new goog.string.StringBuffer());
var length__14297 = s.length;
var index__14298 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__14297,index__14298))
{return buffer__14296.toString();
} else
{var ch__14299 = s.charAt(index__14298);
var temp__3971__auto____14300 = cljs.core._lookup.call(null,cmap,ch__14299,null);
if(cljs.core.truth_(temp__3971__auto____14300))
{var replacement__14301 = temp__3971__auto____14300;
buffer__14296.append([cljs.core.str(replacement__14301)].join(''));
} else
{buffer__14296.append(ch__14299);
}
{
var G__14302 = (index__14298 + 1);
index__14298 = G__14302;
continue;
}
}
break;
}
});
