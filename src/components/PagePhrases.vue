<template lang="jade">
.container
  .section(v-for="section in sections")
    h5.section_title {{ section.title }}
    img.section_icon(v-bind:src="section.icon")
    .phrase_section(v-for="phrase in section.phrases")
      .en_section
        h5.phrase_en {{ phrase.en }}
      .translation_section
        h5.phrase_translation {{ phrase.translation}}

</template>

<script>
import iconGreeting from '@/assets/icons/phrase-greeting.svg'
import iconEssential from '@/assets/icons/phrase-essential.svg'

export default {
  name: 'PagePhrases',
  data () {
    return {
      sections: [
        {
          title: 'Greetings',
          icon: iconGreeting,
          phrases: [
            {
              en: 'Thank you',
              translation: 'Obrigado'
            },
            {
              en: 'You\'re welcome',
              translation: 'De nada'
            },
            {
              en: 'Hello',
              translation: 'Ola'
            },
            {
              en: 'Bye',
              translation: 'Ciao'
            },
            {
              en: 'Good day',
              translation: 'Bom dia'
            }
          ]
        },
        {
          title: 'Essential Phrases',
          icon: iconEssential,
          phrases: [
            {
              en: 'Yes',
              translation: 'Sim'
            },
            {
              en: 'No',
              translation: 'Nao'
            },
            {
              en: 'Do you speak English?',
              translation: 'Falo Ingles?'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@/globals/variables'
.container
  height: 100%
  width: 85%
  margin: 0 auto
.section
  border-bottom: 1px solid rgb(238,238,238)
  &:last
    border-bottom: 0px
.section_title
  font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B"
  font-size: $biggish-text
  font-weight: 400
  padding: calc(1.3 * #{$biggish-text}) 0
  display: inline-block
.section_icon
  display: inline-block
  height: calc(1.1 * #{$biggish-text})
  width: auto
  padding-left: $biggish-text
.phrase_section
  display: flex
  width: 100%
  justify-content: space-between
  padding-bottom: calc(1.3 * #{$biggish-text})
.en_section, .translation_section
  width: 45%
.phrase_en, .phrase_translation
  font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B"
  font-size: $biggish-text
  font-weight: 500
  line-height: 1
.phrase_en
  color: $purple
</style>
