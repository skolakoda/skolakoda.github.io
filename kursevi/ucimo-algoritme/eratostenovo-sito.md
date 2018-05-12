---
title: Eratostenovo sito
layout: lekcija-algoritmi
permalink: /eratostenovo-sito
---

![](https://upload.wikimedia.org/wikipedia/commons/8/8c/New_Animation_Sieve_of_Eratosthenes.gif)

**Eratostenovo sito je jednostavan algoritam koji pronalazi sve proste brojeve na intervalu od 1 do nekog broja N. Osmislio ga je starogrčki naučnik i upravnik Aleksandrijske biblioteke Eratosten.**

Algoritam radi na nizu u kojem se na početku nalaze svi brojevi od 1 do N. Na početku, iz niza se uklanja broj jedan, jer on po definiciji nije prost. Nakon toga, algoritam uzima sljedeći broj u nizu i označava ga da je prost (u ovom slučaju to je boj 2) i iz niza uklanja sve njegove sadržioce (tj. brojeve djeljive sa 2), jer sigurno nisu prosti. Zatim se ponovo uzima sljedeći broj koji nije izbačen (broj 3) i uklanjaju se svi njegovi sadržaioci. S obzirom da je broj 4 uklonjen iz niza, jer je djeljiv sa 2, algoritam će uzeti broj 5. Ovaj postupak će se ponavljati i na kraju će u nizu ostati samo prosti brojevi.

**Kada implementiramo Eratostenovo sito, dovoljno je obraditi brojeve koji su manji ili jednaki √N.** Dakle, ako tražimo proste brojeve od 1 do 100, dovoljno je da iz niza izbacimo sadržioce brojeva koji su manji ili jednaki 10.

## Koraci algoritma

Predstavićemo rad algoritma koji traži sve proste brojeve od 1 do 100. Na početku imamo niz u kojem se nalaze svi brojevi od 1 do 100. Na početku ćemo izbaciti broj 1, jer po definiciji nije prost. Nakon toga, obilježavamo broj 2 kao prost, i izbacijemo sve njegove sadržioce.

<pre> <del>1</del>  <strong><span class="boja5">2</span></strong>  3  <del>4</del>  5  <del>6</del>  7  <del>8</del>  9 <del>10</del> 11 <del>12</del> 13 <del>14</del> 15 <del>16</del> 17 <del>18</del> 19 <del>20</del>
21 <del>22</del> 23 <del>24</del> 25 <del>26</del> 27 <del>28</del> 29 <del>30</del> 31 <del>32</del> 33 <del>34</del> 35 <del>36</del> 37 <del>38</del> 39 <del>40</del>
41 <del>42</del> 43 <del>44</del> 45 <del>46</del> 47 48 49 <del>50</del> 51 <del>52</del> 53 <del>54</del> 55 <del>56</del> 57 <del>58</del> 59 <del>60</del>
61 <del>62</del> 63 <del>64</del> 65 <del>66</del> 67 <del>68</del> 69 <del>70</del> 71 <del>72</del> 73 <del>74</del> 75 <del>76</del> 77 <del>78</del> 79 <del>80</del>
81 <del>82</del> 83 <del>84</del> 85 <del>86</del> 87 <del>88</del> 89 <del>90</del> 91 <del>92</del> 93 <del>94</del> 95 <del>96</del> 97 <del>98</del> 99 <del>100</del></pre>

Sljedeći broj koji nije izbačen je 3. Algoritam ga označava da je prost i izbacuje sve njegove sadržioce.

<pre> <del>1</del>  <strong><span class="boja5">2</span></strong>  <strong><span class="boja5">3</span></strong>  <del>4</del>  5  <del>6</del>  7  <del>8</del>  <del>9</del> <del>10</del> 11 <del>12</del> 13 <del>14</del> <del>15</del> <del>16</del> 17 <del>18</del> 19 <del>20</del>
<del>21</del> <del>22</del> 23 <del>24</del> 25 <del>26</del> <del>27</del> <del>28</del> 29 <del>30</del> 31 <del>32</del> <del>33</del> <del>34</del> 35 <del>36</del> 37 <del>38</del> <del>39</del> <del>40</del>
41 <del>42</del> 43 <del>44</del> <del>45</del> <del>46</del> 47 <del>48</del> 49 <del>50</del> <del>51</del> <del>52</del> 53 <del>54</del> 55 <del>56</del> <del>57</del> <del>58</del> 59 <del>60</del>
61 <del>62</del> <del>63</del> <del>64</del> 65 <del>66</del> 67 <del>68</del> <del>69</del> <del>70</del> 71 <del>72</del> 73 <del>74</del> <del>75</del> <del>76</del> 77 <del>78</del> 79 <del>80</del>
<del>81</del> <del>82</del> 83 <del>84</del> 85 <del>86</del> <del>87</del> <del>88</del> 89 <del>90</del> 91 <del>92</del> <del>93</del> <del>94</del> 95 <del>96</del> 97 <del>98</del> <del>99</del> <del>100</del></pre>

Broj 4 je ranije izbačen, tako da algoritam uzima broj 5 označava ga da je prost i izbacuje sve njegove sadržioce.

<pre> <del>1</del>  <strong><span class="boja5">2</span></strong>  <strong><span class="boja5">3</span></strong>  <del>4</del>  <strong><span class="boja5">5</span></strong>  <del>6</del>  7  <del>8</del>  <del>9</del> <del>10</del> 11 <del>12</del> 13 <del>14</del> <del>15</del> <del>16</del> 17 <del>18</del> 19 <del>20</del>
<del>21</del> <del>22</del> 23 <del>24</del> <del>25</del> <del>26</del> <del>27</del> <del>28</del> 29 <del>30</del> 31 <del>32</del> <del>33</del> <del>34</del> <del>35</del> <del>36</del> 37 <del>38</del> <del>39</del> <del>40</del>
41 <del>42</del> 43 <del>44</del> <del>45</del> <del>46</del> 47 <del>48</del> 49 <del>50</del> <del>51</del> <del>52</del> 53 <del>54</del> <del>55</del> <del>56</del> <del>57</del> <del>58</del> 59 <del>60</del>
61 <del>62</del> <del>63</del> <del>64</del> <del>65</del> <del>66</del> 67 <del>68</del> <del>69</del> <del>70</del> 71 <del>72</del> 73 <del>74</del> <del>75</del> <del>76</del> 77 <del>78</del> 79 <del>80</del>
<del>81</del> <del>82</del> 83 <del>84</del> <del>85</del> <del>86</del> <del>87</del> <del>88</del> 89 <del>90</del> 91 <del>92</del> <del>93</del> <del>94</del> <del>95</del> <del>96</del> 97 <del>98</del> <del>99</del> <del>100</del></pre>

Sada izvršavamo isti postupak za broj 7.

<pre> <del>1</del>  <strong><span class="boja5">2</span></strong>  <strong><span class="boja5">3</span></strong>  <del>4</del>  <strong><span class="boja5">5</span></strong>  <del>6</del>  <strong><span class="boja5">7</span></strong>  <del>8</del>  <del>9</del> <del>10</del> <strong><span class="boja5">11</span></strong> <del>12</del> <strong><span class="boja5">13</span></strong> <del>14</del> <del>15</del> <del>16</del> <strong><span class="boja5">17</span></strong> <del>18</del> <strong><span class="boja5">19</span></strong> <del>20</del>
<del>21</del> <del>22</del> <strong><span class="boja5">23</span></strong> <del>24</del> <del>25</del> <del>26</del> <del>27</del> <del>28</del> <strong><span class="boja5">29</span></strong> <del>30</del> <strong><span class="boja5">31</span></strong> <del>32</del> <del>33</del> <del>34</del> <del>35</del> <del>36</del> <strong><span class="boja5">37</span></strong> <del>38</del> <del>39</del> <del>40</del>
<strong><span class="boja5">41</span></strong> <del>42</del> <strong><span class="boja5">43</span></strong> <del>44</del> <del>45</del> <del>46</del> <strong><span class="boja5">47</span></strong> <del>48</del> <del>49</del> <del>50</del> <del>51</del> <del>52</del> <strong><span class="boja5">53</span></strong> <del>54</del> <del>55</del> <del>56</del> <del>57</del> <del>58</del> <strong><span class="boja5">59</span></strong> <del>60</del>
<strong><span class="boja5">61</span></strong> <del>62</del> <del>63</del> <del>64</del> <del>65</del> <del>66</del> <strong><span class="boja5">67</span></strong> <del>68</del> <del>69</del> <del>70</del> <strong><span class="boja5">71</span></strong> <del>72</del> <strong><span class="boja5">73 </span></strong><del>74</del> <del>75</del> <del>76</del> <del>77</del> <del>78</del> <strong><span class="boja5">79</span></strong> <del>80</del>
<del>81</del> <del>82</del> <strong><span class="boja5">83</span></strong> <del>84</del> <del>85</del> <del>86</del> <del>87</del> <del>88</del> <strong><span class="boja5">89</span></strong> <del>90</del> <del>91</del> <del>92</del> <del>93</del> <del>94</del> <del>95</del> <del>96</del> <strong><span class="boja5">97</span></strong> <del>98</del> <del>99</del> <del>100</del></pre>

Primjećujemo da su u nizu ostali samo prosti brojevi i da se algoritam može zaustaviti nakon broja 7. Brojeve 8, 9 i 10 nećemo obrađivati jer nisu prosti, tj. već su izbačeni iz niza.

## Implementacija

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin>>n;

    bool B[n+1];

    for (int i=0;i<=n;i++)
        B[i]=1;

    B[1]=0;
    int sqn=sqrt(n);

    for (int i=2;i<=sqn;i++)
    {
        if (B[i]==0) continue;

        for (int j=i*2;j<=n;j=j+i)
            B[j]=0;
    }

    for (int i=1;i<n+1;i++)
        if (B[i]==1) cout<<i<<' ';
    cout<<endl;

    return 0;
}
```

Izvor: [boljiprogramer.com](http://boljiprogramer.com/napredno-programiranje/matematicki-algoritmi/eratostenovo-sito/)
