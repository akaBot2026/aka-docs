# [11]Type Into - akaBot Docs

RCA.Activities.Browser.TypeInto

## **Description**

The Type Into activity allows you to type texts into any text field within the webpage.

![Browser_TypeInto](/img/877e21_63d6a4a-Screenshot_2021-05-25_155118.jpg)

(\*For mandatory)

## **In the body of the activity**

* **Pick target element**\* - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.
* **Text (String)**\* - The text to type into. This property supports String variable so it must be quoted.  
  Eg: “My name is”

## **Properties**

**Before Type**

* **Empty Field (Checkbox)** - A checkbox specifies whether target field would be cleared before typing.  
  **・Check** – Empty the field.  
  **・Uncheck** – Not empty the field.

**Common**

* **Continue on Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Text (String)**\* - The text to type into. This property supports String variable so it must be quoted.  
  E.g: “My name is”
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: [12564767] Type Into
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **InputMethod (Dropdown List) -**Defines how the system performs the click action on the target element.
  + Default: Automatically selects the best method based on the environment
  + Hardware: Simulates a real mouse click (requires visible UI and active screen).
  + Software: Performs a background click at system level (no physical mouse movement required).

**Scroll**: To control how the system scrolls the screen to make the target element visible before performing an action*.*

* ​​​​​​​**Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):**The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:**Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300

Table of Content

* [Description](#HDescription)
* [In the body of the activity](#HInthebodyoftheactivity)
* [Properties](#HProperties)