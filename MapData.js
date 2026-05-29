const mapData = [
    {
	text: 'Original map on the wall in Charlottesville',
	image: 'images/DSC02171.JPG',
	iW: 5472, iH: 3080,
	arrow: {
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"32",
	},
	overlay: {
            x: 0.706245,
            y: 0.300244,
            placement: 'RIGHT',
            checkResize: false,
	},
    },
    {
	text:'Goshen Pass Apr 26th, 2009',
	image:'images/IMG_0634.JPG',
	iW: 1200, iH: 1600,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.573329,
            y: 0.322581,
            placement: 'RIGHT',
            checkResize: false,
	}
    },
    {
	text:'The Last Canoe Trip, Oct 10th, 2010',
	image:'images/IMG_1826.JPG',
	iW:3648,
	iH:2736,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.6842,
            y: 0.2878,
            placement: 'RIGHT',
            checkResize: false,
	},
    },
    {
	text:'James River, Mothers Day 2002',
	image: 'images/100-0178.JPG',
	iW:1760,
	iH:1168,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.7292,
            y: 0.3612,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Bob and Sally at Branchlands Pond, Sept 2nd, 2021',
	image:'images/DSC02176.JPG',
	iW:5472,
	iH:3080,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.710,
            y: 0.299,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Bob paddles to the WWI Ghost Fleet, ~1938',
	image:'https://www.marinersmuseum.org/wp-content/uploads/2021/10/JRRF2.png',
	audio:'audio/CanvasKayak.mp3',
	iW:1728,
	iH:660,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.975,
            y: 0.465,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Bob swims the Rappahannock to win a bet, ~1951',
	image:'https://upload.wikimedia.org/wikipedia/commons/7/7b/Rappahannock_River_2008.jpg',
	audio:'audio/SwimAcrossRappahannock.mp3',
	iW:800,
	iH:600,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.9999,
            y: 0.375,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Natural Bridge with Ollie Fordham, June 1982',
	image:'images/NaturalBridge.JPG',
	iW:1780,
	iH:2651,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.5597,
            y: 0.3764,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text: 'Cedar Creek with Ollie Fordham, June 1982',
	image: 'images/CedarCreek.JPG',
	iW: 1882,
	iH: 1768,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.5581,
            y: 0.3747,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	txt: 'txt/Jerrys.html',
	arrow: {
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay: {
	    x: 0.465,
	    y: 0.351,
	    placement: 'RIGHT',
	    checkResize: false,
	}
    },
    {
	text: 'Solo from Emporia, VA to Balgra, NC, circa 1980',
	image: 'images/BobandJohn.JPG',
	iW: 1668,
	iH: 1437,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.966,
            y: 0.664,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Rafting, New River Gorge, July 2006',
	image:'images/NewRiverJuly2006.jpg',
	iH:2544,
	iW:1696,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.342,
            y: 0.295,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'<a href="https://www.bobgramann.com/">www.bobgramann.com</a>',
	image:'images/MostlyTrueSongs.jpg',
	audio:'audio/TheBalladOfBobWhaley.mp3',
	iW:2832,
	iH:1422,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.011,
            y: 0.73,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Fossilized Whale Bone, Meherrin River circa 1980',
	image:'images/WhaleBone.jpg',
	iW:4856,
	iH:2227,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.844,
            y: 0.541,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Tye River, Nelson County Downriver Race 2009',
	image:'images/NelsonRace2_2009.JPG',
	iW:3648,
	iH:2736,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.6514,
            y: 0.375,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Great Rappahannock Whitewater Canoe Race 2008',
	image:'images/RappahannockRace2008.JPG',
	iW:3648,
	iH:2736,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.8487,
            y: 0.2549,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Broken Paddle New River Gorge 1970s',
	video:'https://www.youtube.com/embed/843otVxCdUU',
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.341,
            y: 0.293,
            placement: 'RIGHT',
            checkResize: false,
	},
    },
    {
	text:'Victoria Reservoir painting by Lena Averill',
	image:'images/VictoriaReservoir.JPG',
	audio:'audio/TeachingBoyToSwim.mp3',
	iW:3333,
	iH:2706,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.75,
            y: 0.49,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Balcony Falls, James River early 1970s',
	video:'https://www.youtube.com/embed/GDYjsdNCxtM',
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.5762,
            y: 0.3809,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'First Paddle of Folbot Kit 1967',
	video:'https://www.youtube.com/embed/b5RdDybrjTs?start=0&end=35;',
	arrow:
	{
	    src:"images/tango-down-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.7107,
            y: 0.2934,
            placement: 'BOTTOM',
            checkResize: false,
        },
    },
    {
	text:'Upper Tye River 2009',
	image:'images/TyeRiver2009.JPG',
	iW:3876,
	iH:2592,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.6325,
            y: 0.338,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Gauley River, Sweets Falls, 1987 (simulated multi-exposure)',
	image:'images/GauleySweets1987.jpg',
	iW:3113,
	iH:2633,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.3585,
            y: 0.269,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Goshen Pass mid 1970s',
	video:'https://www.youtube.com/embed/rDg-bD4ei48?start=370&end=394;',
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.573329,
            y: 0.322581,
            placement: 'LEFT',
            checkResize: false
        },
    },
    {
	text:'James River Pipeline Richmond mid 1970s',
	video:'https://www.youtube.com/embed/XEs-dgW73IQ',
	arrow:
	{
	    src:"images/tango-up-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.862,
            y: 0.394,
            placement: 'TOP',
            checkResize: false,
        },
    },
    {
	text:'Nottaway Falls mid 1970s with Beth, Tom Cole and son',
	video:'https://www.youtube.com/embed/SPLTKTc10Oo',
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.7595,
            y: 0.4811,
            placement: 'LEFT',
            checkResize: false
        },
    },
    {
	text:'Danville Bicentenial, Dan River, May 14-23 1993',
	image:'images/DanvilleBicentennial1993.jpg',
	iW:2903,
	iH:4166,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.582,
            y: 0.5633,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Cacapon River Camp Sketch, April 1980 by Russell Goins Sister',
	image:'images/CampDrawing1980.jpg',
	iW:3660,
	iH:2796,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.735,
            y: 0.037,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'James River, Richmond upper section 8/1/2009, Jenny Wiley',
	image:'images/20090801UpperRichmond.jpg',
	iW:500,
	iH:333,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
	    x: 0.85,
            y: 0.39,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Cheat Canyon takeout, Jenkinsville bridge',
	image:'images/CheatCanyonTakeout.JPG',
	iW:1463,
	iH:2269,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.5359,
            y: 0.0237,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Youghiogheny River (actual location probably downstream in PA)',
	image:'images/youghiogheny.jpg',
	iW:3924,
	iH:2645,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.583,
            y: 0.015,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Rivanna River 1975',
	image:'images/1975Rivanna.jpg',
	iW:2281,
	iH:2703,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.7205,
            y: 0.312,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'ACA Whitewater Open Canoe Downriver National Championships, 2008',
	image:'images/2008_Nationals.JPG',
	iW:3008,
	iH:2000,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.0893,
            y: 0.675,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Miss Virginia Tech 1948, Snow Woman',
	image:'images/MissVaTech1948SnowWoman.jpg',
	iW:1000,
	iH:1501,	
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.433,
            y: 0.445,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Pick up Tom Michie from the Capitol for NC Canoe trip, 1970s',
	video:'https://www.youtube.com/embed/oeZZn60b0_8',
	arrow:
	{
	    src:"images/tango-down-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.860,
            y: 0.391,
            placement: 'BOTTOM',
            checkResize: false,
        },
    },
    {
	text:'Bob takes PT boat up the James, late 1940s',
	image:'https://upload.wikimedia.org/wikipedia/commons/4/42/USS_PT-105.jpg',
	audio:'audio/PTboatRichmondLate1940s.mp3',
	iW:740,
	iH:584,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.886,
            y: 0.433,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	txt:'txt/Pottery.html',
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.8954,
            y: 0.51,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Morehead City, NC 1965',
	image:'images/1965HolyMackerel.jpg',
	iW:11171,
	iH:8932,
	arrow:
	{
	    src:"images/tango-down-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.97,
            y: 0.812,
            placement: 'BOTTOM',
            checkResize: false,
        },
    },
    {
	text:'Telico River April 1987',
	video:'https://www.youtube.com/embed/luD_ERo5JnQ?start=1158;',
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.0,
            y: 0.72,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Nelson Area Paddlers 2008 Outstanding Canoeist awarded by Conny Roussos',
	image:'images/2008BobWhaleyNelsonCounty.jpg',
	iW:800,
	iH:502,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.6519,
            y: 0.378,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Citation Bass (location unknown)',
	image:'images/1971CitationSmallmouth.jpg',
	iW:754,
	iH:935,
	arrow:
	{
	    src:"images/tango-right-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.682,
            y: 0.367,
            placement: 'RIGHT',
            checkResize: false,
        },
    },
    {
	text:'Honeymoon 1950, Fontana Lake (sunburn!)',
	image:'images/195207HoneyMoon.jpg',
	iW:555,
	iH:283,
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.0,
            y: 0.75,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	txt:'txt/RaymondObit.html',	
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.0,
            y: 0.80,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	txt:'txt/LizObit.html',
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.5518,
            y: 0.3455,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	txt:'txt/MauriceObit.html',
	arrow:
	{
	    src:"images/tango-left-arrow-red.svg",
	    alt:"Left arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.7158,
            y: 0.1785,
            placement: 'LEFT',
            checkResize: false,
        },
    },
    {
	text:'Bob and Sally (nine months pregnant) walk across James River, September 1954',
	image:'images/Drought1954.jpg',
	iW:2076,
	iH:1560,
	arrow:
	{
	    src:"images/tango-down-arrow-red.svg",
	    alt:"Right arrow",
	    width:"16",
	},
	overlay:
	{
            x: 0.843,
            y: 0.389,
            placement: 'BOTTOM',
            checkResize: false,
        },
    }
]

