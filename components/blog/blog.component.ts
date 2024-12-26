import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatGridListModule, MatToolbarModule, CommonModule, MatListModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  posts = [
    { id: 1, title: 'The Future of Construction: AI & Robotics', description: 'Exploring how AI and robotics are transforming the construction industry.', image: 'https://media.licdn.com/dms/image/D5612AQFKeWpdEbo1gQ/article-cover_image-shrink_720_1280/0/1707422207914?e=2147483647&v=beta&t=k5NJp0uX1aiCdvcmeCKy0XafvmYoFaiEcFr4mCXWdbs', category: 'construction-technology' },
    { id: 2, title: 'Safety First: Essential Measures in Construction', description: 'A comprehensive guide to construction site safety protocols and practices.', image: 'https://img.freepik.com/premium-photo/safety-first-concept-with-hard-hat_23-2150001843.jpg', category: 'safety' },
    { id: 3, title: 'Sustainable Building Practices: The Future of Construction', description: 'How sustainable materials and techniques are changing the way we build.', image: 'https://media.licdn.com/dms/image/v2/D5612AQE8d6zNZqBPEw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1720972247632?e=2147483647&v=beta&t=rYIgteSulnX5G5M0Z8Pin3u3G2KpafL0stzqLRIph9Y', category: 'sustainability' },
    { id: 4, title: 'Top Construction Materials You Need to Know', description: 'An overview of the most essential materials used in modern construction projects.', image: 'https://structuralengineeringbasics.com/wp-content/uploads/2019/05/STRUCTURAL-ENGINEERING-MATERIALS-1024x530-1-1200x720.webp', category: 'materials' },
    { id: 5, title: '3D Printing in Construction: Revolutionizing the Industry', description: 'How 3D printing is creating a new era in construction with faster, more efficient processes.', image: 'https://www.colliers.com/-/media/images/colliers/asia/india/blogs-images/2023/1536x1040_taha.ashx?bid=10b5c01c3ab6482e848f4dcfa2cfd735&h=1040&w=1536&hash=1436E32A7111B2068B8F2A9331FA5A0D', category: 'construction-technology' },
    { id: 6, title: 'How to Manage Construction Site Risks', description: 'Risk management strategies every construction site manager should follow.', image: 'https://consultleopard.com/wp-content/uploads/2020/06/0424192d7e38c2a9eb737c119a36b560.jpg', category: 'safety' },
    // More posts can be added...
  ];

  filteredPosts = this.posts; // Default to show all posts
  activeCategory = 'all'; // Default active category

  constructor() { }

  ngOnInit(): void {
  }

  // Filter posts based on selected category
  filterCategory(category: string): void {
    this.activeCategory = category; // Set active category
    if (category === 'all') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post => post.category === category);
    }
  }
}
