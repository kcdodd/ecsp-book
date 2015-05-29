# ecsp-book
Book for essentials of computer science and computer science principles, using javascript as a programming language.

### Download Compiled PDF

https://github.com/kcdodd/ecsp-book/raw/master/ecsp.pdf

### Purpose

The target audience for this book is a student who has no prior exposure to computer science, including early high
school levels. My goal is to have portions of the book which are not platform specific covering general concepts used
in computer science. Then portions of the book which use a specific platform to implement
algorithms and applications of those ideas, as well as getting the student to a point
that they can make something they enjoy the results of.

Platform specifics will include:
- JavaScript - programming
- HTML/CSS - visual formatting
- [GitHub](http://github.com) - file revision management
- [Inkscape](http://inkscape.org) and [GIMP](http://gimp.org) - image creation and manipulation
- [Node.js](http://nodejs.org) - applications and server/client

### Dependencies to compile the book
- LaTeX (EG [TeX Live](https://www.tug.org/texlive/))
- [Python](https://www.python.org/downloads/)
- [Pygments](http://pygments.org/download/)
- [minted](https://github.com/gpoore/minted)

Once everything is installed, you'll have to add the -shell-escape flag when you call LaTeX because of minted. Otherwise it will tell you to add it.

### Contributing
This book is a work in progress.

If you would like to help, please feel free to fork this project, make additions
or corrections, and submit a pull request to include your changes/additions.

I have chosen JavaScript as the first language. If you wish to use sections of the
book but introduce a different language, feel free to do that. If you add
to the non-language-specific topics, I would appreciate it if we can still merge
that content between languages.
