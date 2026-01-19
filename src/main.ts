import { bootstrapApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environments/environment';

// Se você quiser rotas
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    importProvidersFrom(
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,

      MatToolbarModule,
      MatListModule,
      MatIconModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,

      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,

      AppRoutingModule
    )
  ]
});
