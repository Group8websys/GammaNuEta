# GammaNuEta

tharwa
**Ayahth23**
README ayah

I very much enjoyed this lab. I was in charge of the homepage. I made a landingpage for the logo and social media and then a GNH page with the relevant information for the organization. 
I was trying to keep it simple but also creative. I put the GNH logo in the middle of the landingpage. Then I included a navigation bar/sign up button in the top right and also social media icons on the bottom left corner. There were a couple of hiccups that I faced throughout. 
First, I couldn't get the tiktok icon to work. I had to research tiktok icons that are compatible and then I added a js script to add the icon. This was actually a problem I faced in the previous lab. I couldn't get the tiktok icon to work but it seemed to have finally worked this time by using the "iconify" class and including the js script. 
<span class="iconify" data-icon="ion:logo-tiktok"></span>
 <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>

Second, for the GNH page I added a bunch of animation to the page. when you click on the link, the whole page creates an expand animation that makes the page slide in. This wasn't showing up for the longest time. I had created the overlay class and the expand animation to have the page slide once you click on it. I had forgotten to add the keyframe, which binds the animation to the div element (overlay). 

Then I added another animation to the image, header, text, and line(hr). For the image animation, I had it slideIn animation. At first I had the image show up on the landingpage on the bottom, but design wise, it didn't look as appealing. So then I chose to add it in another page with a slideIn animation. Then I added the title with a slideUp animation that makes it slide up with the image. I also did the same for the paragraph text but I made the animation time slower so that it shows up after the image and the title. I also added the hr line with the animation because I needed there to be a transition between the text and the contact information. And I also added the animation to it. 

I also thought to put the signup button part of the navigation bar because its a big part of what the organization does, so it would make sense to add it for easier access when you land on the gnh site.

Then lastly, I had an issue with my navigation bar links because they all had lines underneath like how generic links look like. I looked it up and after reading up about different text css, I found that text decoration was the main issue. I set that to none, and that removed all the lines underneath the links.

Sources I used to get inspiration for this lab: 
I found this very nice site that has cool designs for html, css, js, jquery, and bootstrap. 
I looked at a lot of their different animations and css effects to get inspiration on how to make this site look like.
https://freefrontend.com/css-slideshows/
https://dev.to/davidepacilio/40-free-html-landing-page-templates-3gfp
https://freefrontend.com/css-menu/
https://freefrontend.com/css-parallax/


-----------------------------------------------------------------------------------------------------
**Jialin Yu**
yuj14
https://github.com/jlin9533/websyslabs

For this lab, I am implementing the newsletter page. On the newsletter page, there is a sentence introducing Gamma Nu Eta's newsletter and the user can enter their email to the input field to join the newsletter maillist. I also wrote two javascript functions to display or hide a message in the input field. If the email field is empty and not focus by the user, a message "Enter your email" will show up. If the user focus on the field or enter information into the field, the message will disappear. Since we didn't implement any backend to the form, when the user click on "Join" the page will only refresh and no data will be stored.

Also, I move the navigation bar that Ayah made to a json file and add ajax codes to make it display on each page. The navigation bar will appear on top of each of our pages so we feel like using ajax can avoid duplicate codes. In the json file, there are five properties and each of them has a value of contents for each of our pages.

One of the problems that I faced during this lab was aligning the background images (GNH logo) on the newsletter page. And I found out W3school that there is a background-position CSS property can adjust the placement of the background image. Then I set the background position to right center and it displays as what i wanted. Another problem was I kept getting errors saying that my XMLHttpRequest is blocked by CORS policy and failed to load data after I implemented the ajax call. After a few minutes of researching, I figured that we need to be on a server to get data using ajax. Then I tried to open the site on localhost and it finally work out!