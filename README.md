# Stacks

Stacks is my clone for the popular app and site, Slack!

If you haven't used it, Slack (and Stacks) is a popular social media site used by communities, especially companies. 
It advertises as an alternative to emails, since it is much more sleek and efficient. 
Unlike Stacks, Slack has the ability to send notifications, send files, add reactions, and start threads based on messages.
Each Slack community has its own "Workspace", which are isolated silos from each other One user can be a part of many workspaces, and each workspace has many users, and channels.

Channels are essentially organized group chats, with the increased ability to moderate members and messages. Each channel has many users and messages, but also belongs to a specific workspace. Only workspace members can find the appropriate channels belonging to each workspace.

Slack also provides the ability to send private (direct) messages. In addition, they also allow group private messages, which act pretty similar to a channel. 

Messages in each channel can be sent and received, edited, or deleted. Slack uses websockets for live-chat, enabling faster communication than traditional email.

-------------------

[Stacks!](https://stacks-of-slacks.herokuapp.com/#/)


Technologies Used:
  + Rails 5.2.4.1
  + PostgreSQL 12
  + ActionCable
  + Bcrypt
  + Redis
  + React
  + Redux
  + JQuery
  + Quill
  + Heroku
  
  Ruby on Rails was used for the backend, with PostgreSQL as the database. 
  React/Redux was used for the front end, in creating a SPA.
  Rails ActionCable and Redis was used for the live-chat feature, and Quill for the message input field.
  My site is hosted on Heroku.
  
  
-------------------

## **Some Features:**

  + Live Chat: 
  
      It was my first time dealing with websockets, and ActionCable. I had set-up my new message cycle differently
      than most online guides, so I had some trouble refactoring it fit my code. I had to make sure the page either 
      re-renders for all users or updates accordingly anytime one user interacts with my site. In addition, using redis for 
      production websockets was also something I had never used before. 
  + Dropdown Edit:
  
      Like Slack, I wanted to include a dropdown edit textbox having the message autofilled in. The difficulty is 
      grabbing the correct message to append the edit textbox, and also having the message autofilled in. 
      My solution was to pass in an "onclick" method to each message, with the ``` messageId ``` as an argument while
      mapping through an array of all messages. In ``` onClick ``` function, I could append the appropriate HTML elements
      to the corresponding ``` li ``` element. I also did the same for the delete-message button, even with my function
      in the parent component.
      
      
-------------------

## ***Code Snippets:***

## Appending Edit Box

```
  let messageLi = document.getElementById(`message${messageId}`)
  let message = messageLi.innerHTML
  let editform = document.createElement("form")
  let editforminput = document.createElement("input")
  let cancelButton = document.createElement("button")
  let submitButton = document.createElement("button")
```

after lots of styling with classnames...

```
  editform.appendChild(messageIdButton)
  editform.appendChild(editforminput)
  editform.appendChild(cancelButton)
  editform.appendChild(submitButton)
  messageLi.appendChild(editform)
```

## Quill Editor

``` import Quill from 'quill' ```

```
  let bindings = {
            submit: {
                key: "enter",
                handler: (range, context) => {
                    this.handleSubmit.bind(this)()
                }
            }
        }
        let quill = new Quill('#editor-container', {
            modules: {
                keyboard: {
                    bindings: bindings
                },
              toolbar: [
                ['bold', 'italic'],
                // ['link', 'blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }]
              ]
            },
            placeholder: 'Enter text',
            theme: 'snow'
          });
```


Features to Add:
  + Uploading Files and Profile Pictures (hosting on AWS)
  + Admin Rights
  + Direct Messages with Members as Header 



