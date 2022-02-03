import { buildFixtureWithTranslation } from "./task-1";

const fixtureInEnglish = {
  fixtureId: "xyz",
  name: "Benfica v Bayern Munchen",
  languageCode: "en",
  competitions: [
    {
      competitionId: "abc",
      languageCode: "en",
      competitionName: "Competition in English"
    },
    {
      competitionId: "abc",
      languageCode: "de",
      competitionName: "Competition in German"
    }
  ]
};

const fixtureInGerman = {
  fixtureId: "xyz",
  name: "Benfica v Bayern Munchen",
  languageCode: "de",
  competitions: [
    {
      competitionId: "abc",
      languageCode: "en",
      competitionName: "Competition in English"
    },
    {
      competitionId: "abc",
      languageCode: "de",
      competitionName: "Competition in German"
    }
  ]
};

const fixtureInJapanese = {
  fixtureId: "xyz",
  name: "Benfica v Bayern Munchen",
  languageCode: "jp",
  competitions: [
    {
      competitionId: "abc",
      languageCode: "en",
      competitionName: "Competition in English"
    },
    {
      competitionId: "abc",
      languageCode: "de",
      competitionName: "Competition in German"
    }
  ]
};

describe("When fixture contains a competition matching the language of the fixture", () => {
  it("Returns the translated competition name matching the fixture language", () => {
    const translatedEnglishFixture = buildFixtureWithTranslation(
      fixtureInEnglish
    );
    expect(translatedEnglishFixture.competitionName).toEqual(
      "Competition in English"
    );
    const translatedGermanFixture = buildFixtureWithTranslation(
      fixtureInGerman
    );
    expect(translatedGermanFixture.competitionName).toEqual(
      "Competition in German"
    );
  });
});

describe("When fixture does not contain a competition matching the language of the fixture", () => {
  it("Returns the English translated competition name", () => {
    const translatedJapaneseFixture = buildFixtureWithTranslation(
      fixtureInJapanese
    );
    expect(translatedJapaneseFixture.competitionName).toEqual(
      "Competition in English"
    );
  });
});

