# Encryption & Decryption of Text Using Caesar Cipher

Caesar Cipher is one of the simplest and most widely known encryption techniques. As we mention in class this method is a kind of substitution cipher in which each letter in the plain-text is replaced by a letter some fixed number of positions down the alphabet. Developed application should have following features;

1.  Number of shift countNo can be variable and application should take this parameter from file (Details given in following parts). And according to this number new dictionary created.

2.  Application should support encryption and decryption methods. These methods should be taken from file again (Details given in following parts). In encryption the text which is given as plain-text form (from file) should be converted to cipher-text according to dictionary created in first step. And this cipher-text should printed to screen. In decryption, encrypted text should be taken by application (From file) . Then according to dictionary in reverse order it should be converted back to plain-text.

## This Desktop Application Created By Electron Using Javascript

### can be used in 3 main desktop platforms:

-   MacOS
-   Linux
-   Windows

## For Use

Due to limitation of github, uploaded the executable files [here](https://drive.google.com/drive/folders/179x-URa2QbN3w7DL2l2kXVIIwcMf9dtC?usp=sharing) you can download the executable files for your OS. <br />
`.dmg` for mac <br />
`.exe` for windows <br />
`.AppImage` for linux<br />
`.deb` for linux<br />

> <b>Just Download the Compatible file of your operating system and open that then:</b>

-   insert your text
-   select your prefered language
-   select process type Encryptin or Decryption
-   set prefer shift count

<br/>
 =========================================================================

<br/>

### Demo

#### Encryption

![Encryption](./readme/1.png "Encrypting MOHSEN text")

#### Decryption

![Decryption](./readme/2.png "Decrypting")

<br />

## For Developing

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/mohsenkhashei/encryptionDecryption-Caesar-Cipher
# Go into the repository
cd encryptionDecryption-Caesar-Cipher
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## For Packaging

```bash
# generating mac version
npm run build:mac
# generating linux version
npm run build:linux
# generating windows version
npm run build:win
```
