import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'catalog' | 'about' | 'contacts';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
}

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartCount, setCartCount] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: 'Универсальное моющее средство',
      category: 'Бытовая химия',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/1899864d-9df2-4005-9a02-a16569a13623/files/b8a84c70-a37f-4e08-a6b5-e27c114a74c7.jpg',
      badge: 'Хит'
    },
    {
      id: 2,
      name: 'Эко средство для посуды',
      category: 'Бытовая химия',
      price: 320,
      image: 'https://cdn.poehali.dev/projects/1899864d-9df2-4005-9a02-a16569a13623/files/0e062242-d270-458b-ab97-b22b9ebac388.jpg',
      badge: 'Эко'
    },
    {
      id: 3,
      name: 'Увлажняющий крем для рук',
      category: 'Косметика',
      price: 580,
      image: 'https://cdn.poehali.dev/projects/1899864d-9df2-4005-9a02-a16569a13623/files/262844ec-ffa5-4cf5-bc16-f67ede9cfb4e.jpg'
    },
    {
      id: 4,
      name: 'Средство для стёкол',
      category: 'Бытовая химия',
      price: 280,
      image: 'https://cdn.poehali.dev/projects/1899864d-9df2-4005-9a02-a16569a13623/files/b8a84c70-a37f-4e08-a6b5-e27c114a74c7.jpg'
    },
    {
      id: 5,
      name: 'Жидкое мыло премиум',
      category: 'Косметика',
      price: 420,
      image: 'https://cdn.poehali.dev/projects/1899864d-9df2-4005-9a02-a16569a13623/files/262844ec-ffa5-4cf5-bc16-f67ede9cfb4e.jpg',
      badge: 'Новинка'
    },
    {
      id: 6,
      name: 'Порошок для стирки',
      category: 'Бытовая химия',
      price: 650,
      image: 'https://cdn.poehali.dev/projects/1899864d-9df2-4005-9a02-a16569a13623/files/0e062242-d270-458b-ab97-b22b9ebac388.jpg'
    }
  ];

  const categories = [
    { name: 'Бытовая химия', icon: 'Sparkles', count: 120 },
    { name: 'Косметика', icon: 'Heart', count: 85 },
    { name: 'Для дома', icon: 'Home', count: 65 },
    { name: 'Эко-товары', icon: 'Leaf', count: 45 }
  ];

  const features = [
    { icon: 'ShieldCheck', title: 'Качество', desc: 'Проверенная продукция' },
    { icon: 'Truck', title: 'Доставка', desc: 'Быстрая доставка' },
    { icon: 'Percent', title: 'Скидки', desc: 'Выгодные цены' },
    { icon: 'Recycle', title: 'Эко', desc: 'Экологичные товары' }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const renderHome = () => (
    <div className="animate-fade-in">
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-24 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            BHBS Химика
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl">
            Бытовая химия и косметика для дома и бизнеса
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" onClick={() => setCurrentPage('catalog')} className="text-lg px-8 hover:scale-105 transition-transform">
              Каталог товаров
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white hover:scale-105 transition-transform">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Категории товаров</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={cat.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-all group-hover:scale-110 duration-300">
                  <Icon name={feature.icon as any} size={36} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Популярные товары</h2>
          <p className="text-muted-foreground mb-10">Самые востребованные позиции нашего каталога</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden bg-muted/20">
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 z-10 bg-secondary">{product.badge}</Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                  <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button size="sm" onClick={addToCart} className="hover:scale-105 transition-transform">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button size="lg" onClick={() => setCurrentPage('catalog')} className="mt-10 hover:scale-105 transition-transform">
            Посмотреть весь каталог
          </Button>
        </div>
      </section>
    </div>
  );

  const renderCatalog = () => (
    <div className="py-16 px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Каталог товаров</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden bg-muted/20">
                {product.badge && (
                  <Badge className="absolute top-3 left-3 z-10 bg-secondary">{product.badge}</Badge>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                  <Button size="sm" onClick={addToCart} className="hover:scale-105 transition-transform">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="py-16 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">О компании</h1>
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">BHBS Химика</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Мы специализируемся на поставках качественной бытовой химии и косметики для дома и бизнеса. 
              Наша компания работает на рынке более 10 лет, предлагая широкий ассортимент продукции от проверенных производителей.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              В нашем каталоге представлены как традиционные, так и экологичные средства, которые отвечают современным стандартам качества и безопасности.
            </p>
            <p className="text-lg leading-relaxed">
              Мы работаем напрямую с производителями, что позволяет нам предлагать выгодные цены и гарантировать оригинальность продукции.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">лет на рынке</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <p className="text-muted-foreground">товаров в каталоге</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">довольных клиентов</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="py-16 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Контакты</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@bhbs.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Отправить сообщение</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Ваше сообщение"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl">BHBS Химика</h1>
                <p className="text-xs text-muted-foreground">Бытовая химия и косметика</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`font-medium transition-colors hover:text-primary ${currentPage === 'home' ? 'text-primary' : ''}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setCurrentPage('catalog')}
                className={`font-medium transition-colors hover:text-primary ${currentPage === 'catalog' ? 'text-primary' : ''}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`font-medium transition-colors hover:text-primary ${currentPage === 'about' ? 'text-primary' : ''}`}
              >
                О компании
              </button>
              <button 
                onClick={() => setCurrentPage('contacts')}
                className={`font-medium transition-colors hover:text-primary ${currentPage === 'contacts' ? 'text-primary' : ''}`}
              >
                Контакты
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'catalog' && renderCatalog()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'contacts' && renderContacts()}
      </main>

      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg">BHBS Химика</span>
              </div>
              <p className="text-sm opacity-80">Бытовая химия и косметика для дома и бизнеса</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => setCurrentPage('about')} className="hover:opacity-100">О нас</button></li>
                <li><button onClick={() => setCurrentPage('contacts')} className="hover:opacity-100">Контакты</button></li>
                <li><button className="hover:opacity-100">Доставка</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => setCurrentPage('catalog')} className="hover:opacity-100">Все товары</button></li>
                <li><button className="hover:opacity-100">Бытовая химия</button></li>
                <li><button className="hover:opacity-100">Косметика</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@bhbs.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-60">
            © 2024 BHBS Химика. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;