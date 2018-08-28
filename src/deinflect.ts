// TODO: Localize deinflect reason strings
const deinflectReasons = [
  'polite past negative',
  'polite negative',
  'polite volitional',
  '-chau',
  '-sugiru',
  '-nasai',
  'polite past',
  '-tara',
  '-tari',
  'causative',
  'potential or passive',
  '-sou',
  '-tai',
  'polite',
  'past',
  'negative',
  'passive',
  '-ba',
  'volitional',
  'potential',
  'causative passive',
  '-te',
  '-zu',
  'imperative',
  'masu stem',
  'adv',
  'noun',
  'imperative negative',
];

const deinflectRuleData: Array<[string, string, number, number]> = [
  ['くありませんでした', 'い', 1152, 0],
  ['いませんでした', 'う', 640, 0],
  ['きませんでした', 'く', 640, 0],
  ['きませんでした', 'くる', 2176, 0],
  ['ぎませんでした', 'ぐ', 640, 0],
  ['しませんでした', 'す', 640, 0],
  ['しませんでした', 'する', 4224, 0],
  ['ちませんでした', 'つ', 640, 0],
  ['にませんでした', 'ぬ', 640, 0],
  ['びませんでした', 'ぶ', 640, 0],
  ['みませんでした', 'む', 640, 0],
  ['りませんでした', 'る', 640, 0],
  ['くありません', 'い', 1152, 1],
  ['ませんでした', 'る', 2432, 0],
  ['いましょう', 'う', 640, 2],
  ['きましょう', 'く', 640, 2],
  ['きましょう', 'くる', 2176, 2],
  ['ぎましょう', 'ぐ', 640, 2],
  ['しましょう', 'す', 640, 2],
  ['しましょう', 'する', 4224, 2],
  ['ちましょう', 'つ', 640, 2],
  ['にましょう', 'ぬ', 640, 2],
  ['びましょう', 'ぶ', 640, 2],
  ['みましょう', 'む', 640, 2],
  ['りましょう', 'る', 640, 2],
  ['いじゃう', 'ぐ', 514, 3],
  ['いすぎる', 'う', 513, 4],
  ['いちゃう', 'く', 514, 3],
  ['いなさい', 'う', 640, 5],
  ['いました', 'う', 640, 6],
  ['いません', 'う', 640, 1],
  ['かされる', 'く', 513, 20],
  ['かったら', 'い', 1152, 7],
  ['かったり', 'い', 1152, 8],
  ['がされる', 'ぐ', 513, 20],
  ['きすぎる', 'く', 513, 4],
  ['きすぎる', 'くる', 2049, 4],
  ['ぎすぎる', 'ぐ', 513, 4],
  ['きちゃう', 'くる', 2050, 3],
  ['きなさい', 'く', 640, 5],
  ['きなさい', 'くる', 2176, 5],
  ['ぎなさい', 'ぐ', 640, 5],
  ['きました', 'く', 640, 6],
  ['きました', 'くる', 2176, 6],
  ['ぎました', 'ぐ', 640, 6],
  ['きません', 'く', 640, 1],
  ['きません', 'くる', 2176, 1],
  ['ぎません', 'ぐ', 640, 1],
  ['こさせる', 'くる', 2049, 9],
  ['こられる', 'くる', 2049, 10],
  ['しすぎる', 'す', 513, 4],
  ['しすぎる', 'する', 4097, 4],
  ['しちゃう', 'す', 514, 3],
  ['しちゃう', 'する', 4098, 3],
  ['しなさい', 'す', 640, 5],
  ['しなさい', 'する', 4224, 5],
  ['しました', 'す', 640, 6],
  ['しました', 'する', 4224, 6],
  ['しません', 'す', 640, 1],
  ['しません', 'する', 4224, 1],
  ['たされる', 'つ', 513, 20],
  ['ちすぎる', 'つ', 513, 4],
  ['ちなさい', 'つ', 640, 5],
  ['ちました', 'つ', 640, 6],
  ['ちません', 'つ', 640, 1],
  ['っちゃう', 'う', 514, 3],
  ['っちゃう', 'く', 514, 3],
  ['っちゃう', 'つ', 514, 3],
  ['っちゃう', 'る', 514, 3],
  ['なされる', 'ぬ', 513, 20],
  ['にすぎる', 'ぬ', 513, 4],
  ['になさい', 'ぬ', 640, 5],
  ['にました', 'ぬ', 640, 6],
  ['にません', 'ぬ', 640, 1],
  ['ばされる', 'ぶ', 513, 20],
  ['びすぎる', 'ぶ', 513, 4],
  ['びなさい', 'ぶ', 640, 5],
  ['びました', 'ぶ', 640, 6],
  ['びません', 'ぶ', 640, 1],
  ['まされる', 'む', 513, 20],
  ['ましょう', 'る', 2432, 2],
  ['みすぎる', 'む', 513, 4],
  ['みなさい', 'む', 640, 5],
  ['みました', 'む', 640, 6],
  ['みません', 'む', 640, 1],
  ['らされる', 'る', 513, 20],
  ['りすぎる', 'る', 513, 4],
  ['りなさい', 'る', 640, 5],
  ['りました', 'る', 640, 6],
  ['りません', 'る', 640, 1],
  ['わされる', 'う', 513, 20],
  ['んじゃう', 'ぬ', 514, 3],
  ['んじゃう', 'ぶ', 514, 3],
  ['んじゃう', 'む', 514, 3],
  ['いそう', 'う', 640, 11],
  ['いたい', 'う', 516, 12],
  ['いたら', 'く', 640, 7],
  ['いだら', 'ぐ', 640, 7],
  ['いたり', 'く', 640, 8],
  ['いだり', 'ぐ', 640, 8],
  ['います', 'う', 640, 13],
  ['かせる', 'く', 513, 9],
  ['がせる', 'ぐ', 513, 9],
  ['かった', 'い', 1152, 14],
  ['かない', 'く', 516, 15],
  ['がない', 'ぐ', 516, 15],
  ['かれる', 'く', 513, 16],
  ['がれる', 'ぐ', 513, 16],
  ['きそう', 'く', 640, 11],
  ['きそう', 'くる', 2176, 11],
  ['ぎそう', 'ぐ', 640, 11],
  ['きたい', 'く', 516, 12],
  ['きたい', 'くる', 2052, 12],
  ['ぎたい', 'ぐ', 516, 12],
  ['きたら', 'くる', 2176, 7],
  ['きたり', 'くる', 2176, 8],
  ['きます', 'く', 640, 13],
  ['きます', 'くる', 2176, 13],
  ['ぎます', 'ぐ', 640, 13],
  ['くない', 'い', 1028, 15],
  ['ければ', 'い', 1152, 17],
  ['こない', 'くる', 2052, 15],
  ['こよう', 'くる', 2176, 18],
  ['これる', 'くる', 2049, 19],
  ['させる', 'する', 4097, 9],
  ['させる', 'る', 2305, 9],
  ['させる', 'す', 513, 9],
  ['さない', 'す', 516, 15],
  ['される', 'す', 513, 16],
  ['される', 'する', 4097, 16],
  ['しそう', 'す', 640, 11],
  ['しそう', 'する', 4224, 11],
  ['したい', 'す', 516, 12],
  ['したい', 'する', 4100, 12],
  ['したら', 'す', 640, 7],
  ['したら', 'する', 4224, 7],
  ['したり', 'す', 640, 8],
  ['したり', 'する', 4224, 8],
  ['しない', 'する', 4100, 15],
  ['します', 'す', 640, 13],
  ['します', 'する', 4224, 13],
  ['しよう', 'する', 4224, 18],
  ['すぎる', 'い', 1025, 4],
  ['すぎる', 'る', 2305, 4],
  ['たせる', 'つ', 513, 9],
  ['たない', 'つ', 516, 15],
  ['たれる', 'つ', 513, 16],
  ['ちそう', 'つ', 640, 11],
  ['ちたい', 'つ', 516, 12],
  ['ちます', 'つ', 640, 13],
  ['ちゃう', 'る', 2306, 3],
  ['ったら', 'う', 640, 7],
  ['ったら', 'つ', 640, 7],
  ['ったら', 'る', 640, 7],
  ['ったり', 'う', 640, 8],
  ['ったり', 'つ', 640, 8],
  ['ったり', 'る', 640, 8],
  ['なさい', 'る', 2432, 5],
  ['なせる', 'ぬ', 513, 9],
  ['なない', 'ぬ', 516, 15],
  ['なれる', 'ぬ', 513, 16],
  ['にそう', 'ぬ', 640, 11],
  ['にたい', 'ぬ', 516, 12],
  ['にます', 'ぬ', 640, 13],
  ['ばせる', 'ぶ', 513, 9],
  ['ばない', 'ぶ', 516, 15],
  ['ばれる', 'ぶ', 513, 16],
  ['びそう', 'ぶ', 640, 11],
  ['びたい', 'ぶ', 516, 12],
  ['びます', 'ぶ', 640, 13],
  ['ました', 'る', 2432, 6],
  ['ませる', 'む', 513, 9],
  ['ません', 'る', 2432, 1],
  ['まない', 'む', 516, 15],
  ['まれる', 'む', 513, 16],
  ['みそう', 'む', 640, 11],
  ['みたい', 'む', 516, 12],
  ['みます', 'む', 640, 13],
  ['らせる', 'る', 513, 9],
  ['らない', 'る', 516, 15],
  ['られる', 'る', 2305, 10],
  ['られる', 'る', 513, 16],
  ['りそう', 'る', 640, 11],
  ['りたい', 'る', 516, 12],
  ['ります', 'る', 640, 13],
  ['わせる', 'う', 513, 9],
  ['わない', 'う', 516, 15],
  ['われる', 'う', 513, 16],
  ['んだら', 'ぬ', 640, 7],
  ['んだら', 'ぶ', 640, 7],
  ['んだら', 'む', 640, 7],
  ['んだり', 'ぬ', 640, 8],
  ['んだり', 'ぶ', 640, 8],
  ['んだり', 'む', 640, 8],
  ['いた', 'く', 640, 14],
  ['いだ', 'ぐ', 640, 14],
  ['いて', 'く', 640, 21],
  ['いで', 'ぐ', 640, 21],
  ['えば', 'う', 640, 17],
  ['える', 'う', 513, 19],
  ['おう', 'う', 640, 18],
  ['かず', 'く', 640, 22],
  ['がず', 'ぐ', 640, 22],
  ['きた', 'くる', 2176, 14],
  ['きて', 'くる', 2176, 21],
  ['くて', 'い', 1152, 21],
  ['けば', 'く', 640, 17],
  ['げば', 'ぐ', 640, 17],
  ['ける', 'く', 513, 19],
  ['げる', 'ぐ', 513, 19],
  ['こい', 'くる', 2176, 23],
  ['こう', 'く', 640, 18],
  ['ごう', 'ぐ', 640, 18],
  ['こず', 'くる', 2176, 22],
  ['さず', 'す', 640, 22],
  ['した', 'す', 640, 14],
  ['した', 'する', 4224, 14],
  ['して', 'す', 640, 21],
  ['して', 'する', 4224, 21],
  ['しろ', 'する', 4224, 23],
  ['せず', 'する', 4224, 22],
  ['せば', 'す', 640, 17],
  ['せよ', 'する', 4224, 23],
  ['せる', 'す', 513, 19],
  ['そう', 'い', 1152, 11],
  ['そう', 'す', 640, 18],
  ['そう', 'る', 2432, 11],
  ['たい', 'る', 2308, 12],
  ['たず', 'つ', 640, 22],
  ['たら', 'る', 2432, 7],
  ['たり', 'る', 2432, 8],
  ['った', 'う', 640, 14],
  ['った', 'く', 640, 14],
  ['った', 'つ', 640, 14],
  ['った', 'る', 640, 14],
  ['って', 'う', 640, 21],
  ['って', 'く', 640, 21],
  ['って', 'つ', 640, 21],
  ['って', 'る', 640, 21],
  ['てば', 'つ', 640, 17],
  ['てる', 'つ', 513, 19],
  ['とう', 'つ', 640, 18],
  ['ない', 'る', 2308, 15],
  ['なず', 'ぬ', 640, 22],
  ['ねば', 'ぬ', 640, 17],
  ['ねる', 'ぬ', 513, 19],
  ['のう', 'ぬ', 640, 18],
  ['ばず', 'ぶ', 640, 22],
  ['べば', 'ぶ', 640, 17],
  ['べる', 'ぶ', 513, 19],
  ['ぼう', 'ぶ', 640, 18],
  ['ます', 'る', 2432, 13],
  ['まず', 'む', 640, 22],
  ['めば', 'む', 640, 17],
  ['める', 'む', 513, 19],
  ['もう', 'む', 640, 18],
  ['よう', 'る', 2432, 18],
  ['らず', 'る', 640, 22],
  ['れば', 'る', 7040, 17],
  ['れる', 'る', 2817, 19],
  ['ろう', 'る', 640, 18],
  ['わず', 'う', 640, 22],
  ['んだ', 'ぬ', 640, 14],
  ['んだ', 'ぶ', 640, 14],
  ['んだ', 'む', 640, 14],
  ['んで', 'ぬ', 640, 21],
  ['んで', 'ぶ', 640, 21],
  ['んで', 'む', 640, 21],
  ['い', 'いる', 384, 24],
  ['い', 'う', 640, 24],
  ['い', 'る', 2176, 23],
  ['え', 'う', 640, 23],
  ['え', 'える', 384, 24],
  ['き', 'きる', 384, 24],
  ['き', 'く', 640, 24],
  ['ぎ', 'ぎる', 384, 24],
  ['ぎ', 'ぐ', 640, 24],
  ['く', 'い', 1152, 25],
  ['け', 'く', 640, 23],
  ['け', 'ける', 384, 24],
  ['げ', 'ぐ', 640, 23],
  ['げ', 'げる', 384, 24],
  ['さ', 'い', 1152, 26],
  ['し', 'す', 640, 24],
  ['じ', 'じる', 384, 24],
  ['ず', 'る', 2432, 22],
  ['せ', 'す', 640, 23],
  ['せ', 'せる', 384, 24],
  ['ぜ', 'ぜる', 384, 24],
  ['た', 'る', 2432, 14],
  ['ち', 'ちる', 384, 24],
  ['ち', 'つ', 640, 24],
  ['て', 'つ', 640, 23],
  ['て', 'てる', 384, 24],
  ['て', 'る', 2432, 21],
  ['で', 'でる', 384, 24],
  ['な', '', 7040, 27],
  ['に', 'にる', 384, 24],
  ['に', 'ぬ', 640, 24],
  ['ね', 'ぬ', 640, 23],
  ['ね', 'ねる', 384, 24],
  ['ひ', 'ひる', 384, 24],
  ['び', 'びる', 384, 24],
  ['び', 'ぶ', 640, 24],
  ['へ', 'へる', 384, 24],
  ['べ', 'ぶ', 640, 23],
  ['べ', 'べる', 384, 24],
  ['み', 'みる', 384, 24],
  ['み', 'む', 640, 24],
  ['め', 'む', 640, 23],
  ['め', 'める', 384, 24],
  ['よ', 'る', 384, 23],
  ['り', 'りる', 384, 24],
  ['り', 'る', 640, 24],
  ['れ', 'る', 640, 23],
  ['れ', 'れる', 384, 24],
  ['ろ', 'る', 384, 23],
];

interface DeinflectRule {
  from: string;
  to: string;
  // Unlike the type in the CandidateWord, this is a 16-bit integer where the
  // lower 8 bits represent the from type while the upper 8 bits represent the
  // to type(s).
  //
  // For example, 遊びすぎる would match the びすぎる→ぶ rule where the from
  // type is an ichidan/ru-verb while the to type is a godan/u-verb.
  //
  // The type for this rule is calculated as follows:
  //
  //   from-type = WordType.IchidanVerb = 1 << 0 = 00000001
  //   to-type   = WordType.GodanVerb   = 1 << 1 = 00000010
  //   type      = [to-type] [from-type]
  //             = 00000010 00000001
  //               \______/ \______/
  //                  to      from
  //             = 513
  //
  // When the from type accepts anything BUT one of the above word types (e.g.
  // a verb stem), the highest bit is set. For example, consider the
  // deinflection rule that allows 食べ (imperative) to be de-inflected to
  // 食べる: べ→べる.
  //
  // In this case, the to type is an ichidan/ru-verb, while the from type is
  // basically anything but NOT the result of any other deinflection (since they
  // never produce verb stems). For this case the highest bit of the from-type
  // is set so that it does NOT match any of the existing word types but it DOES
  // match when we compare with 0xff (the mask we use for the initial input).
  //
  // i.e. from-type = 10000000
  //      to-type   = WordType.IchidanVerb = 1
  //      type      = 00000001 10000000
  //                = 384
  //
  // Note that the to-type is a bitfield since multiple possible word types can
  // be produced.
  //
  // For example, for the rule ませんでした→る the deinflected word could be an
  // ichidan/ru-verb (e.g. 食べる) but it could also be the special verb 来る
  // (when it is written in hiragana a different rule will match). As a result,
  // the to-type needs to represent both of these possibilities.
  //
  // i.e. to-type   = WordType.IchidanVerb & WordType.KuruVerb
  //                = 00000001 & 00001000
  //                = 00001001
  //      from-type = Verb stem (i.e. anything but one of the WordTypes)
  //                = 10000000
  //      type      = 00001001 10000000
  //                = 2432
  //
  type: number;
  reason: number;
}

interface DeinflectRuleGroup {
  rules: Array<DeinflectRule>;
  fromLen: number;
}

const deinflectRuleGroups: Array<DeinflectRuleGroup> = [];

function getDeinflectRuleGroups() {
  if (!deinflectRuleGroups.length) {
    let prevLen: number = -1;
    let ruleGroup: DeinflectRuleGroup;

    for (const [from, to, type, reason] of deinflectRuleData) {
      const rule: DeinflectRule = { from, to, type, reason };

      if (prevLen !== rule.from.length) {
        prevLen = rule.from.length;
        ruleGroup = { rules: [], fromLen: prevLen };
        deinflectRuleGroups.push(ruleGroup);
      }
      ruleGroup!.rules.push(rule);
    }
  }

  return deinflectRuleGroups;
}

export interface CandidateWord {
  // The de-inflected candidate word
  word: string;
  // An optional string describing the relationship of |word| to its
  // de-inflected version, e.g. 'past'
  reason: string | null;
  // For a de-inflected word, this is a bitfield comprised of flags from the
  // WordType enum describing the possible types of word this could represent
  // (e.g. godan verb, i-adj). If a word looked up in the dictionary does not
  // match this type, it should be ignored since the deinflection is not valid
  // in that case.
  //
  // See the extended notes for DeinflectRule.rule.
  type: number;
}

// Returns an array of possible de-inflected versions of |word|.
export function deinflect(word: string): CandidateWord[] {
  const result: Array<CandidateWord> = [];
  const resultIndex: { [index: string]: number } = {};
  const ruleGroups = getDeinflectRuleGroups();

  const original: CandidateWord = {
    word,
    // Initially we don't know what type of word we have so we set the type
    // mask to match all rules.
    type: 0xff,
    reason: '',
  };
  result.push(original);
  resultIndex[word] = 0;

  let i = 0;
  do {
    const word = result[i].word;
    const type = result[i].type;

    for (const ruleGroup of ruleGroups) {
      if (ruleGroup.fromLen <= word.length) {
        const ending = word.substr(-ruleGroup.fromLen);

        for (const rule of ruleGroup.rules) {
          if (type & rule.type && ending === rule.from) {
            const newWord =
              word.substr(0, word.length - rule.from.length) + rule.to;
            if (newWord.length <= 1) {
              continue;
            }

            // If we already have a candidate for this word with the same
            // to type(s), expand the possible reasons.
            //
            // If the to type(s) differ, then we'll add a separate candidate
            // and just hope that when we go to match against dictionary words
            // we'll filter out the mismatching one(s).
            if (resultIndex[newWord]) {
              const candidate = result[resultIndex[newWord]];
              if (candidate.type === rule.type >> 8) {
                candidate.reason = `${deinflectReasons[rule.reason]} or ${
                  candidate.reason
                }`;
                continue;
              }
            }
            resultIndex[newWord] = result.length;

            let reason: string = deinflectReasons[rule.reason];
            if (result[i].reason && result[i].reason!.length) {
              reason += ` < ${result[i].reason}`;
              // This is a bit hacky but the alternative is to add the
              // full-form causative passive inflections to the deinflection
              // dictionary and then try to merge the results.
              reason = reason.replace(
                'causative < potential or passive',
                'causative passive'
              );
            }
            const candidate: CandidateWord = {
              reason,
              type: rule.type >> 8,
              word: newWord,
            };

            result.push(candidate);
          }
        }
      }
    }
  } while (++i < result.length);

  return result;
}

export default deinflect;
