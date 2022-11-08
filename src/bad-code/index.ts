/*
 * あなたは小さな本屋を経営しています。
 * 世の中には3冊の本しかありません。
 * java-book、typescript-book、swift-book です。
 * 本の値段も3種類しかありません。 大きな本が1000円。中くらいの本が500円。小さな本が300円です。
 * 5冊以上買ったら100円引きになります。
 *
 * 請求書から本の種類と合計金額を表示させてください。
 * 本の種類や請求書の型は変更して構いません。
 *
 * ...という指示を受けた新人プログラマーが書いたコードをリファクタリングしてください。
 * と言われたら、どんな作業をどんな手順でやっていきますか？いくつかアイデアを教えてください。
 */

// 本の種類
export const books = {
  java: { name: 'java-book', type: 'big' },
  typescript: { name: 'typescript-book', type: 'medium' },
  swift: { name: 'swift-book', type: 'small' }
}

// 請求書
export const invoice = {
  customer: 'KINTO',
  items: [
    {
      comicID: 'java',
      quantity: 10
    },
    {
      comicID: 'typescript',
      quantity: 10
    },
    {
      comicID: 'swift',
      quantity: 3
    }
  ]
}

export function func (invoice: any, books: any) {
  let result = `請求書 ${invoice.customer} 様 \n`
  let totalPrice = 0
  for (let i = 0; i < invoice.items.length; i++) {
    const book = books[invoice.items[i].comicID]
    let bookPrice = 0
    switch (book.type) {
      case 'big':
        bookPrice = 1000
        if (invoice.items[i].quantity >= 5) {
          bookPrice -= 100
        }
        totalPrice += bookPrice * invoice.items[i].quantity
        break
      case 'medium':
        bookPrice = 500
        if (invoice.items[i].quantity >= 5) {
          bookPrice -= 100
        }
        totalPrice += bookPrice * invoice.items[i].quantity
        break
      case 'small':
        bookPrice = 300
        if (invoice.items[i].quantity >= 5) {
          bookPrice -= 100
        }
        totalPrice += bookPrice * invoice.items[i].quantity
        break
      default:
        throw new Error(`想定外の本です: ${book.type}`)
    }
    result += `本の名前: ${books[invoice.items[i].comicID].name} \n ${invoice.items[i].quantity} 冊\n`
  }
  result += `合計: ${totalPrice} 円`
  return result
}


