---
title: Najduža uzastopna sekvenca
layout: lekcija-algoritmi
permalink: /najduza-uzastopna-sekvenca
---

Algoritam za nalaženje najduže uzastopne sekvence u nizu brojeva.

## Nalazi najdužu sekvencu

{:.ulaz}
```js
function findLongestSeq(arr) {
  let maxLen = 0, currentLen = 1
  let longestSeq = [], currentSeq = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      currentSeq.push(arr[i])
      currentLen++
    } else {
      if (currentLen > maxLen) {
        maxLen = currentLen
        longestSeq = [...currentSeq]
      }
      currentLen = 1
      currentSeq = [arr[i]]
    }
  }

  if (currentLen > maxLen) {
    longestSeq = [...currentSeq]
  }

  return longestSeq
}

const brojevi = [1, 2, 3, 5, 6, 7, 8, 10]
console.log(findLongestSeq(brojevi))
```

## Nalazi dužinu najduže sekvence

Ovo je prostija verzija algoritma, ako nam je potrebna samo dužina sekvence:

{:.ulaz}
```js
function duzinaNajduzeSekvence(arr) {
  if (arr.length === 0) return 0

  let maxDuzinaSekvence = 1 
  let trenutnaDuzina = 1 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      trenutnaDuzina++
    } else {
      maxDuzinaSekvence = Math.max(maxDuzinaSekvence, trenutnaDuzina)
      trenutnaDuzina = 1
    }
  }

  return Math.max(maxDuzinaSekvence, trenutnaDuzina)
}

const brojevi = [1, 2, 3, 5, 6, 7, 8, 10]
console.log(duzinaNajduzeSekvence(brojevi))
```
