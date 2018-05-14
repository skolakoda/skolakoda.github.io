---
title: Tablica složenosti algoritama
layout: lekcija-algoritmi
permalink: /tablica-slozenosti-algoritama
---

U tabeli su date glavne kategorije složenosti algoritama, sa okvirnom procenom trajanja.

<table class="full">
  <thead>
    <tr>
      <th>Složenost</th>
      <th>Broj koraka</th>
      <th>Procena trajanja</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>konstantna</td>
      <td>1</td>
      <td>
        <ul>
          <li>1 član: 1 korak</li>
          <li>100 članova: 1 korak</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>logaritamska</td>
      <td>log n</td>
      <td>
        <ul>
          <li>1 član: 1 korak</li>
          <li>100 članova: 6 koraka</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>linearna</td>
      <td>n</td>
      <td>
        <ul>
          <li>1 član: 1 korak</li>
          <li>100 članova: 100 koraka</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>log linearna</td>
      <td>n log n</td>
      <td>
        <ul>
          <li>1 član: 1 korak</li>
          <li>100 članova: 600 koraka</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>kvadratna</td>
      <td>n<sup>2</sup></td>
      <td>
        <ul>
          <li>1 član: 1 korak</li>
          <li>100 članova: 10000 koraka</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>kubna</td>
      <td>n<sup>3</sup></td>
      <td>
        <ul>
          <li>1 član: 1 korak</li>
          <li>100 članova: 10000000 koraka</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>eksponencijalna</td>
      <td>2<sup>n</sup></td>
      <td>
        <ul>
          <li>1 član: 1 korak</li>
          <li>100 članova: 1267650600228229401496703205376 koraka</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
