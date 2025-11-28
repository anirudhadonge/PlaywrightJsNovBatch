/**
 xpath
 * //<tagName>[<Property>=<value>]
 * //button[@class='dropbtn']
 * 
 * Navigate
 * 1. Parent to Child //button[@class='dropbtn']//button[@class='child'] e.g. //div[@class='userform']//input[@title='Email']
 * 2. Child To Parent and ancestors
 *     a. child to a parent   //<html tag>[]//parent::<parent html Tag>[<attribute>=<Value>] e.g //input[@title='Email']//parent::div[@class='userform']
 *     b. child to Ancestor   <Xpath of Child>//acestor::<html tab of Ancestor>[name="company"] e.g //input[@title='Email']//ancestor::div[@class = 'elementor-widget-container']
 * 3. Moving between siblings.
 *     a. Follow-siblings : //a[text()='Garry.White']//parent::td//following-sibling::td[text()='Enabled']
 *     b. Preceding-siblings : //td[text()='Garry White']//preceding-sibling::td[text()='ESS'] e.g //input[@title='Password']//preceding-sibling::input
 * 
 *  4. text() e.g //label[text()='User Email']
 *  5. contains() : you have a partial value of the attribute //<html tag>[contains(@<attribute>,<attribute's partial Value>)] e.g. //input[contains(@title,"Emai")]
 *  6. AND / OR : //input[@class="nameFld" and contains(@placeholder,'First')] e.g. //input[@class="selectors-input jsSelector" and @title="Email"] and //input[@class="selectors-input jsSelector" or @title="Email"]
 *  7. * : it represents any html element 
 *
 * css
 */
/**
 * css locators
 * 1. class : its is represented by '.' .<value of class>
 * 2. id : it is represented by '#'  #<value of id>
 * 3. Other Attribute  syntax [<attribute>='<value of attribute>']
 * 4. Parent to child 
 * 5. element to the Immmediate sibling : '+' operator
 */