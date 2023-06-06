"use client"
import Image from 'next/image'
import styles from '@/styles/page.module.scss'

export default function MathAss1() {
  return (
    <div className={styles.lower}>
      <>
<h1> This is underneath the Navbar</h1>
<h1 id="question">Question</h1>
<p>The effect of temperature on physical quality of life in Australian urban areas and a comparison to urban areas internationally.</p>
<h2 id="abstract">Abstract</h2>
<p>This study compares the effect of temperature on physical quality of life (PQL) in multiple different cities across the world and across Australia. PQL variables are indicators of health, health services, and nutrition (infant mortality rate, child death rate, life expectancy, population per physician and population per nursing person). They were then combined into a PQL Index described in Methods. Across the world higher temperature correlated to better PQL Index results in a majority of cases. In Australia lower temperature was correlated with better PQL Index results in a majority of cases. We randomly selected cities from across the world in our sampling and chose all the capital cities of Australia for Australia.</p>
<h2 id="introduction">Introduction</h2>
<p>In this study we attempted to find the relationship between temperature and PQL. We used an index described in the Methods section and found some interesting results. There was a stark contrast between the results globally and the results within Australia, which were measured separately.</p>
<h2 id="methods">Methods</h2>
<p>Our sampling was done through random selection for the global cities and for cities in Australia we chose the capital cities of each state as they represent a large population centre. Our PQL Index was (Infant Mortality Rate + Child Death Rate + Life Expectancy / 100 + Physicians per Population / 1000 + Nursing People Per Population / 1000) / 5. The lower the PQL Index result the better the PQL in the country is.</p>
<h2 id="results">Results</h2>
<p>We can see here that in cities across the world a lower temperature correlated to higher PQL Index results. This shows that across the world lower PQL correlates to higher temperature. Due to the random nature of the sampling there may be some bias.  </p>
<p>In Australia it is a completely different story. In Australia lower temperatures correlates to lower PQL results indicating higher PQL in these areas. This is unlikely to have a large sampling bias as most people in Australia are situated in areas similar to these capital cities.</p>
<h3 id="results-worldwide">Results Worldwide</h3>
<table>
<thead>
<tr>
<th>Location</th>
<th>Average High Temperature (degrees celsius)</th>
<th>Average Low Temperature (degrees celsius)</th>
<th>Infant Mortality Rate (per 1000)</th>
<th>Child Death Rate</th>
<th>Life Expectancy (years)</th>
<th>Population Per Physician</th>
<th>Population Per Nursing Person</th>
</tr>
</thead>
<tbody>
<tr>
<td>New York</td>
<td>5.19</td>
<td>25.8</td>
<td>3.90</td>
<td>0.15</td>
<td>78.00</td>
<td>912</td>
<td>107</td>
</tr>
<tr>
<td>London</td>
<td>7.83</td>
<td>15.67</td>
<td>3.34</td>
<td>3.4</td>
<td>80.75</td>
<td>2,000</td>
<td>6,700</td>
</tr>
<tr>
<td>Beijing</td>
<td>7.83</td>
<td>15.42</td>
<td>5.05</td>
<td>N/A</td>
<td>82.31</td>
<td>2,154</td>
<td>200</td>
</tr>
<tr>
<td>Paris</td>
<td>7.83</td>
<td>15.58</td>
<td>3.60</td>
<td>N/A</td>
<td>84.20</td>
<td>N/A</td>
<td>891.38</td>
</tr>
<tr>
<td>Dubai</td>
<td>22</td>
<td>33.50</td>
<td>4.79</td>
<td>4.94</td>
<td>78.30</td>
<td>344.82</td>
<td>326.69</td>
</tr>
<tr>
<td>Tokyo</td>
<td>13.08</td>
<td>19.25</td>
<td>1.56</td>
<td>N/A</td>
<td>84.91</td>
<td>304.87</td>
<td>N/A</td>
</tr>
<tr>
<td>Moscow</td>
<td>1.67</td>
<td>9.17</td>
<td>4.10</td>
<td>N/A</td>
<td>74.49</td>
<td>178.57</td>
<td>N/A</td>
</tr>
</tbody>
</table>
<Image src="/images/PQLvsTemp-World.png" alt="Global PQL vs Temperature" width={1600} height={958}/>
<h3 id="results-in-australia">Results in Australia</h3>
<table>
<thead>
<tr>
<th>Location</th>
<th>Average High Temperature (degrees celsius)</th>
<th>Average Low Temperature (degrees celsius)</th>
<th>Infant Mortality Rate (per 1000)</th>
<th>Child Death Rate</th>
<th>Life Expectancy (years)</th>
<th>Population Per Physician</th>
<th>Population Per Nursing Person</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sydney</td>
<td>5.19</td>
<td>25.8</td>
<td>N/A</td>
<td>N/A</td>
<td>73.75</td>
<td>828.50</td>
<td>91.24</td>
</tr>
<tr>
<td>Melbourne</td>
<td>7.83</td>
<td>15.67</td>
<td>N/A</td>
<td>N/A</td>
<td>62.86</td>
<td>862.81</td>
<td>73.10</td>
</tr>
<tr>
<td>Brisbane</td>
<td>7.83</td>
<td>15.42</td>
<td>N/A</td>
<td>N/A</td>
<td>80.08</td>
<td>797.45</td>
<td>86.13</td>
</tr>
<tr>
<td>Adelaide</td>
<td>7.83</td>
<td>15.58</td>
<td>N/A</td>
<td>N/A</td>
<td>80.40</td>
<td>853.24</td>
<td>66.57</td>
</tr>
<tr>
<td>Perth</td>
<td>22</td>
<td>33.50</td>
<td>N/A</td>
<td>N/A</td>
<td>82.00</td>
<td>968.05</td>
<td>82.10</td>
</tr>
<tr>
<td>Hobart</td>
<td>13.08</td>
<td>19.25</td>
<td>N/A</td>
<td>N/A</td>
<td>83.00</td>
<td>943.40</td>
<td>75.93</td>
</tr>
<tr>
<td>Darwin</td>
<td>1.67</td>
<td>9.17</td>
<td>N/A</td>
<td>N/A</td>
<td>70.50</td>
<td>1063.83</td>
<td>91.74</td>
</tr>
<tr>
<td>Canberra</td>
<td>1.67</td>
<td>9.17</td>
<td>N/A</td>
<td>N/A</td>
<td>82.50</td>
<td>1085.78</td>
<td>94.43</td>
</tr>
</tbody>
</table>
<Image src="/images/PQLvsTemp-Aus.png" alt="Australia PQL vs Temperature" width={1600} height={958}/>
<h2 id="conclusion">Conclusion</h2>
<p>In conclusion there is no definitive relationship between temperature and PQL. Australia being a very small portion of the population of the world and also a very specific climate of Australia. If we look at Australia&#39;s temperatures it is overall high relative to the rest of the world in our study. This means we could draw a conclusion that higher temperatures overall do cause better PQL results. There are also some biases in our study. First our PQL Index incorrectly measures the relationship between life expectancy and PQL something to be improved upon for future studies. Random Sampling also has many downsides for such a small sample size of cities. There was also a bias because we could not find data from the capital cities of Australia for Nursing People or Physicians so we have used the state data.</p>
      </>
    </div>
  )
}
