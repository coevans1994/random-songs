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
Payload: {"artists_name":"stevie ni"}

Response: 

[
   {
    "id": 581829,
    "name": "Elton John & Stevie Nicks"
}, {
    "id": 9763,
    "name": "Stevie Nicks"
}, {
    "id": 114625,
    "name": "Stevie Nicks & Kenny Loggins"
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
...

## Notes

-`innerHTML` was used in the code to simplify markup generation. The unsafe nature of `innerHTML` does not pose a real threat in this application for learning purposes. In the unlikely case the API was hacked, we'll add defenses on client-side so that we don't render external malicious content.


## Sources

- Gitignor file: https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc
- API: https://songsexcerpt.mohd.app