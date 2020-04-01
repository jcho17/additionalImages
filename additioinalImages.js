import seaUrchin from "http://farm1.static.flickr.com/188/431386932_bfa9a8e602.jpg"
import seaAnemone from "http://static.flickr.com/1001/1414692659_868d35db95.jpg"
import pomegranate from "https://farm3.static.flickr.com/2043/2064385351_48c3eb486d.jpg"
import fig from "https://farm3.static.flickr.com/2155/2243391783_bb733efe08.jpg"
import artichoke from "https://farm3.static.flickr.com/2373/2412015137_b0cba38378.jpg"
import bellPepper from "https://farm3.static.flickr.com/2071/2530816548_d9f9d0ab77.jpg"
import cucumber from "https://farm4.static.flickr.com/3036/2563065094_5283a98d45.jpg"
import mushroom from "https://farm4.static.flickr.com/3279/3017505951_18a1ef8a2c.jpg"
import drum from "https://static.flickr.com/2333/2401242916_18bba039cc.jpg"
import acousticGuitar from "https://static.flickr.com/1318/566039764_3d485e0659.jpg"
import flute from "https://static.flickr.com/103/288882719_0282d27e37.jpg"
import harmonica from "http://farm3.static.flickr.com/2078/2204549896_6f93a3f88e_o.jpg"
import canoe from "https://farm1.static.flickr.com/141/377784341_21578ce22d.jpg"
import tractor from "https://farm4.static.flickr.com/3079/2564883829_dd3e1e8bb5.jpg"
import warplane from "https://farm1.static.flickr.com/26/66003299_d801057cda.jpg"
import camera from "https://farm2.static.flickr.com/1074/1093538431_217a675d08.jpg"
import banana from "http://farm3.static.flickr.com/2192/2316463108_09c5e20ab1.jpg"
import orange from "https://farm4.static.flickr.com/3089/2348025971_5e15d11046.jpg"
import pineapple from "http://farm1.static.flickr.com/247/523350904_200d70b604.jpg"
import broccoli from "http://farm4.static.flickr.com/3185/2537371367_90404c652f.jpg"
import corn from "https://farm3.static.flickr.com/2074/1657881983_905aca7086.jpg"
import spiderMonkey from "http://farm3.static.flickr.com/2406/2088050468_1f51fe21f1.jpg"
import mudTurtle from "https://farm4.static.flickr.com/3077/2606965873_374efab5f2.jpg"
import kingSnake from "http://farm4.static.flickr.com/3236/2816375512_f5bae32a9d.jpg"
import starfish from "http://farm1.static.flickr.com/144/360856509_c9ac3fc352.jpg"
import piano from "https://farm3.static.flickr.com/2237/2347762743_16e9725654.jpg"
import violin from "https://static.flickr.com/2130/2043231796_09f890c848.jpg"
import electricFan from "http://static.flickr.com/3001/2809714327_269edc0203.jpg"
import laptop from "http://farm1.static.flickr.com/41/82236949_693a4f4b58.jpg"
import keyboard from "http://static.flickr.com/2045/2220676683_215f8c11c0.jpg"
import car from "http://farm1.static.flickr.com/27/59613680_ea2191e879.jpg"
import bicycle from "https://farm2.static.flickr.com/1090/1441125154_341230126c.jpg"

export const StaticData = {
	animal:[
    {
        url: spiderMonkey,
            correctURLs: [74, 83, 104, 146, 287, 13], 
            wrongVizURLs: [292, 58], 
            classLabels:['spider monkey', 'spider monkeys', 'monkey', 'monkeys'],
            hint: 'animals',
        },
    {
        url: mudTurtle,
            correctURLs: [93, 229, 527, 173, 88, 174], 
            wrongVizURLs: [72, 322], 
            classLabels:['mud turtle', 'mud turtles', 'turtle', 'turtles', 'box turtle',
        'box turtles'],
            hint: 'animals',
        },
    {
        url: kingSnake,
            correctURLs: [6, 231, 23, 226, 39, 72], 
            wrongVizURLs: [280, 275], 
            classLabels:['king snake', 'king snakes', 'snake', 'snakes'],
            hint: 'animals',
        }
    ],
    sea_animal:[
    {
    url: starfish,
        correctURLs: [280, 163, 375, 18, 71, 13], 
        wrongVizURLs: [177, 224], 
        classLabels:['starfish', 'starfishes'],
        hint: 'animals',
    },
    {
    url: seaUrchin,
        correctURLs: [163, 485, 123, 18, 379, 94], 
        wrongVizURLs: [332, 25], 
        classLabels:['sea urchin', 'urchin', 'urchins', 'sea urchins'],
        hint: 'sea animal',
    },
    {
        url: seaAnemone,
            correctURLs: [280, 70, 200, 102, 95, 441], 
            wrongVizURLs: [76, 146], 
            classLabels:['sea anemone', 'anemone', 'anemones', 'sea anemones'],
            hint: 'sea animal',
        }
    ],
    fruit:[
    {
        url: banana,
            correctURLs: [47, 259, 44, 57, 131, 150], 
            wrongVizURLs: [5, 299], 
            classLabels:['banana', 'bananas'],
            hint: 'fruits',
    },
    {
        url: orange,
            correctURLs: [9, 111, 285, 435, 485, 239], 
            wrongVizURLs: [512, 196], 
            classLabels:['orange', 'oranges', 'tangerine', 'tangerines'],
            hint: 'fruits',
    },
    {
        url: pineapple,
            correctURLs: [2, 200, 96, 217, 61, 33], 
            wrongVizURLs: [79, 432], 
            classLabels:['pineapple', 'pineapples'],
            hint: 'fruits',
    },
    {
    url: pomegranate,
        correctURLs: [82, 20, 323, 307, 72, 231], 
        wrongVizURLs: [40, 434], 
        classLabels:['pomegranate', 'pomegranates'],
        hint: 'fruit',
    },
    {
        url: fig,
            correctURLs: [82, 114, 382, 73, 485, 307], 
            wrongVizURLs: [26, 52], 
            classLabels:['fig', 'figs'],
            hint: 'fruit',
        }
    ],
    vegetable:[
    {
            url: broccoli,
                correctURLs: [0, 462, 86, 21, 58, 376], 
                wrongVizURLs: [229, 292], 
                classLabels:['broccoli', 'broccolis'],
                hint: 'vegetables',
        },
        {
            url: corn,
                correctURLs: [109, 435, 326, 25, 198, 282], 
                wrongVizURLs: [30, 222], 
                classLabels:['corn', 'corns'],
                hint: 'vegetables',
        },
    {
    url: artichoke,
        correctURLs: [33, 328, 447, 82, 130, 462], 
        wrongVizURLs: [32, 229], 
        classLabels:['artichoke', 'artichokes'],
        hint: 'vegetable',
    },
    {
        url: bellPepper,
            correctURLs: [433, 294, 61, 16, 198, 43], 
            wrongVizURLs: [19, 154], 
            classLabels:['bell pepper', 'pepper', 'peppers', 'bell peppers'],
            hint: 'vegetable',
        },
    {
        url: cucumber,
            correctURLs: [2, 202, 433, 294, 511, 73], 
            wrongVizURLs: [355, 452], 
            classLabels:['cucumber', 'cucumbers'],
            hint: 'vegetable',
        },
    {
        url: mushroom,
            correctURLs: [301, 433, 462, 13, 72, 527], 
            wrongVizURLs: [176, 463], 
            classLabels:['mushroom', 'mushrooms'],
            hint: 'vegetable',
        }
    ],
    instrument:[
    {
            url: violin,
                correctURLs: [66, 348, 238, 98, 131, 47], 
                wrongVizURLs: [396, 208], 
                classLabels:['violin', 'violins', 'viola', 'violas', 'cello', 'cellos'],
                hint: 'musical instrument',
        },
        {
            url: piano,
                correctURLs: [338, 23, 156, 31, 249, 244], 
                wrongVizURLs: [519, 343], 
                classLabels:['piano', 'pianos', 'grand piano', 'grand pianos'],
                hint: 'musical instrument',
        },
    {
    url: drum,
        correctURLs: [84, 70, 42, 91, 38, 180], 
        wrongVizURLs: [103, 58], 
        classLabels:['drum', 'drums', 'steel drum', 'steel drums'],
        hint: 'musical instrument',
    },
    {
        url: acousticGuitar,
            correctURLs: [348, 11, 108, 79, 93, 70], 
            wrongVizURLs: [105, 135], 
            classLabels:['guitar', 'guitars', 'acoustic guitar', 'acoustic guitars'],
            hint: 'musical instrument',
        },
    {
        url: flute,
            correctURLs: [75, 12, 368, 23, 4, 197], 
            wrongVizURLs: [156, 500], 
            classLabels:['flute', 'flutes'],
            hint: 'musical instrument',
        },
    {
        url: harmonica,
            correctURLs: [433, 435, 467, 132, 61, 421], 
            wrongVizURLs: [494, 45], 
            classLabels:['harmonica', 'harmonicas'],
            hint: 'musical instrument',
        }
    ],
    transportation:[
    {
            url: bicycle,
                correctURLs: [5, 74, 35, 27, 409, 251], 
                wrongVizURLs: [10, 435], 
                classLabels:['bicycle', 'bicycles', 'bike', 'bikes', 'bicycle-for-two'],
                hint: 'transportation',
        },
        {
            url: car,
                correctURLs: [55, 409, 123, 498, 23, 273], 
                wrongVizURLs: [410, 8], 
                classLabels:['car', 'cars', 'passenger car', 'passenger cars', 'sedan', 'sedans'],
                hint: 'transportation',
        },
    {
    url: canoe,
        correctURLs: [27, 507, 462, 11, 13, 70], 
        wrongVizURLs: [286, 322], 
        classLabels:['canoe', 'boat', 'canoes', 'boats'],
        hint: 'transportation',
    },
    {
        url: tractor,
            correctURLs: [169, 243, 72, 11, 375, 91], 
            wrongVizURLs: [240, 204], 
            classLabels:['tractor', 'tractors'],
            hint: 'transportation',
        },
    {
        url: warplane,
            correctURLs: [217, 208, 347, 104, 433, 83], 
            wrongVizURLs: [211, 480], 
            classLabels:['warplanes', 'warplane', 'jet', 'jets', 'plane', 'planes'],
            hint: 'transportation',
        }
    ],
    electronics:[
    {
            url: laptop,
                correctURLs: [47, 3, 218, 234, 433, 11], 
                wrongVizURLs: [262, 66], 
                classLabels:['laptop', 'laptops', 'computer', 'computers'],
                hint: 'electronics',
        },
        {
            url: electricFan,
                correctURLs: [102, 127, 15, 237, 47, 408], 
                wrongVizURLs: [394, 419], 
                classLabels:['fan', 'fans', 'electric fan', 'electric fans'],
                hint: 'electronics',
        },
        {
            url: keyboard,
                correctURLs: [441, 502, 47, 23, 104, 96], 
                wrongVizURLs: [341, 35], 
                classLabels:['keyboard', 'keyboards', 'computer keyboard', 'computer keys', 'keys'],
                hint: 'electronics',
        },
    {
    url: camera,
        correctURLs: [23, 60, 31, 18, 49, 502], 
        wrongVizURLs: [254, 343], 
        classLabels:['cameras', 'camera', 'reflex camera', 'reflex cameras'],
        hint: 'electronics',
    }
    ]
