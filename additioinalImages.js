import starfish from "http://farm1.static.flickr.com/144/360856509_c9ac3fc352.jpg"
import spiderMonkey from "http://farm3.static.flickr.com/2406/2088050468_1f51fe21f1.jpg"
import mudTurtle from "https://farm4.static.flickr.com/3077/2606965873_374efab5f2.jpg"
import kingSnake from "http://farm4.static.flickr.com/3236/2816375512_f5bae32a9d.jpg"
import banana from "http://farm3.static.flickr.com/2192/2316463108_09c5e20ab1.jpg"
import orange from "https://farm4.static.flickr.com/3089/2348025971_5e15d11046.jpg"
import pineapple from "http://farm1.static.flickr.com/247/523350904_200d70b604.jpg"
import raspberry from "https://farm2.static.flickr.com/1329/758512644_9aa098ebf5.jpg"
import broccoli from "http://farm4.static.flickr.com/3185/2537371367_90404c652f.jpg"
import asparagus from 'http://farm1.static.flickr.com/203/492052984_f77532f427.jpg'
import lettuce from "https://farm1.static.flickr.com/190/470564310_c68e287049.jpg"
import corn from "https://farm3.static.flickr.com/2074/1657881983_905aca7086.jpg"
import piano from "https://farm3.static.flickr.com/2237/2347762743_16e9725654.jpg"
import trumpet from "https://www.trevorjonesltd.co.uk/images/Besson_Sovereign_Echo_Cornet.jpg"
import violin from "https://static.flickr.com/2130/2043231796_09f890c848.jpg"
import sunflower from "http://farm1.static.flickr.com/17/22460824_8292bf4295.jpg"
import palmTree from "https://farm2.static.flickr.com/1036/930144729_59540544ca.jpg"
import car from "http://farm1.static.flickr.com/27/59613680_ea2191e879.jpg"
import bicycle from "https://farm2.static.flickr.com/1090/1441125154_341230126c.jpg"
import electricFan from "http://static.flickr.com/3001/2809714327_269edc0203.jpg"
import laptop from "http://farm1.static.flickr.com/41/82236949_693a4f4b58.jpg"
import keyboard from "http://static.flickr.com/2045/2220676683_215f8c11c0.jpg"

export const StaticData = {
    animal:[
    {
    url: starfish,
        correctURLs: [280, 163, 375, 18, 71, 13], 
        wrongVizURLs: [177, 224], 
        classLabels:['starfish', 'starfishes'],
        hint: 'animals',
    },
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
        },
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
        }
    ]



}