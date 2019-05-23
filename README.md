# auto-gsnetguest
A small CLI to log into gsnetguest.

I hate repetitive tasks. I'm a software writer, after all! So, having to repeat login steps everyday is a pain, and that's why `auto-gsnetguest` will help anyone to just login into a Wi-fi Network called GSNETGUEST (this Wi-Fi Network has one of those pesky login pages where you have to type your username and password after connecting to it and click not one, but two buttons so you can enter the network!).

Read the steps bellow and soon you'll be logging in with just a click.

# Installation

auto-gsnetguest is a command line utility written in node.js. For it to work, you must first download and install node in your computer. You can do so by following the [link](https://nodejs.org/en/download/).

After that, use `npm` to install the utility. You should install it globally so that you can call the utility on any directory.

```
npm install -g auto-gsnetguest
```

# Usage

To login, first connect to the Wi-Fi Network and then call the utility passing your username and password.

```
gsnetguest myusername@somedomain.com Str4n9eP4ssw0rd
```

To avoid having to always type your username and password, you can create a simple bash or cmd script to save you time. 

## Create a cmd file on Windows

On Windows, open notepad and type the same command above on it. Save it as "login.cmd" (type the quotation marks so that notepad will save it with the correct file extension) on a folder with easy access -- for instance, the Desktop.

## Create a bash script on a *nix based system (Mac, Linux, etc.)

Just open your favorite editor (i.e. vim) and then type the shabang followed by the command, as below:

```
!/usr/bash
gsnetguest myusername@somedomain.com Str4n9eP4ssw0rd
```

Save it as login.sh and flag it for execution:

```
chmod +x login.sh
```


> **Important** 
> You'll be saving your password in a file, which is not recommended. Do so at your own risk!



