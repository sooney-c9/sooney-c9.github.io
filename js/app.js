const shortcutList = document.getElementById('shortcutList');
const shortCount = document.getElementById('shortCount');

const listShortcuts = [
	{
		name: '8P8C',
		fname: '8 Position, 8 Contact ',
		desc: 'standardowy złącz RJ45 używany w sieciach Ethernet.',
	},
	{
		name: 'ACL',
		fname: 'Access Control List ',
		desc: 'lista kontroli dostępu, określająca, które urządzenia lub użytkownicy mają dostęp do sieci lub usług.',
	},
	{
		name: 'ADSL',
		fname: 'Asymmetric Digital Subscriber Line ',
		desc: 'Technologia dostępu do Internetu poprzez linię telefoniczną',
	},
	{
		name: 'AP',
		fname: 'Access Point',
		desc: 'urządzenie sieciowe, które pozwala na połączenie urządzeń bezprzewodowych z siecią przewodową',
	},
	{
		name: 'APIPA',
		fname: 'Automatic Private IP Addressing',
		desc: 'automatyczne przydzielanie adresów IP w sieciach lokalnych bez użycia serwera DHCP',
	},
	{
		name: 'ARP',
		fname: 'Address Resolution Protocol ',
		desc: 'protokół rozwiązywania adresów, służący do mapowania adresów warstwy sieciowej na adresy warstwy łącza danych.',
	},
	{
		name: 'ATM',
		fname: 'Asynchronous Transfer Mode',
		desc: 'technologia sieciowa, która zapewnia szybką transmisję danych o stałym rozmiarze pakietu',
	},
	{
		name: 'BERT',
		fname: 'Bit Error Rate Test',
		desc: 'test określający ilość błędów w transmisji danych',
	},
	{
		name: 'BNC',
		fname: 'Bayonet Neill-Concelman',
		desc: 'rodzaj złącza koaksjalnego stosowanego w sieciach komputerowych.',
	},
	{
		name: 'CAM',
		fname: 'Content Addressable Memory',
		desc: 'pamięć zawierająca adresy fizyczne urządzeń sieciowych, stosowana w switchach.',
	},
	{
		name: 'CDP',
		fname: 'Cisco Discovery Protocol',
		desc: 'protokół opracowany przez firmę Cisco, służący do zdalnego zarządzania siecią',
	},
	{
		name: 'CHAP',
		fname: 'Challenge Handshake Authentication Protocol',
		desc: 'protokół uwierzytelniania, który wykorzystuje challenge-response do weryfikacji tożsamości użytkownika.',
	},
	{
		name: 'CLI',
		fname: 'Command Line Interface',
		desc: 'interfejs linii komend, umożliwiający użytkownikom wprowadzanie poleceń tekstowych w celu kontroli systemu',
	},
	{
		name: 'CRC',
		fname: 'Cyclic Redundancy Check',
		desc: 'technika wykrywania błędów w transmisji danych',
	},
	{
		name: 'CSMA/CA',
		fname: 'Carrier Sense Multiple Access with Collision Avoidance',
		desc: 'technika kontroli dostępu do medium transmisyjnego nasluchuja przed transmisja',
	},
	{
		name: 'CSMA/CD',
		fname: 'Carrier Sense Multiple Access with Collision Detection',
		desc: 'technika kontroli dostępu do medium transmisyjnego, nasluchuja przed transmisja i wykrywaja kolizje',
	},
	{
		name: 'DDoS',
		fname: 'Distributed Denial of Service',
		desc: 'atak sieciowy, w którym wiele urządzeń zainfekowanych złośliwym oprogramowaniem działa jako botnet i jednocześnie wysyła duże ilości ruchu do jednego celu',
	},
	{
		name: 'DNS',
		fname: 'Domain Name System',
		desc: 'system nazw domenowych, służący do przypisywania adresów IP do nazw domenowych.',
	},
	{
		name: 'DoS',
		fname: 'Denial of Service',
		desc: 'atak sieciowy, w którym cel zostaje przeciążony dużą ilością ruchu, co powoduje zablokowanie usługi dla użytkowników.',
	},
	{
		name: 'DTP',
		fname: 'Dynamic Trunking Protocol',
		desc: 'protokół umożliwiający automatyczne skonfigurowanie trybu pracy portu switcha (access lub trunk) w zależności od podłączonego urządzenia.',
	},
	{
		name: 'EIGRP',
		fname: 'Enhanced Interior Gateway Routing Protocol',
		desc: 'protokół routingu używany w sieciach IP, opracowany przez firmę Cisco.',
	},
	{
		name: 'FEXT',
		fname: 'Far End Crosstalk',
		desc: 'rodzaj zakłóceń występujący w przewodach transmisyjnych, kiedy sygnał z jednego przewodu wpływa na inny przewód w odległości większej niż kilka metrów.',
	},
	{
		name: 'FTP',
		fname: 'File Transfer Protocol',
		desc: 'protokół służący do przesyłania plików między urządzeniami.',
	},
	{
		name: 'FTTH',
		fname: 'Fiber To The Home',
		desc: 'technologia dostępu do Internetu poprzez światłowody, zapewniająca wysoką przepustowość i szybkość transmisji.',
	},
	{
		name: 'GUI',
		fname: 'Graphical User Interface',
		desc: 'interfejs użytkownika, w którym informacje są przedstawione w formie graficznej.',
	},
	{
		name: 'HTTP',
		fname: 'Hypertext Transfer Protocol',
		desc: 'protokół służący do przesyłania informacji między serwerem a przeglądarką internetową',
	},
	{
		name: 'HTTPS',
		fname: 'Hypertext Transfer Protocol Secure',
		desc: 'protokół służący do bezpiecznej transmisji danych między serwerem a przeglądarką internetową.',
	},
	{
		name: 'ICMP',
		fname: 'Internet Control Message Protocol',
		desc: 'protokół używany w sieciach IP do przesyłania wiadomości kontrolnych i diagnostycznych.',
	},
	{
		name: 'IGRP',
		fname: 'Interior Gateway Routing Protocol',
		desc: 'protokół routingu używany w sieciach IP, opracowany przez firmę Cisco.',
	},
	{
		name: 'IMAP',
		fname: 'Internet Message Access Protocol',
		desc: 'protokół służący do pobierania wiadomości e-mail z serwera.',
	},
	{
		name: 'IP',
		fname: 'Internet Protocol',
		desc: 'protokół warstwy sieciowej, służący do przesyłania pakietów między urządzeniami w sieci.',
	},
	{
		name: 'IPSEC',
		fname: 'Internet Protocol Security',
		desc: 'protokół służący do zapewnienia bezpieczeństwa transmisji danych w sieciach IP',
	},
	{
		name: 'IPX',
		fname: 'Internetwork Packet Exchange',
		desc: 'protokół sieciowy używany w sieciach Novell NetWare.',
	},
	{
		name: 'ISP',
		fname: 'Internet Service Provider',
		desc: 'dostawca usług internetowych, który umożliwia użytkownikom dostęp do Internetu',
	},
	{
		name: 'L2TP',
		fname: 'Layer 2 Tunneling Protocol',
		desc: 'protokół umożliwiający tworzenie wirtualnych sieci prywatnych (VPN) poprzez tunelowanie ruchu warstwy drugiej.',
	},
	{
		name: 'LAN',
		fname: 'Local Area Network',
		desc: 'sieć komputerowa o zasięgu lokalnym, zwykle obejmująca jedno pomieszczenie lub budynek.',
	},
	{
		name: 'LSA',
		fname: 'Link State Advertisement',
		desc: 'pakiet zawierający informacje o stanie łącza sieciowego, wysyłany w ramach protokołu routingu OSPF.',
	},
	{
		name: 'MAC',
		fname: 'Media Access Control',
		desc: 'adres fizyczny karty sieciowej, używany do identyfikacji urządzenia w sieci.',
	},
	{
		name: 'MAN',
		fname: 'Metropolitan Area Network',
		desc: 'sieć komputerowa o zasięgu metropolitalnym, obejmująca zwykle obszar miasta lub regionu.',
	},
	{
		name: 'MIMO',
		fname: 'Multiple Input Multiple Output',
		desc: 'technologia transmisji danych, wykorzystująca wiele anten do przesyłania i odbierania sygnałów radiowych.',
	},
	{
		name: 'MSTP',
		fname: 'Multiple Spanning Tree Protocol',
		desc: 'protokół zapewniający redundancję w sieciach Ethernet poprzez wykorzystanie wielu drzew rozpinających.',
	},
	{
		name: 'NEXT',
		fname: 'Near End Crosstalk',
		desc: 'rodzaj zakłóceń występujący w przewodach transmisyjnych, kiedy sygnał z jednego przewodu wpływa na inny przewód w pobliżu miejsca emisji.',
	},
	{
		name: 'NIC',
		fname: 'Network Interface Card',
		desc: 'karta sieciowa, umożliwiająca połączenie urządzenia z siecią komputerową.',
	},
	{
		name: 'NNTP',
		fname: 'Network News Transfer Protocol',
		desc: 'protokół służący do przesyłania wiadomości grup dyskusyjnych w Internecie.',
	},
	{
		name: 'NTP',
		fname: 'Network Time Protocol',
		desc: 'protokół służący do synchronizacji czasu na urządzeniach w sieci.',
	},
	{
		name: 'OSI/ISO',
		fname: 'Open Systems Interconnection/International Organization for Standardization',
		desc: 'model warstwowy komunikacji sieciowej, określający sposób przesyłania danych między urządzeniami.',
	},
	{
		name: 'OSPF',
		fname: 'Open Shortest Path First',
		desc: 'protokół routingu używany w sieciach IP, oparty na algorytmie Dijkstry.',
	},
	{
		name: 'OTDR',
		fname: 'Optical Time Domain Reflectometer',
		desc: ' urządzenie służące do pomiaru charakterystyk światłowodów.',
	},
	{
		name: 'P2P',
		fname: 'Peer-to-Peer',
		desc: 'architektura sieciowa, w której każde urządzenie ma równorzędny status i może przetwarzać i udostępniać zasoby dla innych urządzeń.',
	},
	{
		name: 'PAN',
		fname: 'Personal Area Network',
		desc: 'sieć komputerowa o zasięgu osobistym, obejmująca zwykle urządzenia znajdujące się w bliskiej odległości od siebie.',
	},
	{
		name: 'PAP',
		fname: 'Password Authentication Protocol',
		desc: 'protokół uwierzytelniania użytkowników w sieciach komputerowych.',
	},
	{
		name: 'PON',
		fname: 'Passive Optical Network',
		desc: 'sieć optyczna, w której transmisja danych odbywa się bez wykorzystania wzmacniaczy lub przetworników sygnału.',
	},
	{
		name: 'POP3',
		fname: 'Post Office Protocol 3',
		desc: 'jest to protokół służący do odbierania poczty elektronicznej z serwera poczty',
	},
	{
		name: 'PPP',
		fname: 'Point-to-Point Protocol',
		desc: 'jest to protokół służący do nawiązywania połączenia pomiędzy dwoma punktami końcowymi, na przykład pomiędzy komputerem a dostawcą internetu.',
	},
	{
		name: 'PPTP',
		fname: 'Point-to-Point Tunneling Protocol',
		desc: 'jest to protokół służący do tworzenia wirtualnych prywatnych sieci (VPN).',
	},
	{
		name: 'PVST',
		fname: 'Per-VLAN Spanning Tree',
		desc: 'jest to rozszerzenie protokołu STP, które umożliwia włączenie wielu drzew rozpinających (po jednym na każdą sieć VLAN) w jednej sieci. ',
	},
	{
		name: 'QoS',
		fname: 'Quality of Service',
		desc: 'jest to zestaw technologii umożliwiających zarządzanie przepływem danych w sieci, tak aby zapewnić określoną jakość usług.',
	},
	{
		name: 'QSS/WPS',
		fname: 'Quick Security Setup/Wi-Fi Protected Setup',
		desc: 'jest to protokół bezpieczeństwa Wi-Fi, który umożliwia szybkie i łatwe nawiązanie bezpiecznego połączenia pomiędzy urządzeniem a siecią Wi-Fi.',
	},
	{
		name: 'RDP',
		fname: 'Remote Desktop Protocol',
		desc: 'jest to protokół służący do zdalnego zarządzania komputerem.',
	},
	{
		name: 'RIP',
		fname: 'Routing Information Protocol',
		desc: 'jest to protokół routingu stosowany w sieciach IP.',
	},
	{
		name: 'RPSMA',
		fname: 'Reverse Polarity SubMiniature Version A',
		desc: 'jest to rodzaj złącza antenowego stosowanego w sieciach bezprzewodowych',
	},
	{
		name: 'RSTP',
		fname: 'Rapid Spanning Tree Protocol',
		desc: 'jest to protokół z rodziny STP, który umożliwia szybkie odtwarzanie drzewa rozpinającego w przypadku awarii sieci.',
	},
	{
		name: 'SFTP',
		fname: 'Secure File Transfer Protocol',
		desc: 'protokół do transferu plików przez sieć, zapewniający bezpieczny kanał komunikacyjny.',
	},
	{
		name: 'SMTP',
		fname: 'Simple Mail Transfer Protocol',
		desc: 'protokół używany do przesyłania poczty elektronicznej w sieciach komputerowych',
	},
	{
		name: 'SNMP',
		fname: 'Simple Network Management Protocol',
		desc: 'protokół służący do monitorowania i zarządzania urządzeniami sieciowymi, takimi jak routery, przełączniki czy serwery.',
	},
	{
		name: 'SPX',
		fname: 'Sequenced Packet Exchange',
		desc: 'protokół transportowy opracowany przez Novell do użytku w sieciach NetWare.',
	},
	{
		name: 'SSH',
		fname: 'Secure Shell',
		desc: 'protokół sieciowy zapewniający bezpieczny kanał komunikacyjny, który umożliwia zdalny dostęp do serwera.',
	},
	{
		name: 'SSID',
		fname: 'Service Set Identifier',
		desc: 'unikalny identyfikator sieci bezprzewodowej.',
	},
	{
		name: 'SSL',
		fname: 'Secure Sockets Layer',
		desc: 'protokół zapewniający bezpieczne połączenie sieciowe, używany między innymi do transakcji online.',
	},
	{
		name: 'SSTP',
		fname: 'Secure Socket Tunneling Protocol',
		desc: 'protokół tunelowy zapewniający bezpieczne połączenie sieciowe między klientem a serwerem VPN.',
	},
	{
		name: 'STP',
		fname: 'Spanning Tree Protocol',
		desc: 'protokół umożliwiający wykrywanie i eliminowanie pętli w topologii sieciowej.',
	},
	{
		name: 'TCP',
		fname: 'Transmission Control Protocol',
		desc: 'protokół transportowy, który zapewnia niezawodny, uporządkowany i błędów korekcyjnych transfer danych.',
	},
	{
		name: 'TCP/IP',
		fname: 'Transmission Control Protocol/Internet Protocol',
		desc: 'zestaw protokołów sieciowych używanych do komunikacji w Internecie.',
	},
	{
		name: 'TDR',
		fname: 'Time Domain Reflectometer',
		desc: 'urządzenie diagnostyczne używane do lokalizowania uszkodzeń w kablu sieciowym',
	},
	{
		name: 'TELNET',
		fname: ' ',
		desc: 'protokół sieciowy, który umożliwia zdalne logowanie do serwera',
	},
	{
		name: 'TFTP',
		fname: 'Trivial File Transfer Protocol',
		desc: ' protokół używany do transferu plików przez sieć, podobny do FTP, ale prostszy i mniej zaawansowany',
	},
	{
		name: 'TLS',
		fname: 'Transport Layer Security',
		desc: 'protokół bezpieczeństwa komunikacji, który zapewnia poufność i integralność danych podczas transmisji.',
	},
	{
		name: 'TTL',
		fname: 'Time To Live',
		desc: 'wartość pola w nagłówku pakietu sieciowego, która określa, ile routerów może przetworzyć pakiet przed jego odrzuceniem.',
	},
	{
		name: 'UDP',
		fname: 'User Datagram Protocol',
		desc: 'protokół transportowy, który zapewnia szybki, ale mniej niezawodny transfer danych',
	},
	{
		name: 'URL',
		fname: 'Uniform Resource Locator',
		desc: 'służy do identyfikowania i lokalizowania zasobów w internecie, takich jak strony internetowe czy pliki.',
	},
	{
		name: 'VDSL',
		fname: 'Very high-speed Digital Subscriber Line',
		desc: 'technologia transmisji danych przez linię telefoniczną, która umożliwia wysoką przepustowość.',
	},
	{
		name: 'VLAN',
		fname: 'Virtual Local Area Network',
		desc: 'umożliwia podział sieci fizycznej na wirtualne sieci lokalne, co pozwala na lepszą organizację i zarządzanie siecią.',
	},
	{
		name: 'VoIP',
		fname: 'Voice over Internet Protocol',
		desc: 'umożliwia przesyłanie głosu przez internet zamiast tradycyjnych sieci telefonicznych.',
	},
	{
		name: 'VPN',
		fname: 'Virtual Private Network',
		desc: 'umożliwia tworzenie bezpiecznego i prywatnego połączenia sieciowego przez internet.',
	},
	{
		name: 'VTP',
		fname: 'VLAN Trunking Protocol',
		desc: 'protokół umożliwiający automatyczne rozpoznawanie i konfigurację wirtualnych sieci LAN',
	},
	{
		name: 'WAN',
		fname: 'Wide Area Network',
		desc: ' sieć rozległa, obejmująca zazwyczaj większy obszar geograficzny.',
	},
	{
		name: 'WEP',
		fname: 'Wired Equivalent Privacy',
		desc: 'protokół szyfrowania wykorzystywany w bezprzewodowych sieciach komputerowych (WiFi) w celu zabezpieczenia prywatności transmisji danych.',
	},
	{
		name: 'Wi-Fi',
		fname: 'Wireless Fidelity',
		desc: 'technologia bezprzewodowej transmisji danych, która umożliwia łączenie urządzeń elektronicznych ze sobą poprzez bezprzewodową sieć',
	},
	{
		name: 'WLAN',
		fname: 'Wireless Local Area Network',
		desc: 'to bezprzewodowa sieć lokalna, która umożliwia połączenie urządzeń w sieci bez użycia przewodów.',
	},
	{
		name: 'WPA',
		fname: 'Wi-Fi Protected Access',
		desc: 'to protokół bezpieczeństwa stosowany w sieciach bezprzewodowych. WPA zastąpił starszy protokół WEP',
	},
];

const shortBody = () => {

	shortCount.textContent = listShortcuts.length;



	for (let i = 0; i < listShortcuts.length; i++){
		const el1 = document.createElement('div');

		el1.classList.add('shortcutBox');
		shortcutList.appendChild(el1);

		const p1 = document.createElement('p');

		p1.textContent = listShortcuts[i].name;
		p1.classList.add('Name');
		el1.appendChild(p1);

		const p2 = document.createElement('p');

		p2.textContent = listShortcuts[i].fname;
		p2.classList.add('Name');
		el1.appendChild(p2);

		const p3 = document.createElement('p');

		p3.textContent = listShortcuts[i].desc;
		p3.classList.add('Name');
		el1.appendChild(p3);
	};
};


