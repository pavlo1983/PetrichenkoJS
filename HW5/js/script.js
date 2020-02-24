"use strict";

let items = document.querySelectorAll(".menu .menu-item"),
  menu = document.querySelector(".menu"),
  li = document.createElement("li"),
  body = document.querySelector("body"),
  title = document.getElementById("title"),
  column = document.querySelectorAll(".column"),
  adv = document.querySelector(".adv"),
  input = document.getElementById("prompt");

menu.insertBefore(items[1], items[3]);

li.classList.add("menu-item");

li.innerHTML = "Пятый пункт";

menu.appendChild(li);

body.style.background = "url(../HW5/img/apple_true.jpg)";

title.innerHTML = " Мы продаем только подлинную технику Apple";

column[1].removeChild(adv);

input.innerHTML = prompt("Какое Ваше отношение к технике Apple?");
