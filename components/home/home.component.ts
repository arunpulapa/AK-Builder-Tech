import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeTab: string = 'about';
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  services: Service[] = [
    {
      icon: 'fa-wrench', // Use the correct Font Awesome class name
      title: 'Repair & Expand',
      description: 'Ak collaborative approach to preconstruction...'
    },
    {
      icon: 'fa-building',
      title: 'General Contracting',
      description: 'Ak collaborative approach to preconstruction...'
    },
    {
      icon: 'fa-truck',
      title: 'Flooring & Roofing',
      description: 'Ak collaborative approach to preconstruction...'
    },
    {
      icon: 'fa-wrench', // Use Font Awesome icon name
      title: 'Building Renovation',
      description: 'Ak collaborative approach to preconstruction...'
    },
    {
      icon: 'fa-pencil-ruler', // Architecture icon
      title: 'Architecture Design',
      description: 'Ak collaborative approach to preconstruction...'
    },
    {
      icon: 'fa-hard-hat', // Construction icon
      title: 'Construction',
      description: 'Ak collaborative approach to preconstruction...'
    }
  ];
  servicesone = [
    {
      id: 1,
      title: 'Repair & Expand',
      description:
        'Ak collaborative approach to preconstruction, founded on transparency and accountability is the most trusted and comprehensive in the industry.',
      image: 'https://i.imghippo.com/files/jUnk5360zxo.webp', // Replace with actual path
    },
    {
      id: 2,
      title: 'General Contracting',
      description:
        'Ak collaborative approach to preconstruction, founded on transparency and accountability is the most trusted and comprehensive in the industry.',
      image: 'https://i.imghippo.com/files/RQhd5698ek.webp', // Replace with actual path
    },
    {
      id: 3,
      title: 'Flooring & Roofing',
      description:
        'Ak collaborative approach to preconstruction, founded on transparency and accountability is the most trusted and comprehensive in the industry.',
      image: 'https://i.imghippo.com/files/ruGL4250C.webp', // Replace with actual path
    },
  ];

  testimonials = [
    {
      name: 'Thamos Miller',
      role: 'CEO Buja Builder',
      image: 'path-to-thamos-image.jpg',
    },
    {
      name: 'Thamso Wallim',
      role: 'CEO Buja Builder',
      image: 'path-to-thamso-image.jpg',
    },
    {
      name: 'Billa Rose',
      role: 'CEO Buja Builder',
      image: 'path-to-billa-image.jpg',
    },
  ];

  news = [
    {
      date: '25 Sep',
      title: 'High Productivity Lorries in the UK.',
      author: 'Jamie Milson',
    },
    {
      date: '25 Sep',
      title: 'Eco-Link B-Double Demonstration',
      author: 'Jamie Milson',
    },
    {
      date: '25 Sep',
      title: 'The current UK Haulage Market – How will this...',
      author: 'Jamie Milson',
    },
  ];
  posts = [
    {
      image: 'https://i.imghippo.com/files/nJS5565VM.webp',
      title: 'Best for any industrial & business solution',
      date: 'Fri Jun 19 2020',
      comments: 0,
    },
    {
      image: 'https://i.imghippo.com/files/BG3894Hcc.webp',
      title: 'Best for any industrial & business solution',
      date: 'Fri Jun 19 2020',
      comments: 0,
    },
    {
      image: 'https://i.imghippo.com/files/nJS5565VM.webp',
      title: 'Best for any industrial & business solution',
      date: 'Fri Jun 19 2020',
      comments: 0,
    },
  ];
  // Icon mapping with specific Font Awesome classes
  getIconClass(icon: string): string {
    const iconMap: { [key: string]: string } = {
      'fa-excavator': 'fas fa-excavator',
      'fa-building': 'fas fa-building',
      'fa-truck': 'fas fa-truck',
      'fa-wrench': 'fas fa-wrench',
      'fa-pencil-ruler': 'fas fa-pencil-ruler',
      'fa-hard-hat': 'fas fa-hard-hat'
    };

    return iconMap[icon] || ''; // Return empty string if no match is found
  }
}