# Sajt Škole koda

Vidi [skolakoda.org](https://skolakoda.org/)

## Instalacija

Prvo instaliraš [ruby](https://rubyinstaller.org/downloads/). Potom:

```
gem install bundler
gem install jekyll
```

## Razvoj

```
bundle install
bundle exec jekyll serve
```

### Parametri

Da uključi i neobjavljene skice članaka:
```
bundle exec jekyll serve --drafts
```

Da prikazuje samo poslednji post:
```
bundle exec jekyll serve --limit_posts 1
```

Da pravi samo ono što je menjano (najbrže ali eksperimentalno)
```
bundle exec jekyll serve --incremental
```
ili

```
bundle exec jekyll serve --drafts --incremental
```

## TODO

Bitne novosti u Školi koda:
Od januara radionice kreću vikendom, da ih i zaposleni mogu pohađati.
Radnim danima prostor postaje Hub, mesto gde možete u miru raditi.
(boostovati post)

Sve više smo orjentisani na praksu, otvaramo:
- Frontend odeljenje (JS aplikacije)
- Backend odeljenje (Node.js, Python, PHP)
- Odeljenje za dizajn (CSS, Sass)

- spojiti html i css
- vratiti kutijice
- zen mudrosti na blog
- napraviti letke
- vratiti decji kurs i dodati kurseve u pripremi
- lagane ikonice https://shkspr.mobi/blog/2017/11/super-tiny-website-logos-in-svg/
- php na srpskom: https://phpsrbija.github.io/php-the-right-way/
- dodati paralax pomeranje mišem u gornji prostor

<!--
sadrzaj:
https://www.toptal.com/algorithms/computability-theory-complexity
https://profesorka.wordpress.com/2012/06/11/pokazivaci-3/
https://profesorka.wordpress.com/2012/06/24/nizovi-2/

slike:
https://cdn-images-1.medium.com/max/2000/1*8NX1BJ5azRg2uhNnTgwUTg.jpeg
https://pixabay.com/en/children-win-success-video-game-593313/
https://pixabay.com/en/apple-brick-wall-computer-cup-1854101/
https://pixabay.com/en/apple-computer-cup-electronics-1853306/
https://pixabay.com/en/cyber-glasses-virtual-virtual-world-1938449/
https://damjanpavlica.files.wordpress.com/2014/04/stari-programer.jpg
vr: http://www.vrupple.com/wp-content/uploads/2016/11/headset-footer.jpg
-->

## Dijkstra

Don't blame me for the fact that competent programming will be too difficult for "the average programmer" — you must not fall into the trap of rejecting a surgical technique because it is beyond the capabilities of the barber in his shop around the corner.
Dijkstra (1975) Comments at a Symposium (EWD 512).

as long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem.
The Humble Programmer (1972)

LISP has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.
The Humble Programmer (1972)

If you want more effective programmers, you will discover that they should not waste their time debugging, they should not introduce the bugs to start with.
The Humble Programmer (1972)

The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.
How do we tell truths that might hurt? (1975)

It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration.
How do we tell truths that might hurt? (1975)

I mean, if 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am looking over your shoulders and say to yourself "Dijkstra would not have liked this", well, that would be enough immortality for me.
Dijkstra (1995) "Introducing a course on calculi"

A picture may be worth a thousand words, a formula is worth a thousand pictures.
Dijkstra (EWD1239: A first exploration of effective reasoning)

It is not the task of the University to offer what society asks for, but to give what society needs.
Dijkstra (2000),

## Charles Babbage

We have already mentioned what may, perhaps, appear paradoxical to some of our readers, — that the division of labour can be applied with equal success to mental as to mechanical operations, and that it ensures in both the same economy of time.
p. 191; Ch. 20. "On the division of mental labour"

## Douglas Crockford

Don't worry about anything. Just do what you can and be the best you can be.

## Tom DeMarco

The business of software building isn't really high-tech at all. It's most of all a business of talking to each other and writing things down.

People under pressure don’t work better; they just work faster.

The manager's function is not to make people work, but to make it possible for people to work.

## Donald Knuth

Science is what we understand well enough to explain to a computer. Art is everything else we do.

Email is a wonderful thing for people whose role in life is to be on top of things. But not for me; my role is to be on the bottom of things. What I do takes long hours of studying and uninterruptible concentration.

In fact, my main conclusion after spending ten years of my life working on the TEX project is that software is hard. It’s harder than anything else I’ve ever had to do.

By understanding a machine-oriented language, the programmer will tend to use a much more efficient method; it is much closer to reality.

We have seen that computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty. A programmer who subconsciously views himself as an artist will enjoy what he does and will do it better.

## John von Neumann

Young man, in mathematics you don't understand things. You just get used to them.

If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.

## Dennis Ritchie

C is quirky, flawed, and an enormous success.

Another danger is that commercial pressures of one sort or another will divert the attention of the best thinkers from real innovation to exploitation of the current fad, from prospecting to mining a known lode.

## Bjarne Stroustrup

Within C++, there is a much smaller and cleaner language struggling to get out.

Anybody who comes to you and says he has a perfect language is either naïve or a salesman.

C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.

If you think it's simple, then you have misunderstood the problem.

One of the things I really like about programming languages is that it's the perfect excuse to stick your nose into any field. So if you're interested in high energy physics and the structure of the universe, being a programmer is one of the best ways to get in there.

Maybe "just one little global variable" isn't too unmanageable, but that style leads to code that is useless except to its original programmer.

## Alan Turing

A man provided with paper, pencil, and rubber, and subject to strict discipline, is in effect a universal machine.

The idea behind digital computers may be explained by saying that these machines are intended to carry out any operations which could be done by a human computer.

Machines take me by surprise with great frequency.

## Linus Torvalds

I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu).

If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program.

An infinite number of monkeys typing into GNU emacs would never make a good program.

See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too ;-)

If Microsoft ever does applications for Linux it means I've won.

Talk is cheap. Show me the code.

Those that can, do. Those that can't, complain.

Really, I'm not out to destroy Microsoft. That will just be a completely unintentional side effect.

## Rob Pike

Object-oriented design is the roman numerals of computing.

## Kent Beck

I'm not a great programmer; I'm just a good programmer with great habits.

When you find you have to add a feature to a program, and the program's code is not structured in a convenient way to add the feature, first refactor the program to make it easy to add the feature, then add the feature.

When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous.

## Martin Fowler

With testing, I know straight away when I added a bug. That lets me fix the bug immediately, before it can crawl off and hide.

There are few things more frustrating or time wasting than debugging. Wouldn't it be a hell of a lot quicker if we just didn't create the bugs in the first place?

I think one of the most valuable rules is avoid duplication.

Often designers do complicated things that improve the capacity on a particular hardware platform when it might actually be cheaper to buy more hardware.

## John D. Carmack

If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it.

The situation is so much better for programmers today - a cheap used PC, a linux CD, and an internet account, and you have all the tools necessary to work your way to any level of programming skill you want to shoot for.

Story in a game is like a story in a porn movie. It's expected to be there, but it's not that important.

## Paul Graham

The best thing software can be is easy, but the way to do this is to get the defaults right, not to limit users' choices.

The most important thing is to be able to think what you want, not to say what you want.

The top 5% of programmers probably write 99% of the good software.

There are few sources of energy so powerful as a procrastinating grad student.

There's no switch inside you that magically flips when you turn a certain age or graduate from some institution. You start being an adult when you decide to take responsibility for your life. You can do that at any age.

It's not so important what you work on, so long as you're not wasting your time.

## Bill Gates

There's only one trick in software, and that is using a piece of software that's already been written.

Sometimes we do get taken by surprise. For example, when the Internet came along, we had it as a fifth or sixth priority.

Your most unhappy customers are your greatest source of learning.

If you show people the problems and you show people the solutions they will be moved to act.

The finest pieces of software are those where one individual has a complete sense of exactly how the program works. To have that, you have to really love the program and concentrate on keeping it simple, to an incredible degree.

We're no longer in the days where everything is super well crafted. But at the heart of the programs that make it to the top, you'll find that the key internal code was done by a few people who really know what they were doing.

Success is a lousy teacher. It seduces smart people into thinking they can't lose.

## Ward Cunningham

It was a turning point in my programming career when I realized that I didn't have to win every argument. I

What is simplicity? Simplicity is the shortest path to a solution.

Putting a new feature into a program is important, but refactoring so new features can be added in the future is equally important.

## Albert Einstein

A new idea comes suddenly and in a rather intuitive way. But intuition is nothing but the outcome of earlier intellectual experience.

## Ludwig Wittgenstein

The limits of my language mean the limits of my world.

The limits of my language are the limits of my mind.

An entire mythology is stored within our language.

## George Boole

The design of the following treatise is to investigate the fundamental laws of those operations of the mind by which reasoning is performed; to give expression to them in the symbolical language of a Calculus, and upon this foundation to establish the science of Logic and construct its method.

Let us conceive, then, of an algebra in which the symbols x, y z etc. admit indifferently of the values 0 and 1, and of these values alone The laws, the axioms, and the processes, of such an Algebra will be identical in their whole extend with the laws, the axioms, and the processes of an Algebra of Logic.

That language is an instrument of human reason, and not merely a medium for the expression of thought, is a truth generally admitted.

## Alan Perlis

A programming language is low level when its programs require attention to the irrelevant.

If you have a procedure with 10 parameters, you probably missed some.

A language that doesn't affect the way you think about programming, is not worth knowing.

Simplicity does not precede complexity, but follows it.

A year spent in artificial intelligence is enough to make one believe in God.

Dealing with failure is easy: Work hard to improve.

The best book on programming for the layman is Alice in Wonderland, but that's because it's the best book on anything for the layman.

## Razno

The cleaner and nicer the program, the faster it's going to run. And if it doesn't, it'll be easy to make it fast.
    Joshua Bloch

 And programming computers was so fascinating. You create your own little universe, and then it does what you tell it to do.

    Vint Cerf

Computer programs are the most intricate, delicately balanced and finely interwoven of all the products of human industry to date.

  James Gleick

The effective exploitation of his powers of abstraction must be regarded as one of the most vital activities of a competent programmer.

    Edsger W. Dijkstra

No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.

    Mark Gibbs

Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.

    Alan Kay

Programs must be written for people to read, and only incidentally for machines to execute.

    Abelson & Sussman, "Structure and Interpretation of Computer Programs",

SQL, Lisp, and Haskell are the only programming languages that I've seen where one spends more time thinking than typing.

    Philip Greenspun

Real Programmers always confuse Christmas and Halloween because Oct31 == Dec25.

    Andrew Rutherford

The most effective debugging tool is still careful thought, coupled with judiciously placed print statements.

    Brian Kernighan

The last bug isn't fixed until the last user is dead.

    Sidney Markowitz

Python is more concerned with making it easy to write good programs than difficult to write bad ones.

    Steve Holden

Software engineering is the part of computer science which is too difficult for the computer scientist.

    Friedrich Bauer

The amateur software engineer is always in search of magic, some sensational method or tool whose application promises to render software development trivial. It is the mark of the professional software engineer to know that no such panacea exist.

    Grady Booch

the reason that we think computer science is about computers is pretty much the same reason that the Egyptians thought geometry was about surveying instruments: when some field is just getting started and you don't really understand it very well, it's very easy to confuse the essence of what you're doing with the tools that you use.

  Hal Abelson

Is studying computer science the best way to prepare to be a programmer? No. the best way to prepare is to write programs, and to study great programs that other people have written

  Bill Gates

Computer science... differs from physics in that it is not actually a science. It does not study natural objects. Rather, computer science is like engineering; it is all about getting something to do something.

    Richard Feynman

The purpose of computing is insight, not numbers.

    Richard Hamming

Computer science is an empirical discipline. [...] Each new machine that is built is an experiment. Actually constructing the machine poses a question to nature; and we listen for the answer by observing the machine in operation and analyzing it-

  Allen Newell

Computer science research is different from these more traditional disciplines. Philosophically it differs from the physical sciences because it seeks not to discover, explain, or exploit the natural world, but instead to study the properties of machines of human creation.

    Dennis Ritchie

A good scientist is a person with original ideas. A good engineer is a person who makes a design that works with as few original ideas as possible. There are no prima donnas in engineering.
    Freeman Dyson

I was originally supposed to become an engineer but the thought of having to expend my creative energy on things that make practical everyday life even more refined, with a loathsome capital gain as the goal, was unbearable to me.
    Albert Einstein

Computers are no more able to create information than iPods are capable of creating music.
    Stephen C. Meyer

All of our exalted technological progress, civilization for that matter, is comparable to an axe in the hand of a pathological criminal.
    Albert Einstein

The most important and urgent problems of the technology of today are no longer the satisfactions of the primary needs or of archetypal wishes, but the reparation of the evils and damages by the technology of yesterday.
    Dennis Gabor

When a distinguished but elderly scientist states that something is possible, they are almost certainly right. When they state that something is impossible, they are very probably wrong.
    Arthur C. Clarke

Any sufficiently advanced technology is indistinguishable from magic.
    Arthur C. Clarke

The liberating force of technology—the instrumentalization of things—turns into ... the instrumentalization of man.
    Herbert Marcuse

Machinery mutilates people today, even if it also feeds them.
  Max Horkheimer and Theodor W. Adorno

## Brian Foote and Joseph Yoder

While much attention has been focused on high-level software architectural patterns, what is, in effect, the de-facto standard software architecture is seldom discussed: the BIG BALL OF MUD.

All too many of our software systems are, architecturally, little more than shantytowns. Investment in tools and infrastructure is too often inadequate. Tools are usually primitive, and infrastructure such as libraries and frameworks, is undercapitalized. Individual portions of the system grow unchecked, and the lack of infrastructure and architecture allows problems in one part of the system to erode and pollute adjacent portions. Deadlines loom like monsoons, and architectural elegance seems unattainable.

A BIG BALL OF MUD is haphazardly structured, sprawling, sloppy, duct-tape and bailing wire, spaghetti code jungle.

THROWAWAY CODE is quick-and-dirty code that was intended to be used only once and then discarded. However, such code often takes on a life of its own, despite casual structure and poor or non-existent documentation. It works, so why fix it?

The way to arrest entropy in software is to refactor it. A sustained commitment to refactoring can keep a system from subsiding into a BIG BALL OF MUD.

A number of forces can conspire to drive even the most architecturally conscientious organizations to produce BIG BALLS OF MUD.

One reason that software architectures are so often mediocre is that architecture frequently takes a back seat to more mundane concerns such as cost, time-to-market, and programmer skill.

A program’s user interface presents the public face of a program, much as a building’s exterior manifests its architecture. However, unlike buildings, only the people who build a program see how it looks inside.

Managing a large project is a qualitatively different problem from managing a small one, just as leading a division of infantry into battle is different from commanding a small special forces team.

Often, the people who control and manage the development process simply do not regard architecture as a pressing concern.

One reason for the popularity and success of BIG BALL OF MUD approaches might be that this approach doesn't require a hyperproductive virtuos architect at every keyboard.

Sadly, architecture has been undervalued for so long that many engineers regard life with a BIG BALL OF MUD as normal.

Yet, a case can be made that the casual, undifferentiated structure of a BIG BALL OF MUD is one of its secret advantages, since forces acting between two parts of the system can be directly addressed without having to worry about undermining the system’s grander architectural aspirations.

Reviews and pair programming provide programmers with something their work would not otherwise have: an audience. Sunlight, it is said is a powerful disinfectant. An immediate audience of one's peers provides immediate incentives to programmers to keep their code clear and comprehensible, as well as functional.

Time, or a lack thereof, is frequently the decisive force that drives programmers to write THROWAWAY CODE.

When you build a prototype, there is always the risk that someone will say "that's good enough, ship it". One way to minimize the risk of a prototype being put into production is to write the prototype in using a language or tool that you couldn't possibly use for a production version of your product.

Not every program need be a palace. A simple throwaway program is like a tent city or a mining boomtown, and often has no need for fifty year solutions to its problems, given that it will give way to a ghost town in five.

The real problem with THROWAWAY CODE comes when it isn't thrown away.

Sometimes it’s just easier to throw a system away, and start over.

In the end, software architecture is about how we distill experience into wisdom, and disseminate it.

People build BIG BALLS OF MUD because they work. In many domains, they are the only things that have been shown to work.
