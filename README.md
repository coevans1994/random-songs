# Random Songs

Display a random song quote from the author of your choice

## User Stories

...

As a Content Creator
I want to look up content for my work
so that my writing becomes more entertaining

As a Fan
I want to look up quotes from my
favorite artist so that I can remind
myself of their work.

As an Artist
I want to study other artists so that
I can be inspired by their work.
...

## API description

When entering text in the input field, an API call endpoint is requested:

...

POST https://songsexcerpt.mohd.app/artists/search
Payload: {"artists_name":"mi"}

Response: 

[
    {
    "id": 635912,
    "name": "         (LAYER, Sayo, Saya, Michelle & Rui)"
}, {
    "id": 638914,
    "name": "       (Akino, Mifuyu, Yukari & Tamaki)"
}, {
    "id": 598541,
    "name": "       (Futaba Igarashi, Touko Sakurai, Natsumi Kurobe, Mona Tsukishiro)"
}, {
    "id": 404005,
    "name": "      (Ka Ponik & Michta)"
}, {
    "id": 604967,
    "name": "      (Nico Yazawa, Rin Hoshizora & Hanayo Koizumi)"
}, {
    "id": 597896,
    "name": "     (Dmitry Malikov & Anna Pletneva)"
}, {
    "id": 226486,
    "name": "     (Epic Rap Battles of Minecraft)"
}, {
    "id": 604643,
    "name": "     (Honoka Kosaka, Kotori Minami, Umi Sonoda)"
}, {
    "id": 447525,
    "name": "     (Irina Allegrova & Mikhail Shufutinsky)"
}, {
    "id": 444505,
    "name": "     (Mikhail Shufutinsky & Suzanna Tepper))"
}
]

When submitting a random song request for a given artist, we call:

GET https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=9763

Response (may vary because it is random):

{
    "artist": "Stevie Nicks",
    "song": "Bella Donna",
    "lyrics_excerpt": "Bella donna\nAnd we fight for the northern star"
}


## Sources

- Gitignor file: https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc
- API: https://songsexcerpt.mohd.app