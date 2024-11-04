import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-members',
  templateUrl: './board-members.component.html',
  styleUrls: ['./board-members.component.scss']
})
export class BoardMembersComponent implements OnInit {
  boardMembers = [
    {
      name: 'Sudhanshu Katiyar',
      position: 'Board Members',
      description: 'Mr Sudhanshu Katiyar is a technocrat having experience of more than 18 years in various MNCs. Presently he is working with HCL. He also owns a well-known intermediate college.',
      image: 'assets/board-members/sudhanshu katiyar.jpeg',
      isExpanded: false
    },
    {
      name: 'Amit Trivedi',
      position: 'Board Members',
      description: 'Mr Amit Trivedi is by profession a Company secretary. He owns degree of CS and LLB.  He worked at management position with companies like PWC and KPMG. He has exposure to work with government of various countries as financial advisor. Currently he is running his own firm. He is also manager of a well known intermediate college',
      image: 'assets/board-members/amit-trivedi.jpeg',
      isExpanded: false
    },
    {
      name: 'Umanath Tripathi',
      position: 'Board Members',
      description: 'Mr. Umanath Tripathi is a technocrat and entrepreneur. He is the CEO of EICE Technology Private Limited.',
      image: 'assets/board-members/umanath-tripathi.jpg',
      isExpanded: false
    },
    {
      name: 'Ram Tripathi',
      position: 'Board Members',
      description: 'Mr. Ram Manohar Nath Tripathi has extensive experience in training and placement. He currently works with Team Lease as a consultant.',
      image: 'assets/board-members/ram-tripathi.jpeg',
      isExpanded: false
    },
    {
      name: 'Sneha',
      position: 'Board Members',
      description: ' Ms Sneha is a well known brand manager with an experience of about 15 years. She has expertise in data science and digital marketing. She also owns her digital marketing firm DIGIMARPS.',
      image: 'assets/board-members/sneha-patel.jpeg',
      isExpanded: false
    },
    {
      name: 'Ghan Shyam Singh',
      position: 'Board Members',
      description: 'Mr. Ghan Shyam Singh is a social activist and real estate developer, known for his contributions to the social sector.',
      image: 'assets/board-members/ghanshyam-singh.jpg',
      isExpanded: false
    },
    {
      name: 'Servjeet Kaur',
      position: 'Board Members',
      description: 'Ms. Sarvjeet Kaur is a technocrat and NRI based in America. She is well known for her social activities and owns a nursing college in her hometown.',
      image: 'assets/board-members/sarvjeet-kaur.jpg',
      isExpanded: false
    },
    {
      name: 'Tarun Kumar Pandey',
      position: 'Board Members',
      description: 'Mr. Tarun Kumar Pandey is an advocate with around 20 years of experience, currently practicing in the Delhi High Court and Supreme Court.',
      image: 'assets/board-members/tarun-kumar-pandey.jpeg',
      isExpanded: false
    },
    {
      name: 'Asish Mishra',
      position: 'Board Members',
      description: 'Mr Ashish Mishra is working as senior software engineer with J P Morgan and he is also co founder of AlgoTutor an edtech Company.',
      image: 'assets/board-members/asish-mishra.jpg',
      isExpanded: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  toggleReadMore(member: any, event: Event): void {
    event.preventDefault();
    member.isExpanded = !member.isExpanded;
  }
}
