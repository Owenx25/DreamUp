DreamUp Alpha
==========================
Group:
    Owen McCormack - Leader
    Jacob Phillips

Status:
    Currently our app is approaching the end of the static portion of development. All of the screens we want in the app have the UI that we are looking for and properly function using mock data. We still need to integrate the DB so that the UI can become dynamic with real user's data and adjust the navigation so that the screens transition properly. We also want to add a popup allowing repeating reminders to be set when the user wants.

    More specifically our app currently has the following:
        - A detailed Dashboard screen with 3 different kinds of containers (DreamDashboard)
            - a "Recent Dreams Container" shows the Dreams the user has entered via small cards
            - a "Nightmares Container" shows the Nightmares the user has entered via small cards
            - a "Weekly Fragments Graph Container" shows how many fragments each dream entry had this week
        - An open source touch canvas screen (VisionCanvas)
            - integrated from https://www.npmjs.com/package/@terrylinla/react-native-sketch-canvas
            - Once the user has created a drawing they save it to their phone
        - An add fragments screen (DreamFragmentScreen)
            - fragments are single sentances that explain something from the screen
            - The user must enter one fragment on this screen to continue
            - The user can also delete and add multiple fragments on this screen
        - A orderly Dream screen showing all dream specific info to the user(DreamScreen)
            - The screen consists of Vision, Fragments, Tags, Reaction, and Description sections
            - It has a Edit mode where new fragments and tags can be added as well as a description

    What works:
        - All screens mentioned above
    What doesn't work:
        - Some of the navigation between the screens is off, ex. Going back from DreamScreen goes back to DreamFragmentScreen when it should return to the DreamDashboard
    