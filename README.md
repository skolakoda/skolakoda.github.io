# Škola koda

Učimo narod programiranju!

Poseti nas na [skolakoda.org](https://skolakoda.org/)

## Preduslovi

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

- dodati js editor svuda
- dodati paralax pomeranje mišem u gornji prostor
- zen mudrosti na blog
- napraviti letke
- vratiti decji kurs i dodati kurseve u pripremi
- lagane ikonice https://shkspr.mobi/blog/2017/11/super-tiny-website-logos-in-svg/
- php na srpskom: https://phpsrbija.github.io/php-the-right-way/

<!--
sadrzaj:
https://www.toptal.com/algorithms/computability-theory-complexity
https://profesorka.wordpress.com/2012/06/11/pokazivaci-3/
https://profesorka.wordpress.com/2012/06/24/nizovi-2/

slike:
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
