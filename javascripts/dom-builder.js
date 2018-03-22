"use strict";

let $ = require('jquery');

// USE THIS TO BASE MY PRINT FUNCTION AFTER

// function makeActivityList(songList) {
//     let $songsDisplay =
//         $(`<div class="uiContainer__song-list box col s12">
//     <ul class="song-list">
//     </ul>
//   </div>`);
//     $(".uiContainer--wrapper").html($songsDisplay);
//     for (let song in songList) {
//         let currentSong = songList[song],
//             songListItem = $("<li>", { class: "song-list__item" }),
//             title = $("<span/>", { class: "song-title" }).text(currentSong.title),
//             songListData = $("<ul/>", { class: "song-list__item--data" }),
//         // Same as `<a id="${song}" class="delete-btn waves-effect waves-light btn">delete</a>`

//         exerciseListData.append(
//             `<li>${currentSong.artist}</li>
//       <li>${currentSong.album}</li>
//       <li>${currentSong.year}</li>`);

//         $(".uiContainer--wrapper").append(songListItem.append(title));
//         $(".uiContainer--wrapper").append(songListItem.append(songListData));
//     }
// }


module.exports = { makeActivityList };