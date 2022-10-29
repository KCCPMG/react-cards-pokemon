React Cards
===========

This exercise will give you practice writing your own custom hooks. We’ve provided you with an app, but the code could use some refactoring.

Step One: Read the Code
-----------------------

*   Start by downloading the app, and getting it set up:
    
    [Download](https://curric.springboard.com/software-engineering-career-track/default/exercises/react-cards-pokemon.zip)
    

The app uses two APIs, the Deck of Cards API and the Pokemon API, to generate different types of cards on the page.

Play around with the app to get a sense for how it works. Draw out the component hierarchy in your pair and make sure you understand how all of the pieces fit together.

Step Two: **_useFlip_**
-----------------------

Both the **_PokemonCard_** and the **_PlayingCard_** components can be flipped over when clicked on. You may have noticed that there is some duplicate code in these components. Create a **_hooks.js_** file in **_src/_**, and in that file write a custom hook called **_useFlip_** which will hold the business logic for flipping any type of card.

**_useFlip_** doesn’t need to take an argument, and similar to **_useState_**, it should return an array with two elements. The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.

Once you’ve written this hook, refactor **_PokemonCard_** and **_PlayingCard_** to use this custom hook.

Step Three: **_useAxios_** in **_PlayingCardList_**
---------------------------------------------------

In the **_PlayingCardList_** component, we initialize an empty array in state, and add to it via an AJAX request we make with **_axios_**. Since we use **_axios_** in a few components, let’s move this logic into a function called **_useAxios_**.

**_useAxios_** should take in a URL, and similar to **_useState_**, it should return an array with two elements. The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array.

Once you’ve written this hook, refactor **_PlayingCardList_** to use this custom hook. (Don’t worry about **_PokeDex_** for now - that’s coming in the next part!

Step Four: **_useAxios_** in **_PokeDex_**
------------------------------------------

**_PokeDex_** also make AJAX requests, but this one’s a bit trickier. **_PlayingCardList_** makes a request to the same endpoint every time, but the endpoint in **_PokeDex_** depends on the name of the pokemon.

Figure out a way to modify your **_useAxios_** hook so that when you call **_useAxios_** you can just provide a base url, and when you want to add to your array of response data in state, you can provide the rest of the url.

Once you’ve done this, refactor **_PokeDex_** to use **_useAxios_**. Make sure **_PlayingCardList_** still works too!

Further Study: Removing response data
-------------------------------------

Add two buttons to the page: one that will erase all of the playing cards in state, and one that will erase all of the pokemon cards.

Since these arrays are controlled from within the **_useAxios_** hook, one way to approach this would be to have **_useAxios_** have a third element in its return array: a function that will remove everything from the array in state.

Further Study: Minimizing state
-------------------------------

The original application threw all of the response data into state, even though we didn’t use all of it. For example, we only need an image url from the Deck of Cards API, and the Pokemon API gives us a ton of data we don’t need.

One way to avoid throwing all of this information in state is to pass a formatting function to **_useAxios_**. This function should take the response data and extract only the information we need to render our component.

Write two formatting functions - one for our playing card and one for our Pokemon card - and then refactor **_useAxios_** to accept a formatting function.

At the end of this process, our array in state for **_PlayingCardList_** should look like

`[{ id, image }, ...]` ,

and our array in state for **_PokeDex_** should look like

`[{ id, front, back, name, stats: [{ name, value }, ...] }, ... ]`.

Further Study: **_useLocalStorage_** hook
-----------------------------------------

If we sync our arrays of state data to local storage, we could persist our cards even after a page refresh. Let’s build a custom hook called **_useLocalStorage_** which works like **_useState_**, except it also syncs to local storage after every state change, and tries to read from local storage when the component renders.

**_useLocalStorage_** should accept two arguments. The first should be a key, corresponding to the key in local storage. The second should be an initial value to put into local storage (assuming no value already exists).

Once you have written this hook, refactor **_useAxios_** to use **_useLocalStorage_** instead of **_useState_**.

Solution
--------

[View our solution](https://curric.springboard.com/software-engineering-career-track/default/exercises/react-cards-pokemon/solution.html)